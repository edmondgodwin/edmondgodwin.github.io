// script.js

document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelector('.slides');
    const slide = document.querySelectorAll('.slide');
    const slideCount = slide.length;
    const slideWidth = slide[0].offsetWidth;
    let currentIndex = 0;

    // Clone the slides and append them to the end
    for (let i = 0; i < slideCount; i++) {
        const cloneSlide = slide[i].cloneNode(true);
        slides.appendChild(cloneSlide);
    }

    function moveSlides() {
        if (currentIndex >= slideCount) {
            slides.style.transition = 'none';
            slides.style.transform = `translateX(0)`;
            currentIndex = 0;
            setTimeout(() => {
                slides.style.transition = 'transform 0.5s ease-in-out';
                moveSlides();
            }, 50);
        } else {
            slides.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
            currentIndex++;
            setTimeout(moveSlides, 2000); // Adjust the delay as needed
        }
    }

    moveSlides();
});

// Category selection from URL hash
document.addEventListener('DOMContentLoaded', function() {
    // Check if we're on the products page
    if (document.querySelector('.product-categories')) {
        // Get the hash from the URL (without the #)
        const category = window.location.hash.substring(1);
        
        // If there's a valid category in the URL
        if (category && ['streetwear', 'casuals', 'shoes'].includes(category)) {
            // Find the corresponding tab button
            const button = document.querySelector(`.tab-button[data-category="${category}"]`);
            
            if (button) {
                // Remove active class from all buttons
                tabButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to the selected button
                button.classList.add('active');
                
                // Show the products for this category
                showProducts(category);
            }
        }
    }
});

// Tab Functionality
const tabButtons = document.querySelectorAll('.tab-button');
const productDivs = document.querySelectorAll('.product');

function showProducts(category) {
    productDivs.forEach(product => {
        product.classList.remove('active');
        if (category === 'all' || product.classList.contains(category)) {
            product.classList.add('active');
        }
    });
}

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const category = button.dataset.category;
        showProducts(category);

        // Update active tab
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});
showProducts('all');

// Expand bio functionality
const readMoreButtons = document.querySelectorAll(".read-more");

readMoreButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const fullBio = button.nextElementSibling;
        fullBio.classList.toggle("hidden");
    });
});

//Form popup and Book button
const contactForm = document.getElementById('contactForm');
const appointmentButton = document.getElementById('appointmentButton');

if (contactForm) {
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        alert('Thank you for contacting us. We will get back to you soon!');
        contactForm.reset(); // Clear the form after submission
    });
}

if (appointmentButton) {
     appointmentButton.addEventListener('click', function() {
        alert('To schedule a session, please call us at (234) 703-2783-874 or email us at info@houseofroyals.com to schedule your personal shopping experience.');
    });
}
