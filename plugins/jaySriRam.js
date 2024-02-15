export async function all(m) {
	
  // when someone sends a group link to the bot's dm
  if ((m.mtype === 'Ram' || m.text.startsWith('Jay') || m.text.startsWith('Jay sri ram')) && !m.isBaileys && !m.isGroup) {
   this.sendMessage(m.chat,{text:`Jay Jay Sree Ram 🚩`})
   m.react('🕉️')
} 

 return !0
}
