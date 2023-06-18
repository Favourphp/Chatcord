const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector();

const socket = io();
//message from server
socket.on('message', message => {
  console.log(message);
  outputMessage(message);
});

//scroll down
chatMessages.scrollTOp = chatMessages.scrollHeight;

//message submit

chatForm.addEventListener('submit', (e) => {
e.preventDefault();
//get message text
const msg = e.target.elements.msg.value;


//emit a message to the server
socket.emit('chatMessage', msg);

})

//output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message');
  div.innerHTML 
}