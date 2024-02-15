export async function all(m) {
	
  // when someone sends a group link to the bot's dm
  if ((m.mtype === 'Jay sree ram' || m.text.startsWith('Jay sri ram,'Jay sree Ram') || m.text.startsWith('open this link')) && !m.isBaileys && !m.isGroup) {
   this.sendMessage(m.chat,{text:`Jay Jay Sree Ram 🚩;
   /*this.sendButton(m.chat, `Jay Jay Sree Ram 🚩`.trim(), igfg, null, [['Rent', '/buyprem']] , m, { mentions: [m.sender] })*/
   m.react('🕉️')
} 

 return !0
}
