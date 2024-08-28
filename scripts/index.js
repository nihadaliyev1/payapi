const navButton = document.querySelector(".navigation__button");
const headerContainer = document.querySelector(".header-container");

// Trap focus inside modal

function trapFocus(e, modalId) {
  const isTabPressed = e.key === `Tab` || e.keyCode === 9;

  if (!isTabPressed) {
    return;
  }
  const focusableElements = `button, [href], input, select, textarea, iframe, [tabindex]:not([tabindex="-1"])`;
  const modal = document.getElementById(modalId);

  // get focusable elements in modal
  const firstFocusableElement = modal.querySelectorAll(focusableElements)[0];
  const focusableContent = modal.querySelectorAll(focusableElements);
  const lastFocusableElement = focusableContent[focusableContent.length - 1];

  if (e.shiftKey) {
    if (document.activeElement === firstFocusableElement) {
      lastFocusableElement.focus();
      e.preventDefault();
    }
  } else if (document.activeElement === lastFocusableElement) {
    firstFocusableElement.focus();
    e.preventDefault();
  }
}

function initTrapFocus(e) {
  return trapFocus(e, "modal");
}

// Navigation Mobile Menu Logic

navButton.addEventListener("click", function (e) {
  if (!headerContainer.classList.contains("nav--active")) {
    headerContainer.classList.add("nav--active");
    navButton.setAttribute("aria-expanded", "true");
    document.documentElement.classList.add("no-scroll");
    document.addEventListener("keydown", initTrapFocus);
  } else {
    headerContainer.classList.remove("nav--active");
    navButton.setAttribute("aria-expanded", "false");
    document.documentElement.classList.remove("no-scroll");
    document.removeEventListener("keydown", initTrapFocus);
  }
});

document.addEventListener("click", function (e) {
  if (!e.target.closest(".nav--active")) {
    headerContainer.classList.remove("nav--active");
    document.documentElement.classList.remove("no-scroll");
  }
});
