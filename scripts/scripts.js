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



// Sub-menu on Women's Page


const submenu = document.getElementById('sub-menu');
const subnav = document.getElementById('sub-nav');

const submenu2 = document.getElementById('sub-menu2');
const subnav2 = document.getElementById('sub-nav2');

submenu.addEventListener('click', openSubMenu);
submenu2.addEventListener('click', openSubMenu2);

function openSubMenu() {
    subnav.classList.toggle('show-subnav');
}

function openSubMenu2() {
    subnav2.classList.toggle('show-subnav');
}


// Scroll-Then-Fix-Menu - Women's Page

window.onscroll = function () {
    myFunction()
};

var fixedNav = document.getElementById('womens-nav');

// Get the offset position of the navbar
var sticky = fixedNav.offsetTop;

// Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
function myFunction() {
    if (window.pageYOffset > sticky) {
        fixedNav.classList.add("sticky");
    } else {
        fixedNav.classList.remove("sticky");
    }
}