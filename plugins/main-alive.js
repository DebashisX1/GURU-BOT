let handler = async (m, { conn, text, usedPrefix, command }) => {
    // Sound
    let name = m.pushName || conn.getName(m.sender);
    var vn = "https://github.com/Samridhya01/GURU-BOT/raw/main/Assets/mp3/Alive.mp3";
    let img = "https://mcdn.wallpapersafari.com/medium/43/30/7WwRS3.jpg";
    let con = {
        key: {
            fromMe: false,
            participant: `${m.sender.split`@`[0]}@s.whatsapp.net`,
            ...(m.chat ? { remoteJid: '16504228206@s.whatsapp.net' } : {})
        },
        message: {
            contactMessage: {
                displayName: `${name}`,
                vcard: `BEGIN:VCARD\nVERSION:3.0\nN:;a,;;;\nFN:${name}\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
            }
        }
    };
    let doc = {
        audio: {
            url: vn
        },
        mimetype: 'audio/mpeg',
        ptt: true,
        waveform: [100, 0, 100, 0, 100, 0, 100],
        fileName: "Guru",
        contextInfo: {
            mentionedJid: [m.sender],
            externalAdReply: {
                title: "I AM ALIVE",
                body: "SAMRAT BOT",
                thumbnailUrl: img,
                sourceUrl: 'https://chat.whatsapp.com/C4NU6KefgoLL9W8vpbhbEY',
                mediaType: 1,
                renderLargerThumbnail: true
            }
        }
    };

    await conn.sendMessage(m.chat, doc, { quoted: con });
    m.react('🤠'); // Add a random emoji
}

handler.help = ['alive'];
handler.tags = ['main'];
handler.command = /^(alive)$/i;

export default handler;
