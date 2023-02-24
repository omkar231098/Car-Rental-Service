let logInBtn = document.querySelector("#signin");
let signUpBtn = document.querySelector("#signup");
let signIn = document.querySelector("#signIn");
let signUp = document.querySelector("#signUp");
signIn.style.display = "none";
logInBtn.addEventListener("click", function () {
  //console.log("login");
  signUp.style.display = "none";
  signIn.style.display = "block";
});
signUpBtn.addEventListener("click", function () {
  //console.log("signup");
  signUp.style.display = "block";
  signIn.style.display = "none";
});
let arr = JSON.parse(localStorage.getItem("admin")) || [];
signUp.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj = {
    name: signUp.name.value,
    phnNo:signUp.phnNo.value,
    email: signUp.email.value,
    password: signUp.password.value,
    check_password: signUp.passwordChk.value,
  };
  arr.push(obj);
  if (obj.password != obj.check_password) {
    alert("password not match");
  } else {
    localStorage.setItem("admin", JSON.stringify(arr));
    alert("Sign up successfully");
    signUp.reset();
  }
});

signIn.addEventListener("submit", function (event) {
  event.preventDefault();
  let obj1 = {
    email: signIn.email1.value,
    password: signIn.password1.value,
  };
  // let storeData=localStorage.parse
  arr.forEach((el) => {
    users = el.email;
    userPsw = el.password;
  });
  if (users != obj1.user && userPsw != obj1.password) {
    alert("Invalid");
  } else {
    alert("Log in successfully");
    window.location.assign("./adminData.html");
  }
  });