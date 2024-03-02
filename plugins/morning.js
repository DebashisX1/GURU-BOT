let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let av = `./Assets/mp3/Botmp3`;
    m.react(🌅);


    conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true });
}

handler.customPrefix = /^(Good Morning)$/i;
handler.command = new RegExp;

export default handler;

