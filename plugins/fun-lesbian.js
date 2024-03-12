let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = conn.getName(who)
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Guru.jpg')
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/misc/bisexual', {
    avatar: pp, 
  }), 'samrat.jpg', `${name} ay chilo tor mona/n rakachilish gopona`, m)
}

handler.help = ['lesbainpp @user']
handler.tags = ['fun']
handler.command = ['lesbainpp'] 

export default handler
