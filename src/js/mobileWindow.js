// ToDo Вариант 1
// // Получаем элементы
// const mobileMenu = document.getElementById("mob-menu-window");
// const openMenuBtn = document.getElementById("mob-menu-open");
// const closeMenuBtn = document.getElementById("mob-menu-close");

// // Изначально скрываем меню
// mobileMenu.style.opacity = "0";
// mobileMenu.style.pointerEvents = "none";
// mobileMenu.style.transition = "opacity 0.3s ease";

// // Функция переключения меню
// function toggleMenu() {
//     if (mobileMenu.style.opacity === "0") {
//         mobileMenu.style.opacity = "1";
//         mobileMenu.style.pointerEvents = "auto";
//     } else {
//         mobileMenu.style.opacity = "0";
//         mobileMenu.style.pointerEvents = "none";
//     }
// }

// // Открытие и закрытие меню
// openMenuBtn.addEventListener("click", toggleMenu);
// closeMenuBtn.addEventListener("click", toggleMenu);



// ToDo Вариант 2
// Получаем элементы
const mobileMenu = document.getElementById("mob-menu-window");
const openMenuBtn = document.getElementById("mob-menu-open");
const closeMenuBtn = document.getElementById("mob-menu-close");
const menuLinks = mobileMenu.querySelectorAll("a");

// Изначально скрываем меню
mobileMenu.style.opacity = "0";
mobileMenu.style.pointerEvents = "none";
mobileMenu.style.transition = "opacity 0.3s ease";

// Функция переключения меню
function toggleMenu() {
    if (mobileMenu.style.opacity === "0") {
        mobileMenu.style.opacity = "1";
        mobileMenu.style.pointerEvents = "auto";
    } else {
        mobileMenu.style.opacity = "0";
        mobileMenu.style.pointerEvents = "none";
    }
}

// Открытие и закрытие меню
openMenuBtn.addEventListener("click", toggleMenu);
closeMenuBtn.addEventListener("click", toggleMenu);

// Закрытие меню при клике на ссылку
menuLinks.forEach(link => {
    link.addEventListener("click", toggleMenu);
});
