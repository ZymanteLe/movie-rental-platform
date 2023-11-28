let signInButton = document.getElementById("signin-button");
let signinMessage = document.getElementById("signin-message");
let signInEmail = document.getElementById("signin-email");
let signInPassword = document.getElementById("signin-password");
let openRegisterFormBtn = document.getElementById("open-form-button");
let registerForm = document.getElementById("register-form");
let registerInFormBtn = document.getElementById("register-inform-button");
let userName = document.getElementById("userName");
let surname = document.getElementById("surname");
let registerEmail = document.getElementById("register-email");
let emailRepeat = document.getElementById("email-repeat");
let registerPassword = document.getElementById("register-password");
let passwordRepeat = document.getElementById("password-repeat");
let registerMessage = document.getElementById("register-message");
let registerFormHiden = true;
let mailFormat = /\S+@\S+\.\S+/;

signInButton.addEventListener("click", function () {
  if (!signInEmail.value || !signInPassword.value) {
    signinMessage.innerHTML = `Email and/or password fields are empty.`;
  } else if (!signInEmail.value.match(mailFormat)) {
    signinMessage.innerHTML = `Your email is not correct.`;
  } else {
    signinMessage.innerHTML = ``;
    location.assign("home.html");
  }
});

if (registerFormHiden) {
  openRegisterFormBtn.addEventListener("click", function () {
    registerForm.style.display = "flex";
    openRegisterFormBtn.style.display = "none";
  });
  registerFormHiden = false;
}

if (!registerFormHiden) {
  registerInFormBtn.addEventListener("click", function () {
    if (
      !userName.value ||
      !registerEmail.value ||
      !emailRepeat.value ||
      !registerPassword.value ||
      !passwordRepeat.value
    ) {
      registerMessage.innerHTML = `Please fill up form.`;
    } else if (userName.value.length < 2) {
      registerMessage.innerHTML = `Your name is too short.`;
    } else if (surname.value.length > 0 && surname.value.length < 2) {
      registerMessage.innerHTML = `Your surname is too short.`;
    } else if (!registerEmail.value.match(mailFormat)) {
      registerMessage.innerHTML = `Your email is not correct.`;
    } else if (registerEmail.value !== emailRepeat.value) {
      registerMessage.innerHTML = `Provided emails are not the same`;
    } else if (registerPassword.value.length < 8) {
      console.log("clicked");
      registerMessage.innerHTML = `Your password is too short.`;
    } else if (registerPassword.value !== passwordRepeat.value) {
      registerMessage.innerHTML = `Provided passwords are not the same`;
    } else {
      registerMessage.innerHTML = ``;
      location.assign("home.html");
    }
  });
}
