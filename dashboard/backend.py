"""
Arcade Usage Dashboard — backend.
API client, mock data, cached fetchers, and DataFrame builders.
"""

import time as _time
from datetime import date, timedelta

import pandas as pd
import requests
import streamlit as st

DEFAULT_API_URL = "https://arcade.rbsprod.net"

# ---------------------------------------------------------------------------
# Mock data
# ---------------------------------------------------------------------------

_MOCK_SUMMARY = {
    "total_messages": 2757,
    "total_chats": 891,
    "total_models": 7,
    "total_users": 28,
}

_MOCK_MODELS = [
    {"model_id": "gpt-4o",                     "count": 847},
    {"model_id": "claude-3-5-sonnet-20241022",  "count": 634},
    {"model_id": "gpt-4o-mini",                 "count": 521},
    {"model_id": "claude-3-haiku-20240307",      "count": 318},
    {"model_id": "llama3.1:70b",                "count": 203},
    {"model_id": "mistral-large-latest",         "count": 145},
    {"model_id": "gemini-1.5-pro",              "count":  89},
]

_MOCK_GROUPS = [
    {"id": "g-research",    "name": "Research"},
    {"id": "g-engineering", "name": "Engineering"},
    {"id": "g-clinical",    "name": "Clinical"},
    {"id": "g-datascience", "name": "Data Science"},
]

_MOCK_GROUP_MODELS = {
    "g-research":    [{"model_id": "gpt-4o", "count": 312}, {"model_id": "claude-3-5-sonnet-20241022", "count": 198}, {"model_id": "gpt-4o-mini", "count": 124}, {"model_id": "claude-3-haiku-20240307", "count": 87}, {"model_id": "llama3.1:70b", "count": 45}],
    "g-engineering": [{"model_id": "gpt-4o", "count": 245}, {"model_id": "claude-3-5-sonnet-20241022", "count": 167}, {"model_id": "gpt-4o-mini", "count": 203}, {"model_id": "claude-3-haiku-20240307", "count": 145}, {"model_id": "llama3.1:70b", "count": 98}],
    "g-clinical":    [{"model_id": "gpt-4o", "count": 189}, {"model_id": "claude-3-5-sonnet-20241022", "count": 145}, {"model_id": "gpt-4o-mini", "count": 112}, {"model_id": "claude-3-haiku-20240307", "count": 56}, {"model_id": "llama3.1:70b", "count": 32}],
    "g-datascience": [{"model_id": "gpt-4o", "count": 101}, {"model_id": "claude-3-5-sonnet-20241022", "count": 124}, {"model_id": "gpt-4o-mini", "count": 82}, {"model_id": "claude-3-haiku-20240307", "count": 30}, {"model_id": "llama3.1:70b", "count": 28}],
}

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

_TREND_BASE = {
    "gpt-4o":                    [12,15,18,0,0,22,25,28,20,19,0,0,28,31,27,24,0,0,32,36,31,28,0,0,38,41,36,32,0,0],
    "claude-3-5-sonnet-20241022": [8,11,14,0,0,15,18,21,14,13,0,0,20,23,19,17,0,0,24,27,22,20,0,0,28,31,26,23,0,0],
    "gpt-4o-mini":               [5, 7, 9,0,0,10,12,14, 9, 8,0,0,13,15,12,11,0,0,16,18,14,13,0,0,19,21,17,15,0,0],
}


def _build_mock_daily() -> list[dict]:
    start = date(2026, 6, 8)
    rows = []
    for i in range(30):
        d = start + timedelta(days=i)
        models = {mid: vals[i] for mid, vals in _TREND_BASE.items() if vals[i] > 0}
        rows.append({"date": d.isoformat(), "models": models})
    return rows


# ---------------------------------------------------------------------------
# API client
# ---------------------------------------------------------------------------

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
        self, start_ts: int | None, end_ts: int | None, group_id: str | None = None, limit: int = 500
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
# Cached data fetchers
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
# Data loading
# ---------------------------------------------------------------------------

def load_all_data(
    use_mock: bool,
    api_url: str,
    api_key: str,
    start_ts: int | None,
    end_ts: int | None,
) -> dict:
    """Return all dashboard data as a dict. Raises requests exceptions on API failure."""
    if use_mock:
        return {
            "summary":       _MOCK_SUMMARY,
            "model_data":    _MOCK_MODELS,
            "user_data":     _MOCK_USERS,
            "daily_data":    _build_mock_daily(),
            "groups_raw":    _MOCK_GROUPS,
            "all_users_raw": _MOCK_USERS,
        }
    return {
        "summary":       fetch_summary(api_url, api_key, start_ts, end_ts),
        "model_data":    fetch_model_analytics(api_url, api_key, start_ts, end_ts),
        "user_data":     fetch_user_analytics(api_url, api_key, start_ts, end_ts),
        "daily_data":    fetch_daily_stats(api_url, api_key, start_ts, end_ts),
        "groups_raw":    fetch_groups(api_url, api_key),
        "all_users_raw": fetch_all_users(api_url, api_key),
    }


# ---------------------------------------------------------------------------
# DataFrame builders
# ---------------------------------------------------------------------------

def build_user_analytics_df(
    user_data: list[dict],
    all_users_raw: list[dict],
    use_mock: bool,
) -> pd.DataFrame:
    if not user_data:
        return pd.DataFrame(columns=["user_id", "name", "email", "count"])
    df = pd.DataFrame(user_data)
    _uid_key = "user_id" if use_mock else "id"
    users_lookup = {u[_uid_key]: u for u in all_users_raw}
    df["last_active_at"] = df["user_id"].map(
        lambda uid: users_lookup.get(uid, {}).get("last_active_at")
    )
    df["last_active_dt"] = pd.to_datetime(
        df["last_active_at"], unit="s", utc=True, errors="coerce"
    )
    now_utc = pd.Timestamp.now(tz="UTC")
    df["days_since_active"] = (
        (now_utc - df["last_active_dt"]).dt.total_seconds() / 86400
    ).round(1)
    df["display_name"] = df.apply(
        lambda r: r["name"] or r["email"] or r["user_id"][:8], axis=1
    )
    return df


def build_groups_df(groups_raw: list[dict]) -> pd.DataFrame:
    if not groups_raw:
        return pd.DataFrame(columns=["id", "name"])
    return pd.DataFrame([{"id": g["id"], "name": g["name"]} for g in groups_raw])


def load_group_model_data(
    df_groups: pd.DataFrame,
    use_mock: bool,
    api_url: str,
    api_key: str,
    start_ts: int | None,
    end_ts: int | None,
) -> tuple[pd.DataFrame, list[str]]:
    """Returns (data, errors). Per-group failures are collected rather than raised,
    so one bad group doesn't block the rest of the dashboard from rendering."""
    group_rows: list[dict] = []
    errors: list[str] = []
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
                    {"group": grp["name"], "model_id": entry["model_id"], "count": entry["count"]}
                )
        except requests.RequestException as exc:
            errors.append(f"{grp['name']}: {exc}")
    df = pd.DataFrame(group_rows) if group_rows else pd.DataFrame(
        columns=["group", "model_id", "count"]
    )
    return df, errors
