function getRandomPercentage() {
    // Generate a random percentage between 1 and 100
    return Math.floor(Math.random() * 100) + 1;
}

m.reply(`${getRandomPercentage()}% 💖`);

handler.help = ['smartcheck'];
handler.tags = ['fun'];
handler.command = ['smartcheck'];
handler.group = true;

export default handler;

