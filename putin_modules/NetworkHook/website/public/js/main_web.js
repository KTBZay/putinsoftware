const web_description = document.getElementById('description').textContent = 'Get Discord bots, and other roleplay items at 20% cost!'
const web_name = document.getElementById('site-name').textContent = 'PutinJs';
function newMsg(announcement) {
    alert(announcement);
}
function Loaders() {
    function web_server_(port) {
        this.port = port;
        console.log('Loader: Web Server has loaded')
    }
    web_server_(3000);
}
function newErrorReport(error, description, comment, components) {
    const errorChannel = document.getElementById('reports');
    const error_title = document.getElementById('error-name').innerHTML = error;
    const error_description = document.getElementById('error-description').innerHTML= description;
    const comments = document.getElementById('comment').innerHTML= comment;
    const AffectedComponents = document.getElementById('components').innerHTML = components;
    alert(error + ' Check out the status page for more information')
}
function UpdateComments(user,comment, Delete = Boolean()) {
    if (Delete == false) {
        const userSent = user;
        const MSGChannel = document.getElementById('UpdatedComments');
        const Comment = document.createElement('p').textContent = `${userSent}: ${comment}`;
        MSGChannel.appendChild(Comment)
    };
}
// Variables
var messages = document.querySelector('.message-list')
var btn = document.querySelector('.btn')
var input = document.querySelector('input')

// Button/Enter Key
btn.addEventListener('click', sendMessage)
input.addEventListener('keyup', function(e){ if(e.keyCode == 13) sendMessage() })

// Messenger Functions
function sendMessage(){
   var msg = input.value;
   input.value = ''
   writeLine(msg)
}
function addMessage(e){
   var msg = e.data ? JSON.parse(e.data) : e;
   writeLine(`${msg.FROM}: ${msg.MESSAGE}`)
}
function writeLine(text){
   var message = document.createElement('li')
   message.classList.add('message-item', 'item-secondary')
   message.innerHTML = 'Customer says: ' + text
   messages.appendChild(message)
   messages.scrollTop = messages.scrollHeight;
}
newErrorReport('001-Basic System Error', 'Nun')