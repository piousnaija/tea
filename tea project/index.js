// let index = 0;
// const slides = document.querySelectorAll('.slide');
// const totalSlides = slides.length;

// function showSlide(n) {
//     slides.forEach((slide, i) => {
//         slide.style.transform = `translateX(-${n * 100}%)`;
//     });
// }

// setInterval(() => {
//     index = (index + 1) % totalSlides;
//     showSlide(index);
// }, 3000); 
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.remove('active');
            if (i === index) {
                slide.classList.add('active');
            }
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Show the first slide initially
    showSlide(currentIndex);

    // Change slides every 3 seconds
    setInterval(nextSlide, 3000);
});
