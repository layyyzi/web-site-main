
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
//сторінка авторизації
function openLoginModal() {
    document.getElementById('authModal').style.display = 'block';
    document.getElementById('login-section').style.display = 'block';
    document.getElementById('register-section').style.display = 'none';
}

function openRegisterModal() {
    document.getElementById('authModal').style.display = 'block';
    document.getElementById('login-section').style.display = 'none';
    document.getElementById('register-section').style.display = 'block';
}

function closeModal() {
    document.getElementById('authModal').style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var modal = document.getElementById('authModal');
    if (event.target == modal) {
        modal.style.display = 'none';
    }
}

function handleRegister(event) {
    event.preventDefault(); // Prevent form submission

    // Simulate successful registration
    const confirmationMessage = document.getElementById('confirmationMessage');
    confirmationMessage.style.display = 'block';

    // Clear form fields
    document.getElementById('registerForm').reset();

    // Hide modal after a short delay
    setTimeout(() => {
        document.getElementById('authModal').style.display = 'none';
        confirmationMessage.style.display = 'none';
    }, 3000);
}


//бургер меню\
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav-links');
    const navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click', () => {
        // Переключення меню
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


//каталог криптовалют

// Виконується після завантаження сторінки
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




