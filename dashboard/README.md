# Arcade Usage Dashboard

A Streamlit dashboard for viewing usage analytics from the Arcade open-webui instance: message volume, model usage, per-team breakdowns, active users, and daily trends. It reads from the open-webui admin analytics API (`/api/v1/analytics/*`) — no direct database access required.

## Prerequisites

- Python 3.10+
- An admin API key for the open-webui instance you want to query (**Settings → Account → API keys**, logged in as an admin user), *or* just use mock mode to explore the UI without one.

## Run it locally

```bash
cd dashboard
python3 -m venv .venv
source .venv/bin/activate        # Windows: .venv\Scripts\activate
pip install -r requirements.txt

cp .env.example .env
# edit .env and set ARCADE_API_KEY (see Configuration below)

streamlit run app.py
```

Streamlit will open the dashboard automatically, or print a URL to visit — by default `http://localhost:8501`.

To try it immediately with no API key and no network access, set `ARCADE_MOCK_DATA=1` in `.env` (or just flip **Use mock data** on in the sidebar once the app is running) — the dashboard will render fully on fake data.

To stop the app, `Ctrl+C` in the terminal it's running in. Deactivate the virtualenv with `deactivate` when done.

## Configuration

All configuration lives in `dashboard/.env` (git-ignored; `.env.example` is the tracked template) and is loaded via `python-dotenv`. Anything not set in `.env` falls back to the sidebar, where it can be entered/toggled at runtime.

| Variable | Description | Default |
|---|---|---|
| `ARCADE_API_URL` | Base URL of the open-webui instance to query | `https://arcade.rbsprod.net` |
| `ARCADE_API_KEY` | Admin user's Bearer token. Required unless mock data is enabled. If set in `.env`, the sidebar shows it as pre-loaded rather than prompting for it. | *(empty)* |
| `ARCADE_MOCK_DATA` | `1` to run entirely on fake data, no API required | `0` |

There's also a dev/test instance at `test-arcade.rbsdev.net` if you want to point the dashboard somewhere other than production while testing changes.

## Features

- **KPI summary row** — total messages, active users (users with ≥1 message in the selected range), adoption rate (active ÷ total registered users), and average messages per active user.
- **Model Usage** — horizontal bar chart of the top 10 models by message count.
- **Usage by Team** — messages per team/group as a bar chart, plus a model × team heatmap (top models vs. every team) for spotting which teams drive usage of which models.
- **Usage Trends** — daily message volume over time, broken out by model, so adoption/growth (or drop-off) is visible at a glance.
- **Flexible date filtering** — quick presets (last 7/30/90 days, all time) or a custom from/to range, applied across every chart and the KPI row at once.
- **Mock data mode** — a full toggle to explore the entire dashboard on a built-in fake dataset (users, teams, models, 30 days of trend data), no API connection or key required. Useful for demos or UI work without hitting a live instance.
- **Caching with manual refresh** — API responses are cached for 24 hours per query to avoid hammering the analytics endpoints; a **🔄 Refresh data** button in the sidebar clears the cache on demand.
- **Per-team data isolation** — if one team's data fails to load (e.g. a transient API error), the rest of the dashboard still renders, with a warning listing which team(s) were skipped.
- **Friendly error handling** — connection failures, timeouts, and 401/403/404 responses are caught and shown as actionable messages (e.g. "Access denied — the API key must belong to an admin user") instead of a raw stack trace.
- **Runtime-configurable connection** — API URL and key can come from `.env`, environment variables, or be entered/toggled directly in the sidebar, so you can point the same running app at a different instance without restarting.

## Project files

- `app.py` — Streamlit UI: sidebar config/filters, KPI row, charts, error handling for API failures.
- `backend.py` — `ArcadeClient` (thin REST wrapper), `@st.cache_data`-cached fetchers, mock dataset, and the DataFrame builders that shape API responses for charting.
- `requirements.txt` — Python dependencies (streamlit, plotly, pandas, requests, python-dotenv).
- `.env.example` — tracked template for local configuration; copy to `.env` and fill in secrets.

## API requirements

- The target open-webui instance must have admin analytics enabled (`ENABLE_ADMIN_ANALYTICS` server flag). A 404 from `/api/v1/analytics/*` usually means this flag is off, not a routing/network problem.
- The API key must belong to an **admin** user — a non-admin key gets a 403.
- The dashboard needs network access to the instance (VPN/firewall permitting). Connection errors, timeouts, and 401/403/404s are caught in `app.py` and surfaced as readable messages rather than a stack trace.

## Next steps

- **Hosting.** This dashboard currently only runs as a local `streamlit run` process — there's no deployed/always-on instance for the team to share yet. If it needs to be available to more than one person at a time, decide on a hosting approach (e.g. a small systemd-managed service alongside the main app, a container, Streamlit Community Cloud, etc.).
- **Access control.** The only gate right now is possession of an admin API key — fine for local use, but worth revisiting before hosting this anywhere shared, since anyone who can reach the dashboard and supply a key can view org-wide usage data.
- **Shipping backend changes.** If a future dashboard feature needs new/changed analytics endpoints in `backend/open_webui/routers/analytics.py`, note that promoting changes from the dev/test box (`test-arcade.rbsdev.net`) to production (`arcade.rbsprod.net`) is a manual, not fully documented process today: test on the dev box, open a PR against `main` (prod is never edited directly), and loop in **kabenla** (platform owner) for the actual promotion step — there's also an `origin/prod-main` branch whose relationship to `main` hasn't been reconciled, so confirm the right target branch before opening that PR.
- **Tests.** There's no automated test coverage yet for `backend.py`'s DataFrame builders or the `ArcadeClient` — worth adding if this dashboard becomes something other people depend on.
