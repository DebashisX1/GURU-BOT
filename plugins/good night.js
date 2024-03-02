let handler = async (m, { conn }) => {
    let av = `./Assets/mp3/Bot1.mp3`;
    m.react(🌃);


    conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true });
}

handler.customPrefix = /^(Night)$/i;
handler.command = new RegExp;

export default handler;

