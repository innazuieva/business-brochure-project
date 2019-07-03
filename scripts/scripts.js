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

chatButton.addEventListener('click', openChat);

function openChat() {
    console.log('hello')
    chatForm.classList.toggle('showChat');
}


// Home Page Slideshow