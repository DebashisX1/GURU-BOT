let toM = a => '@' + a.split('@')[0];
function handler(m, { groupMetadata, text }) {
 let ps = groupMetadata.participants.map(v => v.id);
    let a = m.sender;
    let b;
    do {
        b = ps[Math.floor(Math.random() * ps.length)]; // Select a random participant
    } while (b === a);
m.reply(`🗣 The Most *${text}* Public Is ${toM(b)}`, null, {
        mentions: [a, b]
});
}

handler.help = ['pick'];
handler.tags = ['fun'];
handler.command = ['pick'];
handler.group = true;

export default handler;
