
const tabLinks = document.querySelectorAll('.tabLinks');
const tabContents = document.querySelectorAll('.tabContents');

function openTab(tabName) {
  for (tabLink of tabLinks) {
    console.log(tabLink.classList);

    tabLink.classList.remove('activeLink');

  }

  for (tabContent of tabContents) {
    tabContent.classList.remove('activeTab');
  }
  event.currentTarget.classList.add("activeLink");
  document.getElementById(tabName).classList.add("activeTab")
}

const swiper = new Swiper('.slider-wrapper', {
  loop: true,
  grabCursor: true,
  spaceBetween: 30,
  // Pagination bullets
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true
  },
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  // Responsive breakpoints
  breakpoints: {
    0: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1024: {
      slidesPerView: 3
    }
  }
});