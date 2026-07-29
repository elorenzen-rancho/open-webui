"""
Arcade Usage Dashboard — Streamlit frontend.

Configuration (.env, env vars, or sidebar — see .env.example):
  ARCADE_API_URL   — Base URL of the open-webui instance
                     default: https://arcade.rbsprod.net
  ARCADE_API_KEY   — Admin API key (Bearer token)
  ARCADE_MOCK_DATA — Set to "1" to run entirely on fake data (no API required)
"""

import contextlib
import os
from datetime import datetime, timedelta, timezone
from pathlib import Path

import pandas as pd
import plotly.express as px
import requests
import streamlit as st
from dotenv import load_dotenv

from backend import (
    DEFAULT_API_URL,
    build_groups_df,
    build_user_analytics_df,
    load_all_data,
    load_group_model_data,
)

load_dotenv(Path(__file__).resolve().parent / ".env")

top_n = 10

# ---------------------------------------------------------------------------
# Page config
# ---------------------------------------------------------------------------

st.set_page_config(
    page_title="Arcade Usage Dashboard",
    page_icon="🎯",
    layout="wide",
)

# ---------------------------------------------------------------------------
# Sidebar — config & filters
# ---------------------------------------------------------------------------

with st.sidebar:
    st.title("⚙️ Config")

    use_mock = st.toggle(
        "Use mock data",
        value=os.getenv("ARCADE_MOCK_DATA", "0") == "1",
        help="Run on fake data — no API connection required",
    )

    api_url = st.text_input(
        "Arcade URL",
        value=os.getenv("ARCADE_API_URL", DEFAULT_API_URL),
        help="Base URL of the open-webui instance",
        disabled=use_mock,
    )

    _env_api_key = os.getenv("ARCADE_API_KEY", "")
    if _env_api_key:
        api_key = _env_api_key
        st.success("Admin API key loaded from .env", icon="🔒")
    else:
        api_key = st.text_input(
            "Admin API key",
            value="",
            type="password",
            help="Admin Bearer token (Settings → Account → API keys)",
            disabled=use_mock,
        )

    st.divider()
    st.subheader("Date range")
    quick = st.selectbox(
        "Quick range",
        ["Last 7 days", "Last 30 days", "Last 90 days", "All time"],
        index=1,
    )
    _now = datetime.now(tz=timezone.utc)
    _quick_map = {"Last 7 days": 7, "Last 30 days": 30, "Last 90 days": 90, "All time": None}
    _days = _quick_map[quick]
    default_start = (_now - timedelta(days=_days)).date() if _days else None
    custom_start = st.date_input("From", value=default_start)
    custom_end = st.date_input("To", value=_now.date())

    start_ts = int(datetime(custom_start.year, custom_start.month, custom_start.day).timestamp()) if custom_start else None
    end_ts = int(datetime(custom_end.year, custom_end.month, custom_end.day, 23, 59, 59).timestamp()) if custom_end else None

    st.divider()
    refresh = st.button("🔄 Refresh data", use_container_width=True)
    if refresh:
        st.cache_data.clear()

if not use_mock and not api_key:
    st.warning(
        "Enter an admin API key in the sidebar, or enable **Use mock data** to preview with fake data."
    )
    st.stop()

# ---------------------------------------------------------------------------
# Load data
# ---------------------------------------------------------------------------

_spinner = st.spinner("Loading data…") if not use_mock else contextlib.nullcontext()
with _spinner:
    try:
        data = load_all_data(use_mock, api_url, api_key, start_ts, end_ts)
    except requests.exceptions.ConnectionError:
        st.error(
            f"**Could not connect to `{api_url}`.**\n\n"
            "Check that the URL is correct and that you can reach it from this "
            "machine (VPN, firewall, etc.)."
        )
        st.stop()
    except requests.exceptions.Timeout:
        st.error(f"**Connection to `{api_url}` timed out.** The server may be down or unreachable.")
        st.stop()
    except requests.HTTPError as exc:
        status = exc.response.status_code
        if status == 401:
            st.error("**Authentication failed (401).** Check that your Admin API key is correct.")
        elif status == 403:
            st.error("**Access denied (403).** The API key must belong to an admin user.")
        elif status == 404:
            st.error(
                f"**Analytics API not found at `{api_url}` (404).** "
                "Check the URL, or confirm the server has `ENABLE_ADMIN_ANALYTICS` set."
            )
        else:
            st.error(f"**API error {status}** at `{api_url}`:\n\n{exc.response.text[:300]}")
        st.stop()
    except (requests.RequestException, KeyError, ValueError) as exc:
        st.error(f"**Unexpected error loading data from `{api_url}`:**\n\n{exc}")
        st.stop()

# ---------------------------------------------------------------------------
# Build DataFrames
# ---------------------------------------------------------------------------

df_models = pd.DataFrame(data["model_data"]) if data["model_data"] else pd.DataFrame(columns=["model_id", "count"])
df_users_analytics = build_user_analytics_df(data["user_data"], data["all_users_raw"], use_mock)
df_groups = build_groups_df(data["groups_raw"])
df_group_models, group_load_errors = load_group_model_data(
    df_groups, use_mock, api_url, api_key, start_ts, end_ts
)
if group_load_errors:
    st.warning(
        "Could not load team data for: " + "; ".join(group_load_errors)
    )

# ---------------------------------------------------------------------------
# Header
# ---------------------------------------------------------------------------

st.title("🎯 Arcade Usage Dashboard")
range_label = f"{custom_start} → {custom_end}" if custom_start else "All time"
st.caption(f"Instance: `{api_url}` · Range: {range_label} · Data refreshes every 24 hours")

# ---------------------------------------------------------------------------
# KPI row
# ---------------------------------------------------------------------------

_total_users = len(data["all_users_raw"])
_active_users = len(df_users_analytics) if not df_users_analytics.empty else 0
_total_msgs = data["summary"].get("total_messages", 0)
_adoption_pct = round(_active_users / _total_users * 100) if _total_users > 0 else 0
_avg_msgs = round(_total_msgs / _active_users, 1) if _active_users > 0 else 0

with st.container(horizontal=True):
    st.metric("Total messages", f"{_total_msgs:,}", border=True)
    st.metric("Active users *", f"{_active_users:,}", border=True)
    st.metric("Adoption rate **", f"{_adoption_pct}%", border=True)
    st.metric("Avg messages / user", f"{_avg_msgs}", border=True)

st.caption(
    "\\* Users who sent ≥ 1 message in the selected date range  ·  "
    "\\*\\* Active users ÷ total registered users"
)

st.divider()

# ---------------------------------------------------------------------------
# Section 1: Model usage
# ---------------------------------------------------------------------------

st.header("📊 Model Usage")

if df_models.empty:
    st.info("No model usage data in this date range.")
else:
    top_models = df_models.head(top_n).copy()
    fig = px.bar(
        top_models,
        x="count",
        y="model_id",
        orientation="h",
        labels={"count": "Messages", "model_id": "Model"},
        title=f"Top {top_n} models by message count",
        color="count",
        color_continuous_scale="Blues",
    )
    fig.update_layout(yaxis={"categoryorder": "total ascending"}, coloraxis_showscale=False)
    st.plotly_chart(fig, use_container_width=True)

st.divider()

# ---------------------------------------------------------------------------
# Section 2: Usage by team
# ---------------------------------------------------------------------------

st.header(":material/group: Usage by Team")

if df_group_models.empty:
    st.info("No group data available.")
else:
    col_bar, col_heat = st.columns([1, 2])

    with col_bar:
        with st.container(border=True):
            st.subheader("Messages by team")
            df_team_totals = (
                df_group_models.groupby("group")["count"]
                .sum()
                .reset_index()
                .rename(columns={"group": "Team", "count": "Messages"})
                .sort_values("Messages")
            )
            fig_team = px.bar(
                df_team_totals,
                x="Messages",
                y="Team",
                orientation="h",
                color="Messages",
                color_continuous_scale="Blues",
            )
            fig_team.update_layout(coloraxis_showscale=False)
            st.plotly_chart(fig_team)

    with col_heat:
        with st.container(border=True):
            st.subheader("Model × team breakdown")
            top_model_ids = df_models.head(top_n)["model_id"].tolist() if not df_models.empty else []
            df_heat = (
                df_group_models[df_group_models["model_id"].isin(top_model_ids)]
                if top_model_ids
                else df_group_models
            )
            if df_heat.empty:
                df_heat = df_group_models
            pivot = df_heat.pivot_table(
                index="model_id", columns="group", values="count", aggfunc="sum", fill_value=0
            )
            fig_heat = px.imshow(
                pivot,
                labels={"x": "Team", "y": "Model", "color": "Messages"},
                color_continuous_scale="Blues",
                aspect="auto",
            )
            fig_heat.update_xaxes(tickangle=-30)
            st.plotly_chart(fig_heat)

st.divider()

# ---------------------------------------------------------------------------
# Section 3: Usage trends over time
# ---------------------------------------------------------------------------

st.header("📈 Usage Trends")

if not data["daily_data"]:
    st.info("No daily trend data in this date range.")
else:
    rows: list[dict] = []
    for entry in data["daily_data"]:
        for model_id, count in entry.get("models", {}).items():
            rows.append({"date": entry["date"], "model_id": model_id, "count": count})

    if rows:
        df_daily = pd.DataFrame(rows)
        df_daily["date"] = pd.to_datetime(df_daily["date"])

        if not df_models.empty:
            top_ids = set(df_models.head(top_n)["model_id"])
            df_daily_top = df_daily[df_daily["model_id"].isin(top_ids)]
        else:
            df_daily_top = df_daily

        fig_trend = px.line(
            df_daily_top,
            x="date",
            y="count",
            color="model_id",
            labels={"date": "Date", "count": "Messages", "model_id": "Model"},
            title="Daily message volume by model",
            markers=True,
        )
        fig_trend.update_layout(legend_title="Model")
        st.plotly_chart(fig_trend, use_container_width=True)

# ---------------------------------------------------------------------------
# Footer
# ---------------------------------------------------------------------------

st.divider()
st.caption(
    f"Arcade Usage Dashboard · Data from `{api_url}` · "
    f"Generated {datetime.now().strftime('%Y-%m-%d %H:%M')}"
)
