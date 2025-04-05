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
  event.preventDefault();
  const card = event.target.closest(".service-card");
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

  if (typeof WOW !== 'undefined') {
    new WOW().init();
  }

  if (typeof AOS !== 'undefined') {
    AOS.init({
      duration: 800,
      easing: 'ease-in-out',
      once: false,
      mirror: false,
      offset: 120,
      delay: 0,
    });
  }

  try {
    if (!document.querySelector('.cb-cursor')) {
      const cursorElement = document.createElement('div');
      cursorElement.className = 'cb-cursor';
      document.body.appendChild(cursorElement);

      const cursorTextElement = document.createElement('div');
      cursorTextElement.className = 'cb-cursor-text';
      cursorElement.appendChild(cursorTextElement);

      console.log('Cursor elements created');
    }

    const cursor = document.querySelector('.cb-cursor');
    const cursorText = document.querySelector('.cb-cursor-text');

    let mouseX = 0;
    let mouseY = 0;
    let cursorX = 0;
    let cursorY = 0;

    document.addEventListener('mousemove', function (e) {
      mouseX = e.clientX;
      mouseY = e.clientY;

      cursor.classList.add('-visible');
    });

    document.addEventListener('mouseleave', function () {
      cursor.classList.remove('-visible');
    });

    document.addEventListener('mouseenter', function () {
      cursor.classList.add('-visible');
    });

    document.addEventListener('mousedown', function () {
      cursor.classList.add('-active');
    });

    document.addEventListener('mouseup', function () {
      cursor.classList.remove('-active');
    });

    document.addEventListener('mouseover', function (e) {
      if (e.target.hasAttribute('data-cursor')) {
        cursor.classList.add(e.target.getAttribute('data-cursor'));
      }

      if (e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA') {
        cursor.classList.add('-pointer');
      }

      if (e.target.hasAttribute('data-cursor-text')) {
        cursorText.textContent = e.target.getAttribute('data-cursor-text');
        cursor.classList.add('-text');
      }
    });

    document.addEventListener('mouseout', function (e) {
      if (e.target.hasAttribute('data-cursor')) {
        cursor.classList.remove(e.target.getAttribute('data-cursor'));
      }

      if (e.target.tagName === 'A' ||
        e.target.tagName === 'BUTTON' ||
        e.target.tagName === 'INPUT' ||
        e.target.tagName === 'TEXTAREA') {
        cursor.classList.remove('-pointer');
      }

      if (e.target.hasAttribute('data-cursor-text')) {
        cursor.classList.remove('-text');
        cursorText.textContent = '';
      }
    });

    function animateCursor() {
      const ease = 0.2;
      cursorX += (mouseX - cursorX) * ease;
      cursorY += (mouseY - cursorY) * ease;

      cursor.style.transform = `translate(${cursorX}px, ${cursorY}px)`;

      requestAnimationFrame(animateCursor);
    }

    animateCursor();

    console.log('Custom cursor initialized');
  } catch (error) {
    console.warn('Custom cursor initialization failed:', error);
  }

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
  let tabLinks = document.querySelectorAll(".tabLinks");
  tabLinks.forEach(link => link.classList.remove("activeLink"));

  let tabContents = document.querySelectorAll(".tabContents");
  tabContents.forEach(content => content.classList.remove("activeTab"));

  event.currentTarget.classList.add("activeLink");

  document.getElementById(tabName).classList.add("activeTab");
}

document.addEventListener('DOMContentLoaded', function () {
  const navLinks = document.querySelectorAll("a[href^='#']");

  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href').substring(1);
      if (targetId) {
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          e.preventDefault();
          window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
          });
        }
      }
    });
  });
});
