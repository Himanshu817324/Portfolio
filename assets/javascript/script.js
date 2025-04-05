function filterProjects(category) {
  let projects = document.querySelectorAll(".project-card");

  projects.forEach((project) => {
    if (category === "all") {
      project.style.display = "block";
    } else {
      if (project.classList.contains(category)) {
        project.style.display = "block";
      } else {
        project.style.display = "none";
      }
    }
  });
}

function toggleService(event) {
  event.preventDefault(); // Prevent default anchor behavior
  const card = event.target.closest(".service-card"); // Find the parent card
  const content = card.querySelector(".serviceMore");

  if (content.style.display === "none" || content.style.display === "") {
    content.style.display = "block";
    event.target.innerText = "Show Less";
  } else {
    content.style.display = "none";
    event.target.innerText = "Learn More";
  }
}

document.addEventListener("DOMContentLoaded", function () {
  // Initialize toggles for experience section
  const toggleBtns = document.querySelectorAll(".toggle-btn");
  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const details = this.previousElementSibling;
      if (details.style.display === "block") {
        details.style.display = "none";
        this.textContent = "Learn More";
      } else {
        details.style.display = "block";
        this.textContent = "Show Less";
      }
    });
  });

  // Initialize WOW.js
  if (typeof WOW !== 'undefined') {
    new WOW().init();
  }

  // Initialize AOS
  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,           // Animation duration in ms
      easing: 'ease-in-out',   // Animation easing
      once: false,             // Whether animation should happen only once
      mirror: false,           // Whether elements should animate out while scrolling past them
      offset: 120,             // Offset (in px) from the original trigger point
      delay: 0,                // Default delay
    });
  }

  // Back to top functionality
  const backToTopButton = document.querySelector('.back-to-top');
  if (backToTopButton) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 300) {
        backToTopButton.classList.add('active');
      } else {
        backToTopButton.classList.remove('active');
      }
    });

    backToTopButton.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  }

  // Contact form handling
  const contactForm = document.querySelector(".contact-form");
  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();
      alert("Thanks! Your message has been sent.");
      this.reset();
    });
  }
});

function openTab(tabName) {
  // Remove active class from all tab links
  let tabLinks = document.querySelectorAll(".tabLinks");
  tabLinks.forEach(link => link.classList.remove("activeLink"));

  // Remove active class from all tab contents
  let tabContents = document.querySelectorAll(".tabContents");
  tabContents.forEach(content => content.classList.remove("activeTab"));

  // Add active class to the clicked tab link
  event.currentTarget.classList.add("activeLink");

  // Show the corresponding tab content
  document.getElementById(tabName).classList.add("activeTab");
}

// Fix navigation links smooth scrolling
document.addEventListener('DOMContentLoaded', function () {
  // Add smooth scrolling to all links
  const navLinks = document.querySelectorAll("a[href^='#']");

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      // Get the target element
      const targetId = this.getAttribute('href').substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          window.scrollTo({
            top: targetElement.offsetTop - 70, // Adjust for navbar height
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
