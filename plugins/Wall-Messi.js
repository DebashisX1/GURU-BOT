import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://shizoapi.onrender.com/api/devotional/ganpati?apikey=shizo`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `*Messi*`, m)} 
//conn.sendButton(m.chat, "*Messi*", author, url, [['⚽ NEXT ⚽', `${usedPrefix + command}`]], m)}
handler.help = ['ganash']
handler.tags = ['img']
handler.command = /^(ganash)$/i
export default handler
