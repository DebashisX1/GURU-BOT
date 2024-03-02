let handler = async (m, { conn }) => {
    let av = `./Assets/mp3/Babu.mp3`;
    m.react('🤠');

    // Send the audio message without the introductory message
    conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true });
}

handler.customPrefix = /^(bot)$/i;
handler.command = new RegExp;

export default handler;
