// Hamburger Menu 

const body = document.body;
const menu = document.getElementById('menu');

menu.addEventListener('click', openMenu);

function openMenu() {
    body.classList.toggle('show');
}

menu.addEventListener('mousedown', function (e) {
    e.preventDefault();
});



// Live Chat

const chatButton = document.getElementById('live-chat-icon');
const chatForm = document.getElementById('live-chat-form');
const closeChatButton = document.getElementById('close-chat-btn');

chatButton.addEventListener('click', openChat);

function openChat() {
    chatForm.classList.add('live-chat-form-show');
    chatForm.classList.remove('live-chat-form');
    //     chatForm.classList.toggle('live-chat-form');
    //     chatForm.classList.toggle('live-chat-form-show');
}

closeChatButton.addEventListener('click', closeChat);
console.log('hello');

function closeChat() {
    chatForm.classList.add('live-chat-form');
}


// Home Page Slideshow