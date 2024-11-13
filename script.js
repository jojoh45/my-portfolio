function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    const span = document.querySelector(".span-2");
    span.classList.toggle("change");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}