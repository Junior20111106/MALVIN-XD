const fs = require('fs');
const path = require('path');
const { getConfig } = require('./lib/configdb');

if (fs.existsSync(path.resolve('config.env'))) {
  require('dotenv').config({ path: path.resolve('config.env') });
}

// Helper to convert "true"/"false" strings to actual boolean
function convertToBool(text, trueValue = 'true') {
  return text === trueValue;
}

module.exports = {
  // ===== BOT CORE SETTINGS =====
  SESSION_ID: process.env.SESSION_ID || "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT0pDc2hZdU1sWThzS3QzZjVSNWdTemNodnAybzZDMmlQZEhoeW45NHQycz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiaWhzZlVXZEl3WlZnQWNTaWtPSmQveUxpRXVJeDg3ZVlqQWtiZUxVaHpoZz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPR2Vjb1dKMXVPTlFVUXF1QXhWTVBZTHhLSFovTnV0MlR6YXVRU0dVQzJzPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJBOGhiK0h4SzdKRnM4eXZJN3ljc0l2bkF1bERlYWdnckJweGxDZFV6WlIwPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktGZTN4K1lnM2l0U01TMG9jK3A1M09vRVRIN2JMY1hocTRWQ0F1WjlQbWM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImMzK3MwUkkycXJoZU5DOU9qVG5wQnN1NGJ3Z3FoU3EzUXhJMmhabHF1RkU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0VSUWhuMmVTaXd4Ny9IL1pWbFkrRThSNVpxdXpwaEJ5b1dDTzdVa1NIRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoib0hZaHY2VE0yUHIwdW5nS3BMbmRzWkhZT1lkUnI4OWtsQ0Z6MWFSeHhtST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlpKOFRoKzFGWk8rYmk3MmhuQTlFMzJ5dS81a0hZMlIyMXdOekp6S2Z0bHdiYi9oOTd5blppOFdRY3VyZFI0MkJ4SmN4OEt4dCswaVpHQURQUEx6YWhnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NjAsImFkdlNlY3JldEtleSI6IjBibXNIYnFkN3pteXEyaWZVVWF0K2RnS1V1N1R0aHVTdTE3emQxVFNvZUk9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2Mzc1NzczNjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVDMDAzMzA0MzI0RjZENzY4NTc1MDk4QzZEOUJFODMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NDkxNDE0Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2Mzc1NzczNjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTU5MjlCNjk3NDNDOTZDRENCRjE5NzVCQTcxRkEzNUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NDkxNDE0Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2Mzc1NzczNjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTVCNzBBQkNDNEUwOUJEMjBDNzdEREYzMEMxNTI4NEEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NDkxNDE0N30seyJrZXkiOnsicmVtb3RlSmlkIjoiMjc2Mzc1NzczNjhAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQTUyRENFRDMzOERBMUY0N0FBM0Y5MkJDQUQzQzhDMUMifSwibWVzc2FnZVRpbWVzdGFtcCI6MTc2NDkxNDE0N31dLCJuZXh0UHJlS2V5SWQiOjgxMywiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjgxMywiYWNjb3VudFN5bmNDb3VudGVyIjoyLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwicmVnaXN0ZXJlZCI6dHJ1ZSwicGFpcmluZ0NvZGUiOiJZVVBSQURFViIsIm1lIjp7ImlkIjoiMjc2Mzc1NzczNjg6MTFAcy53aGF0c2FwcC5uZXQiLCJuYW1lIjoiQWxpc2EiLCJsaWQiOiIyNTkyOTIxMDgyMTg1NzM6MTFAbGlkIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOZjgxUEVDRU5Ibnlja0dHQUlnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJsa1FWUE81WDZ3N0NLdFozVU0vSElac2p0UHIxRWVka2VlZlU5QmZKYmx3PSIsImFjY291bnRTaWduYXR1cmUiOiJlZXc2b2RqZTZIdnpTNUxobElpcC9SM2hDTVd2TzNrRzJmVFJidW02YStCMjJNK0NZNVZHeEtwZDNPcnBpYkdQbUptaFBkTUNiTXZKOWxVTHBZWTRBUT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiQ2hXSmVBSVIwZmtpRGRwbHN4YXRxcEpYNzdka3dVeklDZ1N0eXVESjVlUlhUZGxEKys1ai9Wd0U5bzIzM1JlQ1V2aVFZQXE5L1FBUkUybDJWN3VnZ1E9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyNzYzNzU3NzM2ODoxMUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJaWkVGVHp1VitzT3dpcldkMURQeHlHYkk3VDY5UkhuWkhubjFQUVh5VzVjIn19XSwicGxhdGZvcm0iOiJzbWJhIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQTBJRWdnRiJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NjQ5MTQxNDMsImxhc3RQcm9wSGFzaCI6IlBXazVCIiwibXlBcHBTdGF0ZUtleUlkIjoiQUFBQUFPMlQifQ==", // Your bot's session ID (keep secure)
  PREFIX: getConfig("PREFIX") || ".", // Command prefix (e.g., ., /, !, *)
  CHATBOT: getConfig("CHATBOT") || "on", // Chatbot mode: on/off
  BOT_NAME: process.env.BOT_NAME || getConfig("BOT_NAME") || "MALVIN-XD", // Bot display name
  MODE: getConfig("MODE") || process.env.MODE || "public", // Bot mode: public/private/group/inbox
  REPO: process.env.REPO || "https://github.com/XdKing2/MALVIN-XD", // Bot GitHub repo dont change this❗️
  BAILEYS: process.env.BAILEYS || "@whiskeysockets/baileys", // Baileys version

  // ===== OWNER & DEVELOPER SETTINGS =====
  OWNER_NUMBER: process.env.OWNER_NUMBER || "27799648540", // Owner WhatsApp number
  OWNER_NAME: process.env.OWNER_NAME || getConfig("OWNER_NAME") || "Mudau Thendo", // Owner name
  DEV: process.env.DEV || "27799648540", // Developer contact number
  DEVELOPER_NUMBER: '27799648540@s.whatsapp.net', // Developer WhatsApp ID

  // ===== AUTO-RESPONSE SETTINGS =====
  AUTO_REPLY: process.env.AUTO_REPLY || "true", // Enable auto-reply
  AUTO_STATUS_REPLY: process.env.AUTO_STATUS_REPLY || "false", // Reply to status updates?
  AUTO_STATUS_MSG: process.env.AUTO_STATUS_MSG || "*Just seen ur status.. And it looks royal*", // Status reply message
  READ_MESSAGE: process.env.READ_MESSAGE || "false", // Mark messages as read automatically?
  REJECT_MSG: process.env.REJECT_MSG || "*📵 Calls are not allowed on this number unless you have permission. 🚫*", // Message on rejected call
  ALIVE_IMG: process.env.ALIVE_IMG || "https://files.catbox.moe/xshsmk",
// add img for alive msg

  LIVE_MSG: process.env.LIVE_MSG || "> ʙᴏᴛ ɪs sᴘᴀʀᴋɪɴɢ ᴀᴄᴛɪᴠᴇ ᴀɴᴅ ᴀʟɪᴠᴇ\n\n\nᴋᴇᴇᴘ ᴜsɪɴɢ ✦ᴍᴀʟᴠɪɴ xᴅ✦ ғʀᴏᴍ ᴍᴀʟᴠɪɴ ᴛᴇᴄʜ ɪɴᴄ⚡\n\n\n*© ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ - ᴍᴅ\n\n> ɢɪᴛʜᴜʙ :* github.com/XdKing2/MALVIN-XD",
// add alive msg here 

  // ===== REACTION & STICKER SETTINGS =====
  AUTO_REACT: process.env.AUTO_REACT || "false", // Auto-react to messages
  OWNER_REACT: process.env.OWNER_REACT || "false", // Owner-specific reacts
  CUSTOM_REACT: process.env.CUSTOM_REACT || "false", // Use custom emoji reactions
  CUSTOM_REACT_EMOJIS: getConfig("CUSTOM_REACT_EMOJIS") || process.env.CUSTOM_REACT_EMOJIS || "🫅,🤴,💛", // Custom react emojis
  STICKER_NAME: process.env.STICKER_NAME || "ALPHA PACK", // Sticker pack name
  AUTO_STICKER: process.env.AUTO_STICKER || "true", // Auto-send stickers

  // ===== MEDIA & AUTOMATION =====
  AUTO_RECORDING: process.env.AUTO_RECORDING || "false", // Auto-record voice notes
  AUTO_TYPING: process.env.AUTO_TYPING || "false", // Show typing indicator
  MENTION_REPLY: process.env.MENTION_REPLY || "true", // Reply when mentioned
  MENU_IMAGE_URL: getConfig("MENU_IMAGE_URL") || "https://files.catbox.moe/qumhu4.jpg", // Menu image URL

  // ===== SECURITY & ANTI-FEATURES =====
  ANTI_DELETE: process.env.ANTI_DELETE || "false", // Recover deleted messages
  ANTI_CALL: process.env.ANTI_CALL || "true", // Automatically reject calls
  ANTI_BAD_WORD: process.env.ANTI_BAD_WORD || "true", // Block bad words
  ANTI_LINK: process.env.ANTI_LINK || "true", // Block links in groups
  ANTI_VV: process.env.ANTI_VV || "true", // Block view-once messages
  DELETE_LINKS: process.env.DELETE_LINKS || "false", // Auto-delete links
  ANTI_DEL_PATH: process.env.ANTI_DEL_PATH || "inbox", // Where to log deleted messages ('inbox' or 'same')
  ANTI_BOT: process.env.ANTI_BOT || "true", // Block other bots?
  PM_BLOCKER: process.env.PM_BLOCKER || "true", // Block private messages?

  // ===== BOT BEHAVIOR & APPEARANCE =====
  DESCRIPTION: process.env.DESCRIPTION || "*fonked and changed to royal*", // Bot description/footer
  PUBLIC_MODE: process.env.PUBLIC_MODE || "true", // Allow public commands?
  ALWAYS_ONLINE: process.env.ALWAYS_ONLINE || "true", // Show bot always online
  AUTO_STATUS_REACT: process.env.AUTO_STATUS_REACT || "true", // React to status updates
  AUTO_STATUS_SEEN: process.env.AUTO_STATUS_SEEN || "true", // Mark status as seen
  AUTO_BIO: process.env.AUTO_BIO || "true", // Automatically update bio
  WELCOME: process.env.WELCOME || "true", // Enable welcome messages
  GOODBYE: process.env.GOODBYE || "true", // Enable goodbye messages
  ADMIN_ACTION: process.env.ADMIN_ACTION || "false", // Show admin activity notifications
  
version: process.env.version || "1.0.0",
};
