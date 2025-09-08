// Part 1: Event Handling Examples

// Light/Dark Mode Toggle
const toggleBtn = document.getElementById("toggleModeBtn");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent =
    document.body.classList.contains("dark-mode")
      ? "Switch to Light Mode"
      : "Switch to Dark Mode";
});

// Counter Game
let count = 0;
const counterDisplay = document.getElementById("counter");
const incrementBtn = document.getElementById("incrementBtn");
incrementBtn.addEventListener("click", () => {
  count++;
  counterDisplay.textContent = count;
});

// FAQ Collapsible
const faqBtns = document.querySelectorAll(".faq-question");
faqBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    const answer = btn.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
  });
});

// Part 3: Form Validation

document.getElementById("signupForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Stop form from submitting

  // Clear errors
  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("passwordError").textContent = "";
  document.getElementById("formSuccess").textContent = "";

  let isValid = true;

  // Name Validation
  const name = document.getElementById("name").value.trim();
  if (name === "") {
    document.getElementById("nameError").textContent = "Name is required";
    isValid = false;
  }

  // Email Validation (basic regex)
  const email = document.getElementById("email").value.trim();
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!email.match(emailPattern)) {
    document.getElementById("emailError").textContent = "Enter a valid email";
    isValid = false;
  }

  // Password Validation (min 8 chars)
  const password = document.getElementById("password").value;
  if (password.length < 8) {
    document.getElementById("passwordError").textContent =
      "Password must be at least 8 characters";
    isValid = false;
  }

  // Success Message
  if (isValid) {
    document.getElementById("formSuccess").textContent =
      "Form submitted successfully 🎉";
  }
});
