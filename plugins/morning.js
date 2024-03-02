let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let av = `./Assets/mp3/bot.mp3`;
     m.react(🌅);
    
    conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true });
}

handler.customPrefix = /^(morning)$/i;
handler.command = new RegExp;

export default handler;
