let currentIndex = 0;
const slides = document.querySelectorAll('.slide');
const totalSlides = slides.length;

function nextSlide() {
    // Текущий активный слайд
    const currentSlide = slides[currentIndex];

    // Убираем активный класс у текущего слайда (начинаем исчезание)
    currentSlide.classList.remove('active');

    // Ждём, пока анимация исчезновения завершится
    currentSlide.addEventListener('transitionend', () => {
        // Переходим к следующему слайду
        currentIndex = (currentIndex + 1) % totalSlides;

        // Добавляем активный класс новому слайду (начинаем появление)
        slides[currentIndex].classList.add('active');
    }, { once: true }); // Обработчик сработает только один раз
}

// Запускаем автоматическую смену слайдов
setInterval(nextSlide, 5000); // Переключение каждые 5 секунды