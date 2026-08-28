const form = document.getElementById("registrationForm");

const nameInput = document.getElementById("name");
const phoneInput = document.getElementById("number");
const emailInput = document.getElementById("mail");
const passwordInput = document.getElementById("password");

const inputs = [nameInput, phoneInput, emailInput, passwordInput];

// Show message
function showMessage(input, message, type) {
  const messageBox = input.nextElementSibling;

  messageBox.textContent = message;
  messageBox.style.color = type === "success" ? "#22C55E" : "#F87171";

  input.style.borderColor = type === "success" ? "#22C55E" : "#F87171";
}

// Clear message
function clearMessage(input) {
  const messageBox = input.nextElementSibling;

  messageBox.textContent = "";
  input.style.borderColor = "#334155";
}

// Name validation

function validateName() {
  const name = nameInput.value.trim();

  const namePattern = /^[A-Za-z ]+$/;

  if (name === "") {
    showMessage(nameInput, "Please enter your name.", "error");

    return false;
  }

  if (name.length < 3) {
    showMessage(nameInput, "Name must contain at least 3 characters.", "error");

    return false;
  }

  if (!namePattern.test(name)) {
    showMessage(nameInput, "Name can contain letters only.", "error");

    return false;
  }

  showMessage(nameInput, "✓ Name looks good.", "success");

  return true;
}

// Phone validation
function validatePhone() {
  const phone = phoneInput.value.trim();

  const phonePattern = /^[0-9]{10}$/;

  if (phone === "") {
    showMessage(phoneInput, "Please enter your phone number.", "error");
    return false;
  }

  if (!phonePattern.test(phone)) {
    showMessage(
      phoneInput,
      "Phone number must contain exactly 10 digits.",
      "error",
    );
    return false;
  }

  showMessage(phoneInput, "✓ Phone number is valid.", "success");
  return true;
}

// Email validation
function validateEmail() {
  const email = emailInput.value.trim();

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (email === "") {
    showMessage(emailInput, "Please enter your email.", "error");
    return false;
  }

  if (!emailPattern.test(email)) {
    showMessage(emailInput, "Please enter a valid email address.", "error");
    return false;
  }

  showMessage(emailInput, "✓ Email is valid.", "success");
  return true;
}

// Password validation
function validatePassword() {
  const password = passwordInput.value;

  if (password === "") {
    showMessage(passwordInput, "Please enter a password.", "error");
    return false;
  }

  if (password.length < 8) {
    showMessage(
      passwordInput,
      "Password must contain at least 8 characters.",
      "error",
    );
    return false;
  }

  if (!/[A-Z]/.test(password)) {
    showMessage(passwordInput, "Add at least one uppercase letter.", "error");
    return false;
  }

  if (!/[0-9]/.test(password)) {
    showMessage(passwordInput, "Add at least one number.", "error");
    return false;
  }

  if (!/[!@#$%^&*]/.test(password)) {
    showMessage(passwordInput, "Add at least one special character.", "error");
    return false;
  }

  showMessage(passwordInput, "✓ Strong password.", "success");

  return true;
}

nameInput.addEventListener("input", validateName);

phoneInput.addEventListener("input", validatePhone);

emailInput.addEventListener("input", validateEmail);

passwordInput.addEventListener("input", validatePassword);

inputs.forEach(function (input) {
  input.addEventListener("focus", function () {
    input.style.boxShadow = "0 0 0 3px rgba(99, 102, 241, 0.2)";
  });

  input.addEventListener("blur", function () {
    input.style.boxShadow = "0px 0px 10px 0px #111827 inset";
  });
});
form.addEventListener("submit", function (event) {
  event.preventDefault(); // Stop normal browser submission

  // Check all fields
  const validName = validateName();
  const validPhone = validatePhone();
  const validEmail = validateEmail();
  const validPassword = validatePassword();

  // Only succeed if everything is valid
  if (validName && validPhone && validEmail && validPassword) {
    alert("✓ Registration successful!");
  }
});

// event.preventDefault();
