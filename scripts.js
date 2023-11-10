const menuButton = document.getElementById("menu-button");
const menu = document.getElementById("menu");

menuButton.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    if (menu.style.right === "0px") {
        menu.style.right = "-200px";
    } else {
        menu.style.right = "0px";
    }

});