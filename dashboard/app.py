"""
Arcade Usage Dashboard — Streamlit app that pulls data from the Rancho open-webui
analytics API and renders interactive usage charts for admins.

Configuration (env vars or sidebar):
  ARCADE_API_URL   — Base URL of the open-webui instance
                     default: https://test-arcade.rbsdev.net
  ARCADE_API_KEY   — Admin API key (Bearer token)
  ARCADE_MOCK_DATA — Set to "1" to run entirely on fake data (no API required)
"""

import os
from datetime import datetime, timedelta, timezone

import pandas as pd
import plotly.express as px
import plotly.graph_objects as go
import requests
import streamlit as st

# ---------------------------------------------------------------------------
# Mock data — used when ARCADE_MOCK_DATA=1 or no API key is provided
# ---------------------------------------------------------------------------

_MOCK_SUMMARY = {
    "total_messages": 2757,
    "total_chats": 891,
    "total_models": 7,
    "total_users": 28,
}

_MOCK_MODELS = [
    {"model_id": "gpt-4o",                    "count": 847},
    {"model_id": "claude-3-5-sonnet-20241022","count": 634},
    {"model_id": "gpt-4o-mini",               "count": 521},
    {"model_id": "claude-3-haiku-20240307",   "count": 318},
    {"model_id": "llama3.1:70b",              "count": 203},
    {"model_id": "mistral-large-latest",      "count": 145},
    {"model_id": "gemini-1.5-pro",            "count":  89},
]


_MOCK_GROUPS = [
    {"id": "g-research",    "name": "Research"},
    {"id": "g-engineering", "name": "Engineering"},
    {"id": "g-clinical",    "name": "Clinical"},
    {"id": "g-datascience", "name": "Data Science"},
]

# Per-group model counts — keyed by group id
_MOCK_GROUP_MODELS = {
    "g-research":    [{"model_id": "gpt-4o", "count": 312}, {"model_id": "claude-3-5-sonnet-20241022", "count": 198}, {"model_id": "gpt-4o-mini", "count": 124}, {"model_id": "claude-3-haiku-20240307", "count": 87}, {"model_id": "llama3.1:70b", "count": 45}],
    "g-engineering": [{"model_id": "gpt-4o", "count": 245}, {"model_id": "claude-3-5-sonnet-20241022", "count": 167}, {"model_id": "gpt-4o-mini", "count": 203}, {"model_id": "claude-3-haiku-20240307", "count": 145}, {"model_id": "llama3.1:70b", "count": 98}],
    "g-clinical":    [{"model_id": "gpt-4o", "count": 189}, {"model_id": "claude-3-5-sonnet-20241022", "count": 145}, {"model_id": "gpt-4o-mini", "count": 112}, {"model_id": "claude-3-haiku-20240307", "count": 56}, {"model_id": "llama3.1:70b", "count": 32}],
    "g-datascience": [{"model_id": "gpt-4o", "count": 101}, {"model_id": "claude-3-5-sonnet-20241022", "count": 124}, {"model_id": "gpt-4o-mini", "count": 82}, {"model_id": "claude-3-haiku-20240307", "count": 30}, {"model_id": "llama3.1:70b", "count": 28}],
}

import time as _time
_now_ts = int(_time.time())
_day = 86400
_MOCK_USERS = [
    {"user_id": "u1",  "name": "Sarah Chen",    "email": "schen@rancho.bio",    "count": 287, "last_active_at": _now_ts - int(0.3*_day)},
    {"user_id": "u2",  "name": "Mike Torres",   "email": "mtorres@rancho.bio",  "count": 203, "last_active_at": _now_ts - int(0.8*_day)},
    {"user_id": "u3",  "name": "Aisha Patel",   "email": "apatel@rancho.bio",   "count": 178, "last_active_at": _now_ts - int(1.2*_day)},
    {"user_id": "u4",  "name": "James Liu",     "email": "jliu@rancho.bio",     "count": 156, "last_active_at": _now_ts - int(0.5*_day)},
    {"user_id": "u5",  "name": "Rachel Wong",   "email": "rwong@rancho.bio",    "count": 134, "last_active_at": _now_ts - int(2.1*_day)},
    {"user_id": "u6",  "name": "David Kim",     "email": "dkim@rancho.bio",     "count": 118, "last_active_at": _now_ts - int(3.4*_day)},
    {"user_id": "u7",  "name": "Nina Russo",    "email": "nrusso@rancho.bio",   "count":  98, "last_active_at": _now_ts - int(1.7*_day)},
    {"user_id": "u8",  "name": "Alex Okafor",   "email": "aokafor@rancho.bio",  "count":  87, "last_active_at": _now_ts - int(4.2*_day)},
    {"user_id": "u9",  "name": "Emily Zhao",    "email": "ezhao@rancho.bio",    "count":  72, "last_active_at": _now_ts - int(5.8*_day)},
    {"user_id": "u10", "name": "Tom Nakamura",  "email": "tnaka@rancho.bio",    "count":  61, "last_active_at": _now_ts - int(7.3*_day)},
    {"user_id": "u11", "name": "Lisa Ferreira", "email": "lferreira@rancho.bio","count":  45, "last_active_at": _now_ts - int(12.1*_day)},
    {"user_id": "u12", "name": "Ben Adeyemi",   "email": "badeyemi@rancho.bio", "count":  38, "last_active_at": _now_ts - int(14.5*_day)},
    {"user_id": "u13", "name": "Priya Sharma",  "email": "psharma@rancho.bio",  "count":  29, "last_active_at": _now_ts - int(18.3*_day)},
    {"user_id": "u14", "name": "Carlos Mendez", "email": "cmendez@rancho.bio",  "count":  22, "last_active_at": _now_ts - int(22.7*_day)},
    {"user_id": "u15", "name": "Yuki Tanaka",   "email": "ytanaka@rancho.bio",  "count":  18, "last_active_at": _now_ts - int(28.4*_day)},
]

# 30-day daily trend: weekdays only (0 on Sat/Sun), slight ramp over the month
_TREND_BASE = {
    "gpt-4o":                    [12,15,18,0,0,22,25,28,20,19,0,0,28,31,27,24,0,0,32,36,31,28,0,0,38,41,36,32,0,0],
    "claude-3-5-sonnet-20241022": [8,11,14,0,0,15,18,21,14,13,0,0,20,23,19,17,0,0,24,27,22,20,0,0,28,31,26,23,0,0],
    "gpt-4o-mini":               [5, 7, 9,0,0,10,12,14, 9, 8,0,0,13,15,12,11,0,0,16,18,14,13,0,0,19,21,17,15,0,0],
}

def _build_mock_daily() -> list[dict]:
    from datetime import date, timedelta
    start = date(2026, 6, 8)
    rows = []
    for i in range(30):
        d = start + timedelta(days=i)
        models = {mid: vals[i] for mid, vals in _TREND_BASE.items() if vals[i] > 0}
        rows.append({"date": d.isoformat(), "models": models})
    return rows


def _mock_all_users() -> list[dict]:
    return _MOCK_USERS

# ---------------------------------------------------------------------------
# Page config
# ---------------------------------------------------------------------------

st.set_page_config(
    page_title="Arcade Usage Dashboard",
    page_icon="🎯",
    layout="wide",
)

# ---------------------------------------------------------------------------
# API client
# ---------------------------------------------------------------------------

DEFAULT_API_URL = "https://test-arcade.rbsdev.net"


class ArcadeClient:
    """Thin wrapper around the open-webui analytics REST API."""

    def __init__(self, base_url: str, api_key: str) -> None:
        self.base_url = base_url.rstrip("/")
        self._session = requests.Session()
        self._session.headers["Authorization"] = f"Bearer {api_key}"

    def _get(self, path: str, params: dict | None = None) -> dict | list:
        url = f"{self.base_url}{path}"
        resp = self._session.get(url, params=params, timeout=30)
        resp.raise_for_status()
        return resp.json()

    # -- analytics endpoints -------------------------------------------------

    def summary(self, start_ts: int | None, end_ts: int | None) -> dict:
        return self._get("/api/v1/analytics/summary", _date_params(start_ts, end_ts))

    def model_analytics(
        self, start_ts: int | None, end_ts: int | None, group_id: str | None = None
    ) -> list[dict]:
        params = _date_params(start_ts, end_ts)
        if group_id:
            params["group_id"] = group_id
        return self._get("/api/v1/analytics/models", params)["models"]

    def user_analytics(
        self,
        start_ts: int | None,
        end_ts: int | None,
        group_id: str | None = None,
        limit: int = 500,
    ) -> list[dict]:
        params = {**_date_params(start_ts, end_ts), "limit": limit}
        if group_id:
            params["group_id"] = group_id
        return self._get("/api/v1/analytics/users", params)["users"]

    def daily_stats(
        self, start_ts: int | None, end_ts: int | None, group_id: str | None = None
    ) -> list[dict]:
        params = {**_date_params(start_ts, end_ts), "granularity": "daily"}
        if group_id:
            params["group_id"] = group_id
        return self._get("/api/v1/analytics/daily", params)["data"]

    # -- users & groups ------------------------------------------------------

    def groups(self) -> list[dict]:
        return self._get("/api/v1/groups/")

    def users_page(self, page: int = 1) -> dict:
        """Returns {users: [...], total: int}. Page size is fixed at 30 server-side."""
        return self._get("/api/v1/users/", {"page": page})

    def all_users(self) -> list[dict]:
        """Fetches all users by paginating through every page."""
        page = 1
        collected: list[dict] = []
        while True:
            result = self.users_page(page)
            batch = result.get("users", [])
            if not batch:
                break
            collected.extend(batch)
            if len(collected) >= result.get("total", 0):
                break
            page += 1
        return collected


def _date_params(start_ts: int | None, end_ts: int | None) -> dict:
    p: dict = {}
    if start_ts is not None:
        p["start_date"] = start_ts
    if end_ts is not None:
        p["end_date"] = end_ts
    return p


# ---------------------------------------------------------------------------
# Cached data fetchers — keyed on (url, key, start_ts, end_ts)
# ---------------------------------------------------------------------------

@st.cache_data(ttl=300, show_spinner=False)
def fetch_summary(base_url: str, api_key: str, start_ts: int | None, end_ts: int | None) -> dict:
    return ArcadeClient(base_url, api_key).summary(start_ts, end_ts)


@st.cache_data(ttl=300, show_spinner=False)
def fetch_model_analytics(
    base_url: str, api_key: str, start_ts: int | None, end_ts: int | None
) -> list[dict]:
    return ArcadeClient(base_url, api_key).model_analytics(start_ts, end_ts)


@st.cache_data(ttl=300, show_spinner=False)
def fetch_model_analytics_by_group(
    base_url: str, api_key: str, start_ts: int | None, end_ts: int | None, group_id: str
) -> list[dict]:
    return ArcadeClient(base_url, api_key).model_analytics(start_ts, end_ts, group_id=group_id)


@st.cache_data(ttl=300, show_spinner=False)
def fetch_user_analytics(
    base_url: str, api_key: str, start_ts: int | None, end_ts: int | None
) -> list[dict]:
    return ArcadeClient(base_url, api_key).user_analytics(start_ts, end_ts)


@st.cache_data(ttl=300, show_spinner=False)
def fetch_daily_stats(
    base_url: str, api_key: str, start_ts: int | None, end_ts: int | None
) -> list[dict]:
    return ArcadeClient(base_url, api_key).daily_stats(start_ts, end_ts)


@st.cache_data(ttl=300, show_spinner=False)
def fetch_groups(base_url: str, api_key: str) -> list[dict]:
    return ArcadeClient(base_url, api_key).groups()


@st.cache_data(ttl=300, show_spinner=False)
def fetch_all_users(base_url: str, api_key: str) -> list[dict]:
    return ArcadeClient(base_url, api_key).all_users()


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
    api_key = st.text_input(
        "Admin API key",
        value=os.getenv("ARCADE_API_KEY", ""),
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
    _quick_map = {
        "Last 7 days": 7,
        "Last 30 days": 30,
        "Last 90 days": 90,
        "All time": None,
    }
    _days = _quick_map[quick]
    default_start = (_now - timedelta(days=_days)).date() if _days else None
    custom_start = st.date_input("From", value=default_start)
    custom_end = st.date_input("To", value=_now.date())

    start_ts = int(datetime(custom_start.year, custom_start.month, custom_start.day).timestamp()) if custom_start else None
    end_ts = int(datetime(custom_end.year, custom_end.month, custom_end.day, 23, 59, 59).timestamp()) if custom_end else None

    st.divider()
    top_n = st.slider("Top N models to show", min_value=5, max_value=30, value=10)
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

if use_mock:
    summary = _MOCK_SUMMARY
    model_data = _MOCK_MODELS
    user_data = _MOCK_USERS
    daily_data = _build_mock_daily()
    groups_raw = _MOCK_GROUPS
    all_users_raw = _MOCK_USERS  # mock users already carry last_active_at
else:
    with st.spinner("Loading data…"):
        try:
            summary = fetch_summary(api_url, api_key, start_ts, end_ts)
            model_data = fetch_model_analytics(api_url, api_key, start_ts, end_ts)
            user_data = fetch_user_analytics(api_url, api_key, start_ts, end_ts)
            daily_data = fetch_daily_stats(api_url, api_key, start_ts, end_ts)
            groups_raw = fetch_groups(api_url, api_key)
            all_users_raw = fetch_all_users(api_url, api_key)
        except requests.HTTPError as exc:
            st.error(f"API error {exc.response.status_code}: {exc.response.text[:300]}")
            st.stop()
        except requests.RequestException as exc:
            st.error(f"Could not reach {api_url}: {exc}")
            st.stop()

# ---------------------------------------------------------------------------
# Build DataFrames
# ---------------------------------------------------------------------------

df_models = pd.DataFrame(model_data) if model_data else pd.DataFrame(columns=["model_id", "count"])
df_users_analytics = pd.DataFrame(user_data) if user_data else pd.DataFrame(
    columns=["user_id", "name", "email", "count"]
)

# User recency: merge analytics counts with last_active_at from /users/
# Mock records key by "user_id"; real API records key by "id".
_uid_key = "user_id" if use_mock else "id"
users_lookup = {u[_uid_key]: u for u in all_users_raw}
if not df_users_analytics.empty:
    df_users_analytics["last_active_at"] = df_users_analytics["user_id"].map(
        lambda uid: users_lookup.get(uid, {}).get("last_active_at")
    )
    df_users_analytics["last_active_dt"] = pd.to_datetime(
        df_users_analytics["last_active_at"], unit="s", utc=True, errors="coerce"
    )
    now_utc = pd.Timestamp.now(tz="UTC")
    df_users_analytics["days_since_active"] = (
        (now_utc - df_users_analytics["last_active_dt"]).dt.total_seconds() / 86400
    ).round(1)
    df_users_analytics["display_name"] = df_users_analytics.apply(
        lambda r: r["name"] or r["email"] or r["user_id"][:8], axis=1
    )

# Groups
df_groups = pd.DataFrame(
    [{"id": g["id"], "name": g["name"]} for g in groups_raw]
) if groups_raw else pd.DataFrame(columns=["id", "name"])

# ---------------------------------------------------------------------------
# Header
# ---------------------------------------------------------------------------

st.title("🎯 Arcade Usage Dashboard")
range_label = f"{custom_start} → {custom_end}" if custom_start else "All time"
st.caption(f"Instance: `{api_url}` · Range: {range_label} · Data refreshes every 5 min")

# ---------------------------------------------------------------------------
# KPI row
# ---------------------------------------------------------------------------

col1, col2, col3, col4 = st.columns(4)
col1.metric("Total users", f"{summary.get('total_users', 0):,}")
col2.metric("Total messages", f"{summary.get('total_messages', 0):,}")
col3.metric("Unique models used", f"{summary.get('total_models', 0):,}")
col4.metric("Active chats", f"{summary.get('total_chats', 0):,}")

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
# Section 2: Model usage by group
# ---------------------------------------------------------------------------

st.header("👥 Model Usage by Group")

if df_groups.empty:
    st.info("No groups found.")
else:
    with st.spinner("Loading per-group model data…"):
        group_rows: list[dict] = []
        for _, grp in df_groups.iterrows():
            try:
                if use_mock:
                    grp_models = _MOCK_GROUP_MODELS.get(grp["id"], [])
                else:
                    grp_models = fetch_model_analytics_by_group(
                        api_url, api_key, start_ts, end_ts, grp["id"]
                    )
                for entry in grp_models:
                    group_rows.append(
                        {
                            "group": grp["name"],
                            "model_id": entry["model_id"],
                            "count": entry["count"],
                        }
                    )
            except Exception:
                pass  # Skip groups that error (permissions, etc.)

    if not group_rows:
        st.info("No per-group model data available.")
    else:
        df_group_models = pd.DataFrame(group_rows)

        # Restrict to top models overall so heatmap stays readable
        top_model_ids = df_models.head(top_n)["model_id"].tolist() if not df_models.empty else []
        df_heat = df_group_models[df_group_models["model_id"].isin(top_model_ids)]

        if df_heat.empty:
            df_heat = df_group_models

        pivot = df_heat.pivot_table(
            index="model_id", columns="group", values="count", aggfunc="sum", fill_value=0
        )

        fig = px.imshow(
            pivot,
            labels={"x": "Group", "y": "Model", "color": "Messages"},
            title="Message count: model × group",
            color_continuous_scale="Blues",
            aspect="auto",
        )
        fig.update_xaxes(tickangle=-30)
        st.plotly_chart(fig, use_container_width=True)

        with st.expander("Raw table"):
            st.dataframe(
                df_heat.sort_values(["group", "count"], ascending=[True, False]),
                use_container_width=True,
            )

st.divider()

# ---------------------------------------------------------------------------
# Section 3: User activity — recency & frequency
# ---------------------------------------------------------------------------

st.header("👤 User Activity")

if df_users_analytics.empty:
    st.info("No user activity data in this date range.")
else:
    col_freq, col_rec = st.columns(2)

    with col_freq:
        st.subheader("Frequency (messages sent)")
        top_freq = df_users_analytics.nlargest(top_n, "count")[
            ["display_name", "count"]
        ].copy()
        top_freq.columns = ["User", "Messages"]
        top_freq = top_freq.reset_index(drop=True)
        top_freq.index += 1

        fig_freq = px.bar(
            top_freq,
            x="Messages",
            y="User",
            orientation="h",
            title=f"Top {top_n} users by message count",
            color="Messages",
            color_continuous_scale="Purples",
        )
        fig_freq.update_layout(
            yaxis={"categoryorder": "total ascending"}, coloraxis_showscale=False
        )
        st.plotly_chart(fig_freq, use_container_width=True)

    with col_rec:
        st.subheader("Recency (days since last active)")
        df_rec = df_users_analytics.dropna(subset=["days_since_active"]).copy()
        df_rec = df_rec.nsmallest(top_n, "days_since_active")[
            ["display_name", "days_since_active", "count"]
        ]
        df_rec.columns = ["User", "Days since active", "Messages"]
        df_rec = df_rec.reset_index(drop=True)
        df_rec.index += 1

        fig_rec = px.bar(
            df_rec,
            x="Days since active",
            y="User",
            orientation="h",
            title=f"Top {top_n} most recently active users",
            color="Days since active",
            color_continuous_scale="RdYlGn_r",
        )
        fig_rec.update_layout(
            yaxis={"categoryorder": "total descending"}, coloraxis_showscale=False
        )
        st.plotly_chart(fig_rec, use_container_width=True)

    # Scatter: recency vs frequency
    st.subheader("Recency vs. Frequency")
    df_scatter = df_users_analytics.dropna(subset=["days_since_active"]).copy()
    if not df_scatter.empty:
        fig_sc = px.scatter(
            df_scatter,
            x="days_since_active",
            y="count",
            text="display_name",
            labels={
                "days_since_active": "Days since last active (lower = more recent)",
                "count": "Messages sent",
            },
            title="User recency vs. frequency",
            hover_data={"display_name": True, "days_since_active": True, "count": True},
        )
        fig_sc.update_traces(textposition="top center", textfont_size=9)
        st.plotly_chart(fig_sc, use_container_width=True)

    with st.expander("Full user table"):
        display_cols = ["display_name", "count", "days_since_active", "email"]
        available = [c for c in display_cols if c in df_users_analytics.columns]
        df_show = df_users_analytics[available].rename(
            columns={
                "display_name": "User",
                "count": "Messages",
                "days_since_active": "Days since active",
                "email": "Email",
            }
        ).sort_values("Messages", ascending=False).reset_index(drop=True)
        df_show.index += 1
        st.dataframe(df_show, use_container_width=True)

st.divider()

# ---------------------------------------------------------------------------
# Section 4: Usage trends over time
# ---------------------------------------------------------------------------

st.header("📈 Usage Trends")

if not daily_data:
    st.info("No daily trend data in this date range.")
else:
    # Flatten {date, models: {model_id: count}} into tidy DataFrame
    rows: list[dict] = []
    for entry in daily_data:
        for model_id, count in entry.get("models", {}).items():
            rows.append({"date": entry["date"], "model_id": model_id, "count": count})

    if rows:
        df_daily = pd.DataFrame(rows)
        df_daily["date"] = pd.to_datetime(df_daily["date"])

        # Limit to top models for legibility
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

        # Stacked area as alternative view
        df_pivot = df_daily_top.pivot_table(
            index="date", columns="model_id", values="count", aggfunc="sum", fill_value=0
        ).reset_index()

        fig_area = go.Figure()
        model_cols = [c for c in df_pivot.columns if c != "date"]
        for model_col in model_cols:
            fig_area.add_trace(
                go.Scatter(
                    x=df_pivot["date"],
                    y=df_pivot[model_col],
                    name=model_col,
                    stackgroup="one",
                    mode="none",
                )
            )
        fig_area.update_layout(
            title="Cumulative daily volume (stacked area)",
            xaxis_title="Date",
            yaxis_title="Messages",
            legend_title="Model",
        )
        st.plotly_chart(fig_area, use_container_width=True)

# ---------------------------------------------------------------------------
# Footer
# ---------------------------------------------------------------------------

st.divider()
st.caption(
    f"Arcade Usage Dashboard · Data from `{api_url}` · "
    f"Generated {datetime.now().strftime('%Y-%m-%d %H:%M')}"
)
