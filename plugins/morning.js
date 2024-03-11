const handler = async (m, { conn }) => {
    let av = './Assets/mp3/bot.mp3';
    await m.react('🌅');

    await conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true });
}

handler.customPrefix = /^(gm)$/i;
handler.command = new RegExp;

module.exports = handler;
