import fetch from 'node-fetch';
import { delay } from '@whiskeysockets/baileys'; // Assuming this library is installed

let handler = async (m, { conn, text, args, usedPrefix, command }) => {
  try {
    if (text === 'hack') {
      // Hi message with typewriter effect
      await typewriterEffect(conn, m, m.chat, 'Hi');

      // Delay before editing the message
      await delay(1000); // Wait for a second

      // Edit the message to "Hallo"
      await conn.relayMessage(m.chat, {
        protocolMessage: {
          type: 14,
          editedMessage: {
            conversation: 'Hallo',
          },
        },
      });
    } else {
      // Handle other commands or messages here
    }
  } catch (error) {
    console.error(error);
    m.reply('Oops, something went wrong. We are trying to fix it ASAP.');
  }
};

// ... other parts of your code

async function typewriterEffect(conn, quoted, from, text) {
  let { key } = await conn.sendMessage(from, { text: 'Thinking...' }, { quoted: quoted });

  for (let i = 0; i < text.length; i++) {
    const noobText = text.slice(0, i + 1);
    await conn.relayMessage(from, {
      protocolMessage: {
        key: key,
        type: 14,
        editedMessage: {
          conversation: noobText,
        },
      },
    });

    await delay(100); // Adjust the delay between characters as needed
  }
}

handler.help = ['hack @user']
handler.tags = ['fun']
handler.command = /^(hack)$/i
