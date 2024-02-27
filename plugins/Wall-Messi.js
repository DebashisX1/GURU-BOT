let handler = async(m, { conn, usedPrefix, command }) => {
function showGanashPhoto() {
    var imgSrc = https://shizoapi.onrender.com/api/devotional/ganpati?apikey=shizo";
    var imgAlt = "GanpatiBappa";
    var img = document.createElement("img");
    img.src = imgSrc;
    img.alt = imgAlt;
    document.body.appendChild(img);
}

// Usage: Type ".messi" to display the Messi photo

handler.help = ['ganash']
handler.tags = ['img']
handler.command = /^(ganash)$/i
export default handler
