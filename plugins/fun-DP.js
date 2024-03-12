let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = conn.getName(who)
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Guru.jpg')
  m.react(🙈)
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/misc/jpg', {
    avatar: pp, 
  }), 'samrat.jpg', `DP of ${name}/n/n I know you see the photo everyday at 3:00 AM 😇`, m)
}

handler.help = ['dp @user']
handler.tags = ['fun']
handler.command = ['dp'] 

export default handler
