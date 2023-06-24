let checkbox = document.getElementById("toggle");
let monthly = document.querySelector(".monthly-text");
let yearly = document.querySelector(".yearly-text");
let hide = document.querySelectorAll(".free");

let arcade = document.querySelector(".price-arcade");
let advance = document.querySelector(".price-advance");
let pro = document.querySelector(".price-pro");

let arcadeOriginalContent = arcade.innerHTML;
let advanceOriginalContent = advance.innerHTML;
let proOriginalContent = pro.innerHTML;

function verificar() {
  if (checkbox.checked) {
    monthly.classList.remove("toggle-color");
    yearly.classList.add("toggle-color");
    for (i = 0; i < hide.length; i++) {
      hide[i].classList.remove("hide-promo");
    }
    arcade.innerHTML = "$90/yr";
    advance.innerHTML = "$120/yr";
    pro.innerHTML = "$150/yr";
  } else {
    monthly.classList.add("toggle-color");
    yearly.classList.remove("toggle-color");
    for (i = 0; i < hide.length; i++) {
      hide[i].classList.add("hide-promo");
    }
    arcade.innerHTML = arcadeOriginalContent;
    advance.innerHTML = advanceOriginalContent;
    pro.innerHTML = proOriginalContent;
  }
}

document.addEventListener("DOMContentLoaded", function () {
  verificar();
});

// Obtém todos os elementos com a classe "plan-option"
var planOptions = document.getElementsByClassName("plan-option");
let activeOption = null;
// Itera sobre os elementos e adiciona o ouvinte de evento de clique a cada um
for (var i = 0; i < planOptions.length; i++) {
  planOptions[i].addEventListener("click", function () {
    //protype.index retorna uma array dos elementos planOptions onde eu consiga pegar o indice do elemento que foi selecionado
    var index = Array.prototype.indexOf.call(planOptions, this);

    if (activeOption !== null) {
      activeOption.classList.remove("selection-active");
    }

    planOptions[index].classList.add("selection-active");
    activeOption = planOptions[index];
  });
}
