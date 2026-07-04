# Daily Briefing Agent 🤖

An AI-powered personal briefing agent built with Google Apps Script and Claude AI.
Every morning it pulls from your Google Calendar, Notion notes, and saved links —
and delivers a sharp, focused WhatsApp message telling you what matters today.

## What It Does

- Reads your **Google Calendar** for today and tomorrow's events
- Reads your **Notion notes** for decisions, follow-ups, and pending items
- Reads your **Saved Links** from Notion
- Claude synthesizes everything into a structured morning briefing
- Delivers it to your **WhatsApp** every day at 7am

## Briefing Structure

Every morning you receive:

- ☀️ Date header
- 📅 Today's schedule
- 🎯 Decisions waiting for you
- 📞 Follow-ups you owe people
- 🔗 Summary of your saved links
- ⚡ Single top priority for the day

## Requirements

- A Google account (for Calendar and Apps Script)
- A Notion account with a personal access token
- An Anthropic API key (get one at console.anthropic.com — minimum $5 deposit)
- A Twilio account with WhatsApp sandbox enabled (free tier)

## Notion Setup

1. Go to notion.so and create a page called `Daily Briefing`
2. Inside it create two sub-pages: `Notes` and `Saved Links`
3. Go to notion.so/profile/integrations → Personal access tokens → New token
4. Copy the token
5. Get the page IDs from the URL of each sub-page (the string after the last `-`)

## Twilio Setup

1. Sign up at twilio.com
2. Go to Messaging → Try it out → Send a WhatsApp message
3. Follow the sandbox activation steps
4. Copy your Account SID and Auth Token from the dashboard
5. The sandbox WhatsApp number is `+14155238886`

## Setup Instructions

**Step 1 — Open Google Apps Script**
- Go to script.google.com
- Click New project
- Rename it `Daily Briefing Agent`

**Step 2 — Paste the script**
- Delete everything in the editor
- Copy the full contents of `Code.gs` from this repo and paste it in
- Ctrl + S to save

**Step 3 — Fill in your credentials**
Find the CONFIG block at the top and fill in all 8 values:

**Step 4 — Test the briefing**
- Click inside `testBriefingOnly` and hit Run
- Check the execution log — you should see a full briefing preview

**Step 5 — Test WhatsApp delivery**
- Click inside `sendDailyBriefing` and hit Run
- Check your WhatsApp — the briefing should arrive within seconds

**Step 6 — Activate the daily trigger**
- Click inside `setupTrigger` and hit Run
- The agent will now run automatically every day at 7am

## Functions Reference

| Function | What it does |
|---|---|
| `testBriefingOnly` | Generates briefing preview in the log without sending |
| `sendDailyBriefing` | Generates and sends briefing to WhatsApp |
| `setupTrigger` | Activates daily 7am trigger (run once) |
| `getCalendarEvents` | Fetches today and tomorrow's calendar events |
| `getNotionPageContent` | Reads content from a Notion page |
| `generateBriefingWithClaude` | Sends all sources to Claude for synthesis |
| `sendWhatsApp` | Delivers message via Twilio WhatsApp |

## How to Use Daily

Just update your Notion pages:
- Add notes, tasks, and decisions to your `Notes` page
- Paste links you want to revisit into your `Saved Links` page
- Add events to Google Calendar as normal

The agent handles the rest every morning at 7am.

## Cost

Claude Haiku is extremely cheap — each briefing costs roughly $0.001–0.003.
Monthly cost for daily briefings: **under $0.10**.
Twilio sandbox is free for personal use.

## License

MIT — free to use, modify, and share.
