// Функція для плавного прокручування сторінки до верху
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}




// Функціонал бургер-меню
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Перемикання меню
        nav.classList.toggle('nav-active');

        // Анімація бургер-меню
        burger.classList.toggle('toggle');

        // Плавна анімація пунктів меню
        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = '';
            } else {
                link.style.animation = `slideIn 0.5s ease forwards ${index / 7 + 0.3}s`;
            }
        });
    });
});

// Функціонал каталогу криптовалют
document.addEventListener('DOMContentLoaded', () => {
    const openLoginModal = document.getElementById('openLoginModal');
    const closeLoginModal = document.getElementById('closeLoginModal');
    const loginModal = document.getElementById('loginModal');

    // Відкрити модальне вікно
    openLoginModal.addEventListener('click', () => {
        loginModal.classList.remove('hidden');
    });

    // Закрити модальне вікно
    closeLoginModal.addEventListener('click', () => {
        loginModal.classList.add('hidden');
    });

    // Закриття при натисканні за межі вікна
    window.addEventListener('click', (e) => {
        if (e.target === loginModal) {
            loginModal.classList.add('hidden');
        }
    });
});

// Функція для перемикання панелі керування
function toggleControlPanel() {
    const controlPanel = document.getElementById('control-panel');
    controlPanel.classList.toggle('hidden');
}

// Функція для генерації випадкового кольору та застосування його до тексту
function generateRandomColor(selector) {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)},
                                    ${Math.floor(Math.random() * 256)},
                                    ${Math.floor(Math.random() * 256)})`;

    changeTextColor(selector, randomColor);

    // Оновити колірний селектор
    if (selector === 'h1') {
        document.getElementById('header-color').value = randomColor;
    } else if (selector === 'p') {
        document.getElementById('paragraph-color').value = randomColor;
    }
}

// Функція для генерації випадкового кольору фону
function generateRandomBackgroundColor() {
    const randomColor = `rgb(${Math.floor(Math.random() * 256)},
                                    ${Math.floor(Math.random() * 256)},
                                    ${Math.floor(Math.random() * 256)})`;

    changeBackground(randomColor);
}

// Функція для зміни кольору тексту
function changeTextColor(selector, color) {
    document.querySelector(selector).style.color = color;
}

// Функція для зміни розміру шрифту
function changeFontSize(size) {
    document.querySelector('h1').style.fontSize = size;
    document.querySelector('p').style.fontSize = size;
}

// Функція для зміни розміру контейнера
function changeContainerSize() {
    const container = document.getElementById('content-area');
    const widthValue = document.getElementById('width-slider').value + 'px';
    const heightValue = document.getElementById('height-slider').value + 'px';

    container.style.width = widthValue;
    container.style.height = heightValue;
}

// Функція для зміни кольору фону
function changeBackground(color) {
    document.getElementById('content-area').style.backgroundColor = color;
}

// Функція для зміни фонової картинки
function changeBackgroundImage() {
    const fileInput = document.getElementById('bg-image');
    const file = fileInput.files[0];
    const reader = new FileReader();

    reader.onload = function(e) {
        document.getElementById('content-area').style.backgroundImage = `url(${e.target.result})`;
        document.getElementById('content-area').style.backgroundSize = 'cover';
    }

    reader.readAsDataURL(file);
}

// Функція для застосування користувацьких стилів
function applyCustomStyle() {
    const property = document.getElementById('custom-style-input').value;
    const value = document.getElementById('custom-value-input').value;

    if (property && value) {
        document.getElementById('content-area').style[property] = value;
    }
}

// Функція для переміщення слайда в слайдах
let currentSlide = 0;

function moveSlide(direction) {
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.event-card').length;
    currentSlide += direction;

    if (currentSlide < 0) currentSlide = totalSlides - 1;
    if (currentSlide >= totalSlides) currentSlide = 0;

    const offset = -currentSlide * 100; // Кожна картка займає 100% ширини
    slides.style.transform = `translateX(${offset}%)`;
}







