let checkbox = document.getElementById("toggle");
let monthly = document.querySelector(".monthly-text");
let yearly = document.querySelector(".yearly-text");

function verificar() {
  if (checkbox.checked) {
    monthly.classList.remove("toggle-color");
    yearly.classList.add("toggle-color");
  } else {
    monthly.classList.add("toggle-color");
    yearly.classList.remove("toggle-color");
  }
}
document.addEventListener("DOMContentLoaded", function () {
  verificar();
});
