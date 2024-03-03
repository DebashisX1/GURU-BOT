let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender];
    let name = conn.getName(m.sender);
    let taguser = '@' + m.sender.split("@s.whatsapp.net")[0];
    let av = `./Assets/mp3/alive.mp3`;
    m.react(🌅);


    m.reply(pickRandom(["𝒢𝑜𝑜𝒹 𝓂𝑜𝓇𝓃𝒾𝓃𝑔! 𝐼 𝒽𝑜𝓅𝑒 𝓎𝑜𝓊 𝒽𝒶𝓋𝑒 𝒶 𝓌𝑜𝓃𝒹𝑒𝓇𝒻𝓊𝓁 𝒹𝒶𝓎 𝒶𝒽𝑒𝒶𝒹 𝒻𝒾𝓁𝓁𝑒𝒹 𝓌𝒾𝓉𝒽 𝓅𝑜𝓈𝒾𝓉𝒾𝓋𝒾𝓉𝓎 𝒶𝓃𝒹 𝓅𝓇𝑜𝒹𝓊𝒸𝓉𝒾𝓋𝒾𝓉𝓎. 𝒽𝒶𝓋𝑒 𝒶 𝓃𝒾𝒸𝑒 𝒹𝒶𝓎 🌅","𝒢𝑜𝑜𝒹 𝓂𝑜𝓇𝓃𝒾𝓃𝑔! 𝑀𝒶𝓎 𝓎𝑜𝓊𝓇 𝒸𝑜𝒻𝒻𝑒𝑒 𝒷𝑒 𝓈𝓉𝓇𝑜𝓃𝑔 𝒶𝓃𝒹 𝓎𝑜𝓊𝓇 𝓈𝓅𝒾𝓇𝒾𝓉𝓈 𝑒𝓋𝑒𝓃 𝓈𝓉𝓇𝑜𝓃𝑔𝑒𝓇","Ｗｉｓｈｉｎｇ ｙｏｕ ａ ｄａｙ ｆｉｌｌｅｄ ｗｉｔｈ ｐｏｓｉｔｉｖｉｔｙ， ｌａｕｇｈｔｅｒ， ａｎｄ ｅｎｄｌｅｓｓ ｐｏｓｓｉｂｉｌｉｔｉｅｓ🌅","ℍ𝕖𝕝𝕝𝕠, 𝕤𝕦𝕟𝕤𝕙𝕚𝕟𝕖! 𝕄𝕒𝕪 𝕪𝕠𝕦𝕣 𝕕𝕒𝕪 𝕓𝕖 𝕤𝕡𝕣𝕚𝕟𝕜𝕝𝕖𝕕 𝕨𝕚𝕥𝕙 𝕛𝕠𝕪 𝕒𝕟𝕕 𝕨𝕒𝕣𝕞𝕥𝕙 🌅","Rise and shine! May your day be as radiant as the morning sun.🌅"]));
    conn.sendFile(m.chat, av, 'audio.mp3', null, m, true, { type: 'audioMessage', ptt: true });
}

handler.customPrefix = /^(Goodmorning|morning|gm|suvosokal)$/i;
handler.command = new RegExp;

export default handler;

function pickRandom(list) {
    return list[Math.floor(list.length * Math.random())];
}
