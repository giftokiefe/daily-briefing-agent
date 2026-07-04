const CONFIG = {
  NOTION_TOKEN: "your-notion-token-here",
  NOTES_PAGE_ID: "your-notes-page-id-here",
  SAVED_LINKS_PAGE_ID: "your-saved-links-page-id-here",
  CLAUDE_API_KEY: "your-claude-key-here",
  WHATSAPP_NUMBER: "your-whatsapp-number-here",
  TWILIO_ACCOUNT_SID: "your-twilio-sid-here",
  TWILIO_AUTH_TOKEN: "your-twilio-auth-token-here",
  TWILIO_WHATSAPP_NUMBER: "whatsapp:+14155238886",
};

function getNotionPageContent(pageId) {
  const url = `https://api.notion.com/v1/blocks/${pageId}/children`;

  const options = {
    method: "get",
    headers: {
      "Authorization": `Bearer ${CONFIG.NOTION_TOKEN}`,
      "Notion-Version": "2022-06-28"
    },
    muteHttpExceptions: true
  };

  try {
    const response = UrlFetchApp.fetch(url, options);
    const data = JSON.parse(response.getContentText());

    if (!data.results) return "No content found";

    const text = data.results.map(block => {
      const type = block.type;
      const content = block[type];
      if (content && content.rich_text) {
        return content.rich_text.map(t => t.plain_text).join("");
      }
      return "";
    }).filter(t => t.length > 0).join("\n");

    return text || "Page is empty";

  } catch (e) {
    Logger.log(`Error fetching Notion page: ${e}`);
    return "Error fetching content";
  }
}

function getCalendarEvents() {
  const today = new Date();
  const tomorrow = new Date();
  tomorrow.setDate(today.getDate() + 2);

  const calendars = CalendarApp.getAllCalendars();
  let
