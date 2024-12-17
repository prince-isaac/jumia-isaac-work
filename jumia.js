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
// Select all menu items that should toggle the dropdown
const menuItems = document.querySelectorAll('.nav-links .menu-1');

// Add click event listeners to each menu item
menuItems.forEach(item => {
    item.addEventListener('click', function(event) {
        const subMenu = this.querySelector('.sub-menu-1');
        
        // If the sub-menu is already open, close it
        if (subMenu.style.display === 'block') {
            subMenu.style.display = 'none';
        } else {
            // Close any open sub-menus first
            document.querySelectorAll('.sub-menu-1').forEach(sub => {
                sub.style.display = 'none';
            });

            // Then, open the clicked sub-menu
            subMenu.style.display = 'block';
        }

        // Prevent the click from propagating to other elements (like document body)
        event.stopPropagation();
    });
});

// Close all dropdowns if clicking outside of them
document.addEventListener('click', function(event) {
    if (!event.target.closest('.nav-links')) {
        document.querySelectorAll('.sub-menu-1').forEach(sub => {
            sub.style.display = 'none';
        });
    }
});
// Set the end time (24 hours from now)
let endTime = new Date().getTime() + 24 * 60 * 60 * 1000; // 24 hours in milliseconds

// Update the countdown every 1 second
let countdownInterval = setInterval(function() {
  // Get the current time
  let now = new Date().getTime();

  // Calculate the remaining time
  let distance = endTime - now;

  // Calculate hours, minutes, and seconds
  let hours = Math.floor((distance % (1000 * 60 * 60 * 12)) / (1000 * 60 * 60));
  let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  let seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the elements
  document.getElementById("hours").textContent = hours.toString().padStart(2, "0");
  document.getElementById("minutes").textContent = minutes.toString().padStart(2, "0");
  document.getElementById("seconds").textContent = seconds.toString().padStart(2, "0");

  // If the countdown is over, stop the timer
  if (distance < 0) {
    clearInterval(countdownInterval);
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    alert("The countdown has ended!");
  }
}, 1000);
let currentIndex = 0;  // Track the current slide
const itemsPerPage = 6; // Show 6 items per page
const imageSet = document.querySelector('.image-set');  // The container for images
const totalItems = document.querySelectorAll('.images-item').length;  // Total number of images

// Function to handle the slide movement
function moveSlide(direction) {
  // Update the currentIndex based on direction
  currentIndex += direction;

  // If we reach the end, loop back to the start
  if (currentIndex < 0) {
    currentIndex = Math.floor(totalItems / itemsPerPage) - 1; // Last set of images
  } else if (currentIndex >= Math.floor(totalItems / itemsPerPage)) {
    currentIndex = 0; // First set of images
  }

  // Calculate the offset for sliding
  const offset = -(currentIndex * (100 / itemsPerPage));  // Move the images container by percentage
  
  // Apply the transformation to the image-set container
  imageSet.style.transform = `translateX(${offset}%)`;
}