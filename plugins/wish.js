// Assume you have a function to send voice messages called `sendVoiceMessage`

// Function to check the message content and send appropriate voice messages
function handleIncomingMessage(message) {
    const lowerCaseMessage = message.toLowerCase();

    if (lowerCaseMessage.includes('good morning')) {
        // Send Good Morning voice message
        sendVoiceMessage('https://github.com/Samridhya01/GURU-BOT/raw/main/Assets/html/htmla.mp3');
    }
}

// Example usage:
const userMessage = 'Good morning, Bot!';
handleIncomingMessage(userMessage);
