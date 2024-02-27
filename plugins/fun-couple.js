let toM = a => '@' + a.split('@')[0];

function getRandomPercentage() {
    // Generate a random percentage between 1 and 100
    return Math.floor(Math.random() * 100) + 1;
}

function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id);
    let a = m.sender;
    let b;
    do {
        b = ps[Math.floor(Math.random() * ps.length)]; // Select a random participant
    } while (b === a);

    let c;
    do {
        c = ps[Math.floor(Math.random() * ps.length)]; // Select another random participant
    } while (c === a || c === b); // Ensure it's different from both a and b

    const percentage = getRandomPercentage();

    m.reply(`✯────────────────────✯\n${toM(b)}   ❤️   ${toM(c)}\nCongratulations, your ${percentage}% 💖🍻\n> Line by ${toM(a)} 😁`, null, {
        mentions: [a, b, c]
    });
}

handler.help = ['couple'];
handler.tags = ['fun'];
handler.command = ['couple'];
handler.group = true;

export default handler;
