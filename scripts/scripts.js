// Hamburger Menu 

const body = document.body;
const menu = document.getElementById('menu');

if (menu !== null) {

    menu.addEventListener('click', openMenu);

    function openMenu() {
        body.classList.toggle('show');
    }

    menu.addEventListener('mousedown', function (e) {
        e.preventDefault();
    });
} else {
    console.log("menu is not available");
}




// Live Chat

const chatButton = document.getElementById('live-chat-icon');
const chatForm = document.getElementById('live-chat-form');
const closeChatButton = document.getElementById('close-chat-btn');

chatButton.addEventListener('click', openChat);

function openChat() {
    chatForm.classList.add('live-chat-form-show');
    chatForm.classList.remove('live-chat-form');
}

closeChatButton.addEventListener('click', closeChat);
console.log('hello');

function closeChat() {
    chatForm.classList.add('live-chat-form');
}


// Home Page Slideshow



// Men's Brands Collapsible 
var coll = document.getElementsByClassName("collapsible");

for (var i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}

// Sub-menu on Women's Page

const submenu = document.getElementById('sub-menu');
const subnav = document.getElementById('sub-nav');

const submenu2 = document.getElementById('sub-menu2');
const subnav2 = document.getElementById('sub-nav2');

const sizeMenu = document.getElementById('size-menu');
const sizeNav = document.getElementById('size-nav');
const colorsMenu = document.getElementById('colors-menu');
const colorsNav = document.getElementById('colors-nav');
const brandsMenu = document.getElementById('brands-menu');
const brandsNav = document.getElementById('brands-nav');


// Women'n Brands Menu

const viewAllBrands = document.getElementById('view-all-brands');
const viewAllBrandsMenu = document.getElementById('view-all-brands-menu');

if (viewAllBrands !== null) {
    viewAllBrands.addEventListener('click', openAllBrands);

    function openAllBrands() {
        viewAllBrandsMenu.classList.toggle('show-all-brands-menu');
    }
} else {
    console.log("menu is not available");
}







if (submenu !== null) {
    submenu.addEventListener('click', openSubMenu);

    function openSubMenu() {
        subnav.classList.toggle('show-subnav');
    }
} else {
    console.log("menu is not available");
}

if (submenu2 !== null) {
    submenu2.addEventListener('click', openSubMenu2);

    function openSubMenu2() {
        subnav2.classList.toggle('show-subnav');
    }
} else {
    console.log("menu is not available");
}

if (sizeMenu !== null) {
    sizeMenu.addEventListener('click', openSizeMenu);

    function openSizeMenu() {
        sizeNav.classList.toggle('show-sizeNav');
    }
} else {
    console.log("menu is not available");
}

if (colorsMenu !== null) {
    colorsMenu.addEventListener('click', openColorsMenu);

    function openColorsMenu() {
        colorsNav.classList.toggle('show-colorsNav');
    }
} else {
    console.log("menu is not available");
}

if (brandsMenu !== null) {
    brandsMenu.addEventListener('click', openBrandsMenu);

    function openBrandsMenu() {
        brandsNav.classList.toggle('show-brandsNav');
    }
} else {
    console.log("menu is not available");
}




// Scroll-Then-Fix-Menu - Women's Page

window.onscroll = function () {
    myFunction()
};

var fixedNav = document.getElementById('womens-nav');

if (fixedNav !== null) {
    var sticky = fixedNav.offsetTop;
} else {
    console.log("menu is not available");
}

function myFunction() {
    var isTabletMediaQuery = window.matchMedia("(min-width: 700px)");

    if (isTabletMediaQuery.matches === false) {
        return;
    }

    if (window.pageYOffset > sticky) {
        fixedNav.classList.add("sticky");

        let marginLeft = $(fixedNav).outerWidth();
        $(".card-container").css({
            "margin-left": marginLeft + "px"
        });
    } else {
        fixedNav.classList.remove("sticky");
        $(".card-container").css({
            "margin-left": "0px"
        });
    }
}