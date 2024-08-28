const contactForm = document.querySelector(".contactus__form");
const contactInputForms = contactForm.querySelectorAll(".input--form");
const contactInputEmail = contactForm.querySelector(
  ".input--form[type='email']"
);

// Form validation logic

const validateEmail = (email) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9]))\.){3}(?:(2(5[0-5]|[0-4][0-9])|1[0-9][0-9]|[1-9]?[0-9])|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
    );
};

let formErrors = [];

contactForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const allInputs = Array.from(contactInputForms);
  // Empty Validatiom
  allInputs.forEach((el) => {
    const closestContainer = el.closest(".contactus__input-wrapper");
    if (!el.value.trim()) {
      closestContainer.classList.add("input-error");
      if (!formErrors.includes(`${el.dataset.name} empty error`)) {
        formErrors.push(`${el.dataset.name} empty error`);
      }
    } else {
      closestContainer.classList.remove("input-error");
      formErrors = formErrors.filter(
        (err) => !(`${el.dataset.name} empty error` === err)
      );
    }
  });

  // Email Validation
  if (contactInputEmail.value && !validateEmail(contactInputEmail.value)) {
    contactInputEmail
      .closest(".contactus__input-wrapper")
      .classList.add("input--email-error");

    if (!formErrors.includes(`email invalid error`)) {
      formErrors.push(`email invalid error`);
    }
  } else {
    contactInputEmail
      .closest(".contactus__input-wrapper")
      .classList.remove("input--email-error");
    formErrors = formErrors.filter((err) => err !== "email invalid error");
  }

  if (formErrors.length === 0) {
    // Do the request
  }
});

console.log(dawwaq);
