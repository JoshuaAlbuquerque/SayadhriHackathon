function sendMessage(choice) {
    const chatBox = document.getElementById('chat-box');
    const message = document.createElement('div');
    message.className = 'message';
    message.textContent = `User selected: ${choice}`;
    chatBox.appendChild(message);
}
