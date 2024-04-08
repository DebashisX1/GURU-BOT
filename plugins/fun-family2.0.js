function getRandomPercentage() {
    return Math.floor(Math.random() * 101); // Generates a random number between 0 and 100
}

async function toM(id, conn) {
    return await conn.getName(id);
}

async function handler(m, { conn, groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id);
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe() ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let a = m.sender;
    if (!a) return; 

    let b, c, d, e, f; 

    do {
        b = ps[Math.floor(Math.random() * ps.length)];
    } while (b === a);

    do {
        c = ps[Math.floor(Math.random() * ps.length)];
    } while (c === a || c === b);

    do {
        d = ps[Math.floor(Math.random() * ps.length)];
    } while (d === a || d === b || d === c);

    // Assign values to e and f
    e = ps[Math.floor(Math.random() * ps.length)];
    f = ps[Math.floor(Math.random() * ps.length)];

    const percentage = getRandomPercentage();

    const mentions = [a, b, c, d, e, f].map(id => ({ jid: id, hide: `false` }));

    conn.sendMessage(m.chat, `গোপন সূত্র থেকে পাওয়া ${name} চৌদ্দগুষ্টির বিবরণ:
    বাবা: lord Samridhya 👨
    মা/2nd বাবা:‌- ${await toM(b, conn)}🫃
    ভাই/বোন:- ${await toM(c, conn)}💆
    বর/বউ:- ${await toM(a, conn)}👫
    Bf/Gf:- ${await toM(a, conn)} 👩‍❤‍💋‍👨
    Ex:- ${await toM(d, conn)} 🤡
    বাড়িওয়ালা- ${await toM(e, conn)} 🏟
    শশুর/শাশুরি:- ${await toM(f, conn)} 🧚
    Total Childs: ${percentage}
    ${name} এই হল তোমার আসল পরিচয় কাল সবাইকে নিয়ে নবান্ন দেখা কর।🤸‍♂`, MessageType.text, { mentions });

    const simpcard = await conn.getFileBuffer(global.API('https://some-random-api.com', '/canvas/misc/simpcard', {
        avatar: await conn.getProfilePicture(who).catch(_ => 'https://imgur.com/Uzmskkn.jpg'),
    }));

    conn.sendMessage(m.chat, simpcard, MessageType.image, { quoted: m });
}

handler.help = ['family2 @user'];
handler.tags = ['fun'];
handler.command = ['family2'];
handler.group = true;

export default handler;
