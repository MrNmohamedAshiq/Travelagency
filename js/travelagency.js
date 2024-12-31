$(document).ready(function () {
  $(function () {
    function runEffect() {

      var selectedEffect = $("#effectTypes").val();

      var options = {};

      if (selectedEffect === "scale") {
        options = { percent: 50 };
      } else if (selectedEffect === "size") {
        options = { to: { width: 200, height: 60 } };
      }

      $("#effect").toggle(selectedEffect, options, 500);
    };

    $("#button").on("click", function () {
      runEffect();
    });
  });
  $(function () {
    $(".question-btn1").on("click", function () {
      $(".question-ans1").toggle();
      $(".question-ans2").hide();
      $(".question-ans3").hide();
      $(".question-ans4").hide();
      $(".question-ans5").hide();
    });
    $(".question-btn2").on("click", function () {
      $(".question-ans1").hide();
      $(".question-ans2").toggle();
      $(".question-ans3").hide();
      $(".question-ans4").hide();
      $(".question-ans5").hide();
    });
    $(".question-btn3").on("click", function () {
      $(".question-ans1").hide();
      $(".question-ans2").hide();
      $(".question-ans3").toggle();
      $(".question-ans4").hide();
      $(".question-ans5").hide();
    });
    $(".question-btn4").on("click", function () {
      $(".question-ans1").hide();
      $(".question-ans2").hide();
      $(".question-ans3").hide();
      $(".question-ans4").toggle();
      $(".question-ans5").hide();
    });
    $(".question-btn5").on("click", function () {
      $(".question-ans1").hide();
      $(".question-ans2").hide();
      $(".question-ans3").hide();
      $(".question-ans4").hide();
      $(".question-ans5").toggle();
    });
  });
});

function clock() {
  const mytime = document.querySelector(".time");

  const mydate = new Date();

  const hrs = 24 - mydate.getHours();
  const min = 60 - mydate.getMinutes();
  const sec = 60 - mydate.getSeconds();

  mytime.innerHTML = hrs + ":" + min + ":" + sec;
}

setInterval(clock, 1000);

function validation() {
  const mail = document.getElementById("email");

  regx = /([a-zA-Z0-9]{3,15})+@+([a-zA-Z]{4,10})+\.+([a-zA-Z]{2,8})/;

  if (regx.test(mail.value)) {
    alert("Subscribtion Was Succesfully")
  }
  else {
    alert("The Email Is Not a Invalid Email")
  }
}

function validationmail() {
  const mail = document.getElementById("email");
  const text = document.getElementById("displaymail");

  regx = /([a-zA-Z0-9]{3,15})+@+([a-zA-Z]{4,10})+\.+([a-zA-Z]{2,8})/;

  if (mail.value.length > 13) {
    text.innerHTML = "login";
    text.style.color = "#067973";
  }
  else {
    text.innerHTML = "not login";
    text.style.color = "#b71540";
  }
}
function validationpass() {
  const password = document.getElementById("pass");
  const text = document.getElementById("displaypass");

  if (password.value.length > 6) {
    text.innerHTML = "login";
    text.style.color = "#067973";
  }
  else {
    text.innerHTML = "not login";
    text.style.color = "#b71540";
  }
}

function login() {

  const logmail = document.getElementById("email");
  const logpassword = document.getElementById("pass");

  localStorage.setItem(logmail.value, logpassword.value)

  if (logmail.value.length == 0) {
    alert("Enter The Email")
  }
  else if (logpassword.value.length == 0) {
    alert("Enter The Password")
  }
  else if (logmail.value.length > 0 & logpassword.value.length > 0) {
    alert("Login Succesful")
  }
}

function forpass() {

  const conpassword = document.getElementById("conpass").value;
  const newpassword = document.getElementById("newpass").value;


  if (newpassword.length == 0) {
    alert("Please Enter The New Password")
  }
  else if (conpassword.length == 0) {
    alert("Please Enter The Confrim Password")
  }
  else if (conpassword == newpassword) {
    alert("Password Succesful Changed")
  }
  else {
    alert("Opps! Error")
  }
}

function validationpass() {
  const newpassword = document.getElementById("newpass").value;
  const text = document.getElementById("displaypass");

  if (newpassword.length > 6) {
    text.innerHTML = "Strong Password";
    text.style.color = "#067973";
  }
  else {
    text.innerHTML = "Weak Password";
    text.style.color = "#b71540";
  }
}
function comment() {
  alert("Send Message")
}

function Application() {
  alert("Send succesfully")
}