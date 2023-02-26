

// Functionality Part Of PopUp Div

var buttons = document.querySelectorAll(".modal_btns button");
var close_btns = document.querySelectorAll(".close_btn");
var modal_wrapper = document.querySelector(".modal_wrapper");
var s_modal = document.querySelector(".s_modal");
var e_modal = document.querySelector(".e_modal");

buttons.forEach(function (btn) {
  btn.addEventListener("click", function () {
    modal_wrapper.classList.add("active");
    if (btn.classList.contains("success_btn")) {
      s_modal.classList.add("active");
      e_modal.classList.remove("active");
    }
  });
});

close_btns.forEach(function (close) {
  close.addEventListener("click", function () {
    modal_wrapper.classList.remove("active");
    s_modal.classList.remove("active");
    e_modal.classList.remove("active");
  });
});

// --------------------------------------------------------------------------------------------------------------------------------------

// Must fill Condition Apply on Checkout Button

let input = document.querySelector(".mustfill");
let button = document.querySelector(".success_btn");

button.disabled = true; //setting button state to disabled

input.addEventListener("change", stateHandle);

function stateHandle() {
  if (document.querySelector(".mustfill").value === "") {
    button.disabled = true; //button remains disabled
  } else {
    button.disabled = false; //button is enabled
  }
}
