let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id)
    let percentage = Math.floor(Math.random() * 100)
    let a = m.sender
    let b
    do b = ps.getRandom()
    while (b === a)
    m.reply(`${toM(a)} ❤️ ${toM(b)}\nCongratulations,\nyours $(percentage)% 💖🍻`, null, {
        mentions: [a, b]
    })
}
handler.help = ['ship']
handler.tags = ['fun']
handler.command = ['ship']

handler.group = true

export default handler  
