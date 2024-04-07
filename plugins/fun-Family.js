let toM = a => {
    if (!a) return ""; // Defensive programming: return empty string if `a` is undefined
    return '@' + a.split('@')[0];
};

async function handler(m, { conn, groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id);
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe() ? conn.user.jid : m.sender;
    let name = await conn.getName(who);
    let a = m.sender;
    if (!a) return; // Defensive programming: exit function if `a` is undefined

    let b, c, d, e, f, g; // Declare additional variables

    // Select random participants until it's not the same as a
    do {
        b = ps[Math.floor(Math.random() * ps.length)];
    } while (b === a);

    // Select additional random participants until they are not the same as a or each other
    do {
        c = ps[Math.floor(Math.random() * ps.length)];
    } while (c === a || c === b);

    do {
        d = ps[Math.floor(Math.random() * ps.length)];
    } while (d === a || d === b || d === c);

    // Assign values to e, f, and g
    e = ps[Math.floor(Math.random() * ps.length)];
    f = ps[Math.floor(Math.random() * ps.length)];
    g = ps[Math.floor(Math.random() * ps.length)];

    const percentage = getRandomPercentage();
    let text = `গোপন সূত্র থেকে পাওয়া ${name} চৌদ্দগুষ্টির বিবরণ:
    বাবা: lord Samridhya 👨
    মা/2nd বাবা:‌- ${toM(b)}🫃
    ভাই/বোন:- ${toM(c)}💆
    বর/বউ:- ${toM(a)}👫
    Bf/Gf:- ${toM(a)} 👩‍❤‍💋‍👨
    Ex:- ${toM(d)} 🤡
    বাড়িওয়ালা- ${toM(e)} 🏟
    শশুর/শাশুরি:- ${toM(f)} 🧚
    ক্রাশ:- ${toM(g)} 
    Total বাচ্চা: ${percentage}
    ${name} এই হল তোমার আসল পরিচয় কাল সবাইকে নিয়ে নবান্ন দেখা কর।🤸‍♂`;

    conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/misc/simpcard', {
        avatar: await conn.profilePictureUrl(who, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    }), 'error.png', text, null, { mentions: [a, b, c, d, e, f] }, m);
}

function getRandomPercentage() {
    // Generate a random percentage between 1 and 100
    return Math.floor(Math.random() * 12) + 1;
}

handler.help = ['family @user'];
handler.tags = ['fun'];
handler.command = ['family'];
handler.group = true;

export default handler;
