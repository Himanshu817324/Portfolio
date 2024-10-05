
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