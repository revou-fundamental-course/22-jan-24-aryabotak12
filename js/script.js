// Slideshow
let currentIndex = 0;
const totalSlides = document.querySelectorAll('.slide').length;

function nextSlide() {
    currentIndex = (currentIndex + 1) % totalSlides;
    updateSlide();
}

function updateSlide() {
    document.querySelectorAll('.slide').forEach((slide, index) => {
        if (index === currentIndex) {
            slide.style.display = 'block';
        } else {
            slide.style.display = 'none';
        }
    });
}

setInterval(nextSlide, 1000);

// notifikasi
const myForm = document.getElementById('myForm');

myForm.onsubmit = function (event) {
    event.preventDefault();

    alert('Berhasil dikirimkan!');
};
