let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  m.react('🤖') 
  await typewriterEffect(hi its samridhya);
}

handler.help = ['hack']
handler.tags = ['fun']
handler.command = /^(hack)$/i

async function typewriterEffect(conn, quoted ,from, text) {
    let { key } = await conn.sendMessage(from, { text: 'Thinking...' } , {quoted:quoted})
  
    for (let i = 0; i < text.length; i++) {
      const noobText = text.slice(0, i + 1);
      await conn.relayMessage(from, {
        protocolMessage: {
          key: key,
          type: 14,
          editedMessage: {
            conversation: noobText
          }
        }
      }, {});
   
       await delay(100); // Adjust the delay time (in milliseconds) as needed
    }
