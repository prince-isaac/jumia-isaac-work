let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-images img');

// Function to show the current slide and hide others
function showSlide(index) {
    slides.forEach((slide, i) => {
         slide.style.display = (i === index) ? 'block' : 'none'
    });
}

function changeSlide(direction) {
    currentSlide += direction;
    if (currentSlide < 0) {
        currentSlide = slides.length -1;
    } else if (currentSlide >= slides.length) {
        currentSlide = 0;
    }
    showSlide(currentSlide);
}

showSlide(currentSlide);

setInterval(() => {
    changeSlide(1);
},5000);