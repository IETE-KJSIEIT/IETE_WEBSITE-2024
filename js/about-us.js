// About Us page functionality
document.addEventListener('DOMContentLoaded', function() {
    // Make logo clickable to go to home page
    const logo = document.querySelector('.logo img');
    if (logo) {
        logo.style.cursor = 'pointer';
        logo.addEventListener('click', function() {
            window.location.href = './index.html';
        });
    }
    
    // Add animation to section headings
    const headings = document.querySelectorAll('h2');
    headings.forEach(heading => {
        heading.classList.add('fade-in');
    });
    
    // Initialize sections as active based on viewport
    checkSectionsInView();
});

// Add fade-in animation when scrolling to sections
window.addEventListener('scroll', function() {
    checkSectionsInView();
});

// Function to check which sections are in view
function checkSectionsInView() {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        
        if (sectionTop < windowHeight * 0.75) {
            section.classList.add('active');
        }
    });
} 