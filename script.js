// script.js

document.getElementById('send-btn').addEventListener('click', sendMessage);
document.getElementById('sos-btn').addEventListener('click', sendSOS);

function sendMessage() {
    const userInput = document.getElementById('user-input').value.trim();
    
    if (userInput !== "") {
        // Show user message
        appendMessage(userInput, "user-message");
        document.getElementById('user-input').value = ''; // Clear input box

        // Simulate bot reply after 1 second
        setTimeout(() => {
            appendMessage("Let me process your request.", "bot-message");
        }, 1000);
    }
}

function sendSOS() {
    // Logic for sending SOS alert (e.g., send location, call APIs, etc.)
    appendMessage("SOS alert sent! Your emergency contact has been notified.", "bot-message");
}

function appendMessage(message, senderClass) {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add('message', senderClass);
    messageDiv.innerHTML = message;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight; // Scroll to the latest message
}
