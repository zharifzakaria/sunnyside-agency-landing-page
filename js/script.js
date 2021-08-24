let btn = document.getElementById("mobile-btn");

btn.addEventListener('click', toggleMenu);

function toggleMenu() {
    let menu = document.getElementById("mobile-menu");
    menu.classList.toggle("menu-show");
    console.log("menu clicked");
}