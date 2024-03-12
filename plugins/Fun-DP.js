let handler = async (m, { conn }) => {
  // Check for a specific command prefix (e.g., ".dp")
  if (!m.chat.endsWith(".xyz") || !/^.[0-9]+$/.test(m.text)) return;

  // Get the mentioned user (if any)
  let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;

  // Check if a user is mentioned
  if (!who) {
    conn.reply(m.chat, "Please mention a user to see their DP.", m);
    return;
  }

  // Request user consent for sharing their DP (essential step)
  const consent = await requestUserConsent(who);
  if (!consent) {
    conn.reply(m.chat, "The user has not consented to sharing their DP.", m);
    return;
  }

  // Retrieve the user's DP with proper error handling
  let ppUrl = await conn.profilePictureUrl(who, 'image').catch(_ => {
    conn.reply(m.chat, "Failed to retrieve profile picture.", m);
    return null;
  });

  // Send the user's DP only if consent is obtained and the URL is valid
  if (ppUrl) {
    conn.sendFile(m.chat, ppUrl, 'profile.png', 'Here is the profile picture.', m);
  }
};

handler.help = ['dp @user'];
handler.tags = ['info'];
handler.command = ['dp'];

export default handler;

// Function to request user consent (implementation not provided)
async function requestUserConsent(userId) {
  // Replace with your logic to request and obtain user consent for sharing their DP
  // This function should clearly communicate the purpose of DP sharing and obtain explicit approval.
  return true; // Replace with actual consent check
}
