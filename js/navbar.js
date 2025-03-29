document.addEventListener("DOMContentLoaded", function() {
  const hamburger = document.getElementById("hamburger");
  const navLinks = document.getElementById("nav-links");
  const navItems = document.querySelectorAll(".nav-links li");
  const navbar = document.querySelector(".navbar");
  
  // Add index as custom property for staggered animations
  navItems.forEach((item, index) => {
    item.style.setProperty('--i', index);
  });

  // Toggle menu when hamburger is clicked
  hamburger.addEventListener("click", function() {
    navLinks.classList.toggle("active");
    document.body.classList.toggle("menu-open");
  });
  
  // Close menu when clicking on links
  navItems.forEach(item => {
    item.addEventListener("click", () => {
      if (navLinks.classList.contains("active")) {
        navLinks.classList.remove("active");
        document.body.classList.remove("menu-open");
      }
    });
  });

  // Navbar scroll effect
  window.addEventListener("scroll", function() {
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "rgba(0, 15, 30, 0.95)";
      navbar.style.boxShadow = "0 4px 20px rgba(0, 0, 0, 0.2)";
    } else {
      navbar.style.backgroundColor = "rgba(0, 15, 30, 0.85)";
      navbar.style.boxShadow = "0 4px 12px rgba(0, 0, 0, 0.15)";
    }
  });
});
