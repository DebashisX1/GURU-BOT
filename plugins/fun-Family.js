let toM = a => {
    if (!a) return ""; // Defensive programming: return empty string if `a` is undefined
    return '@' + a.split('@')[0];
};

function getRandomPercentage() {
    // Generate a random percentage between 1 and 100
    return Math.floor(Math.random() * 12) + 1;
}

function handler(m, { groupMetadata }) {
    let ps = groupMetadata.participants.map(v => v.id);
    let a = m.sender;
    if (!a) return; // Defensive programming: exit function if `a` is undefined
    
    let b, c, d, e, f; // Declare additional variables
    
    // Select random participants until it's not the same as a
    do {
        b = ps[Math.floor(Math.random() * ps.length)];
    } while (b === a);
    
    // Select additional random participants until they are not the same as a or each other
    do {
        c = ps[Math.floor(Math.random() * ps.length)];
    } while (c === a || c === b);
    
    do {
        d = ps[Math.floor(Math.random() * ps.length)];
    } while (d === a || d === b || d === c);
    
    // Assign values to e and f
    e = ps[Math.floor(Math.random() * ps.length)];
    f = ps[Math.floor(Math.random() * ps.length)];
    
    const percentage = getRandomPercentage();

    m.reply(`গোপন সূত্র থেকে পাওয়া ${toM(a)} চৌদ্দগুষ্টির বিবরণ:\n
বাবা: lord Samridhya 👨\n
মা/2nd বাবা:‌- ${toM(b)}🫃\n
ভাই/বোন:- ${toM(c)}💆\n
বর/বউ:- ${toM(a)}👫\n
Bf/Gf:- ${toM(a)} 👩‍❤‍💋‍👨\n
Ex:- ${toM(d)} 🤡\n
বাড়িওয়ালা- ${toM(e)} 🏟\n
শশুর/শাশুরি:- ${toM(f)} 🧚\n
Total Childs: ${percentage}\n
${toM(a)} এই হল তোমার আসল পরিচয় কাল সবাইকে নিয়ে নবান্ন দেখা কর।🤸‍♂`, null, {
        mentions: [a, b, c, d, e, f] // Include all variables in mentions
    });
}

handler.help = ['family @user'];
handler.tags = ['fun'];
handler.command = ['family'];
handler.group = true;

export default handler;
