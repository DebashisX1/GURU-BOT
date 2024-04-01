let handler = async (m, { conn, text }) => {
    if (!text) throw 'No Text'
   let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
  let name = conn.getName(who)
    conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/misc/tweet', {
    avatar: await conn.profilePictureUrl(m.sender, 'image').catch(_ => 'https://telegra.ph/file/24fa902ead26340f3df2c.png'),
    comment: text,
    username: conn.getName(m.sender)
    displayname: ${name}  
    }), 'error.png', '*THANKS FOR TWEET*', m)
    }
    handler.help = ['tweet <comment>']
    handler.tags = ['maker'] 
    handler.command = /^(tweet)$/i
    export default handler
