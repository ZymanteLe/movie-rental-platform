let userInfo = {
  name: "Jonas",
  surname: "Jonaitis",
  email: "jonas.jonaitis@gmail.com",
};
let resetEmail = document.getElementById("reset-email");
let mailFormat = /\S+@\S+\.\S+/;

function userProfile(object) {
  document.getElementById(
    "user-name"
  ).innerHTML = `<strong>Name: </strong> ${object.name}`;
  document.getElementById(
    "user-surname"
  ).innerHTML = `<strong>Surname: </strong> ${object.surname}`;
  document.getElementById(
    "user-email"
  ).innerHTML = `<strong>Email: </strong> ${object.email}`;
}

if (userInfo != null) {
  userProfile(userInfo);
}

resetEmail.addEventListener("click", function () {
  let newEmail = prompt("You can cnage your email here:");
  if (!newEmail.match(mailFormat)) {
    alert(`Please try again, it seems that your email is not correct.`);
  } else {
    userInfo.email = newEmail;
    userProfile(userInfo);
  }
});
