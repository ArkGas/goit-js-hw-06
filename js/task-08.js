const loginForm = document.querySelector(".login-form");
const emailInput = loginForm.elements.email;
const passwordInput = loginForm.elements.password;

loginForm.addEventListener("submit", function (event) {
  event.preventDefault();

  if (emailInput.value === "" || passwordInput.value === "") {
    alert("Wszystkie pola muszą być wypełnione");
  } else {
    const formData = {
      email: emailInput.value,
      password: passwordInput.value,
    };

    console.log(formData);
    loginForm.reset();
  }
});
