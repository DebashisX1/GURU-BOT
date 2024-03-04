let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let av = `./Assets/mp3/BOT.mp3`;
    m.react(🌅);


    m.reply(pickRandom(["Good morning! ☀️ I hope you have a wonderful day ahead filled with positivity and productivity. Have a nice day!","Good morning! May your coffee be strong and your spirits even stronger ","Wishing you a day filled with positivity, laughter, and endless possibilities! ","Hello, sunshine! May your day be sprinkled with joy and warmth ☀️","Rise and shine! May your day be as radiant as the morning sun. "]));
    conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true });
}

handler.customPrefix = /^(BOT)$/i;
handler.command = new RegExp;

export default handler;

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}
