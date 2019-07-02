const body = document.body;
const menu = document.getElementById('menu');

menu.addEventListener('click', openMenu);

function openMenu() {
    console.log("hello")
    body.classList.toggle('show');
}

menu.addEventListener('mousedown', function (e) {
    e.preventDefault();
});