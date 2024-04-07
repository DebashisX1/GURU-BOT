let handler = async (m, { conn }) => {
  let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = conn.getName(who)
  let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './Guru.jpg')
  conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/overlay/jail', {
    avatar: pp, 
  }), 'gay.png', ` ${name} partho ar pit Chulkaba`, m)
}

handler.help = ['jail @user']
handler.tags = ['fun']
handler.command = ['jail'] 

export default handler
