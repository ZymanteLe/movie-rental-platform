const signInButton = document.getElementById("signin-button");
const signinMessage = document.getElementById("signin-message");
const signInEmail = document.getElementById("signin-email");
const signInPassword = document.getElementById("signin-password");
const openRegisterFormBtn = document.getElementById("open-form-button");
const registerForm = document.getElementById("register-form");
const registerInFormBtn = document.getElementById("register-inform-button");
const userName = document.getElementById("userName");
const surname = document.getElementById("surname");
const registerEmail = document.getElementById("register-email");
const emailRepeat = document.getElementById("email-repeat");
const registerPassword = document.getElementById("register-password");
const passwordRepeat = document.getElementById("password-repeat");
const registerMessage = document.getElementById("register-message");
let registerFormHiden = true;
const mailFormat = /\S+@\S+\.\S+/;
const registerUsers = JSON.parse(localStorage.getItem("registerUsers")) || [];

class CurrentUser {
  constructor(name, surname, email, password) {
    this.setName = function (newName) {
      this.name = typeof newName === "string" ? newName : "";
    };
    this.setSurname = function (newSurname) {
      this.surname = typeof newSurname === "string" ? newSurname : "";
    };
    this.setEmail = function (newEmail) {
      this.email = typeof newEmail === "string" ? newEmail : "";
    };
    this.setPassword = function (newPassword) {
      this.password = typeof newPassword === "string" ? newPassword : "";
    };
    this.getUser = function () {
      return {
        name: this.name,
        surname: this.surname,
        email: this.email,
        password: this.password,
      };
    };
    this.setName(name);
    this.setSurname(surname);
    this.setEmail(email);
    this.setPassword(password);
  }
}

function checkUser(email, password) {
  let current = '';
  registerUsers.map((element) => {
    element.email === email && element.password === password
      ? ((current = new CurrentUser(
          element.name,
          element.surname,
          element.email,
          element.password
        )),
        (signinMessage.innerHTML = ``),
        location.assign("/src/home/home.html"))
      : (signinMessage.innerHTML = `Your password or email incorrect`);
  });
  localStorage.setItem("currentUser", JSON.stringify(current));
  console.log(currentUser);
}

signInButton.addEventListener("click", function () {
  if (!signInEmail.value || !signInPassword.value) {
    signinMessage.innerHTML = `Email and/or password fields are empty.`;
  } else if (!signInEmail.value.match(mailFormat)) {
    signinMessage.innerHTML = `Your email is not correct.`;
  } else {
    checkUser(signInEmail.value, signInPassword.value);
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
      addUser(
        userName.value,
        surname.value,
        registerEmail.value,
        registerPassword.value
      );
      location.assign("/src/home/home.html");
    }
  });
}

addUser = (name, surname, email, password) => {
  registerUsers.push({ name, surname, email, password });
  localStorage.setItem("registerUsers", JSON.stringify(registerUsers));
  console.log(registerUsers);
  return { name, surname, email, password };
};
