const button = document.querySelector(".trigger");
const menu = document.querySelector(".full-screen-nav");
const container = document.querySelector(".container");

button.onclick = () => {
    menu.classList.add("open");

}

