

// Form Validation
document.getElementById("formSubmit").addEventListener("submit", function (e) {
  e.preventDefault();

  //   let formCont = document.getElementById("formSubmit");
  // formCont.addEventListener("submit", function (e) {
  //   e.preventDefault();

  let playerInput = document.getElementById("player").value.trim();
  let emailInput = document.getElementById("email").value.trim();
  let passwordInput = document.getElementById("password").value.trim();
  let confirmPasswordInput = document
    .getElementById("confirmPassword")
    .value.trim();
  let checkBox = document.getElementById("myCheckbox");

  let playerError = document.getElementById("playerError");
  let emailError = document.getElementById("emailError");
  let passwordError = document.getElementById("passwordError");
  let confirmPasswordError = document.getElementById("confirmPasswordError");
  let checkboxError = document.getElementById("checkboxError");

  // Reset previous error messages
  playerError.innerHTML = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  confirmPasswordError.textContent = "";
  checkboxError.textContent = "";

  // Other form validations
  if (playerInput === "") {
    playerError.innerHTML = "Player ID is required";
    playerError.style.display = "block";
    // return;
  }

  if (emailInput === "") {
    emailError.innerHTML = "Email Address is required";
    emailError.style.display = "block";

    // return;
  } else if (!emailInput.includes("@") || !emailInput.includes(".")) {
    emailError.innerHTML = "Please enter a valid email address";
    emailError.style.display = "block";

    return;
  }

  if (passwordInput === "") {
    passwordError.innerHTML = "Password is required";
    passwordError.style.display = "block";

    return;

  } else if (passwordInput.length < 6) {
    passwordError.innerHTML = "Password must be at least 6 characters";
    passwordError.style.display = "block";

    return;
  }

  if (confirmPasswordInput === "") {
    confirmPasswordError.innerHTML = "Confirm password is required";
    confirmPasswordError.style.display = "block";

    return;

  } else if (passwordInput !== confirmPasswordInput) {
    confirmPasswordError.innerHTML = "Passwords do not match";
    confirmPasswordError.style.display = "block";

    return;
  }

  // Check checkbox validation

  if (!checkBox.checked) {
    checkboxError.innerHTML = "You must check this box";
    checkboxError.style.display = "block";
    return;
    
  } else {
    alert("You've Successfully SignUp");
  }

  // If all validations pass, redirect to login page
  window.location.href = "./index.html"; // Replace 'login.html' with your actual login page URL
});
