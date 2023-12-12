const logOut = document.getElementById("logout");
const currentUser = localStorage.getItem("currentUser");

logOut.addEventListener("click", function () {
  localStorage.removeItem("currentUser");
  location.assign("/src/login/login.html")
});

if(!currentUser) {
  location.assign("/src/login/login.html")
}