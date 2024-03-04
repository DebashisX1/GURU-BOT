async function morningHandler(m, { conn }) {
  // Assuming global.db is a defined object with data access methods
  const userData = global.db.getUserData(m.sender);
  const name = conn.getName(m.sender);
  const taguser = '@' + m.sender.split("@s.whatsapp.net")[0];

  // Update path based on your actual file structure
  const audioPath = path.join(__dirname, 'Assets', 'mp3', 'alive.mp3');

  // Send a random greeting message
  const message = pickRandom([
    "Good morning! ☀️ I hope you have a wonderful day ahead filled with positivity and productivity. Have a nice day!",
    "Good morning! May your coffee be strong and your spirits even stronger ",
    "Wishing you a day filled with positivity, laughter, and endless possibilities! ",
    "Hello, sunshine! May your day be sprinkled with joy and warmth ☀️",
    "Rise and shine! May your day be as radiant as the morning sun. ",
  ]);

  await m.react('');
  await m.reply(message);

  // Send the audio file (assuming path is correct)
  await conn.sendFile(m.chat, audioPath, 'audio.mp3', null, m, true, {
    type: 'audioMessage',
    ptt: true,
  });
}

morningHandler.customPrefix = /^(morning)$/i;

export default morningHandler;

// Function to pick a random element from an array
function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)];
}
