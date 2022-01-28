const password = document.getElementById("password");
const val = document.getElementById("togglePw");

val.addEventListener(
  "click",
  (togglepass = () => {
    if (val.checked) {
      password.type = "text";
    } else {
      password.type = "password";
    }
  })
);
