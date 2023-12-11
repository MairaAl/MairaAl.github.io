let volumen;
let boton = document.getElementById("calcular");
let dia = document.getElementById("dia");
let flu = document.getElementById("flu");
let man = document.getElementById("man");
let error = document.getElementById("error");
let input = document.getElementById("peso");

boton.addEventListener("click", () => {
  flu.style.display = "none";
  man.style.display = "none";
  error.style.display = "none";
  dia.style.display = "none";

  let peso = document.getElementById("peso").valueAsNumber;
  if (peso > 0) {
    calcularPeso(peso);
  } else {
    error.style.display = "block";
    flu.style.display = "none";
    man.style.display = "none";
    dia.style.display = "none";
  }
});

function calcularPeso(peso) {
  if (peso <= 30) {
    volumen = segar(peso);
    dia.innerHTML = "Diario: " + volumen + " cc";
    dia.style.display = "block";
    flu.innerHTML = "Mantenimiento: " + Math.floor(volumen / 24) + " cc/hr";
    flu.style.display = "block";
    man.innerHTML = "m+m/2: " + Math.floor(volumen / 24) * 1.5 + " cc/hr";
    man.style.display = "block";
  } else {
    Volumen = superficie(peso);
    dia.innerHTML =
      "*1500: " +
      Math.floor(volumen * 1500) +
      " cc" +
      "/" +
      "*2000: " +
      Math.floor(volumen * 2000) +
      " cc";
    dia.style.display = "block";
    flu.innerHTML =
      "Man: " +
      Math.floor((volumen * 1500) / 24) +
      " cc/hr" +
      " - " +
      Math.floor((volumen * 2000) / 24) +
      " cc/hr";
    flu.style.display = "block";
  }
}
function segar(peso) {
  if (peso > 20) {
    volumen = (peso - 20) * 20 + 1500;
  } else if (peso > 10) {
    volumen = (peso - 10) * 50 + 1000;
  } else {
    volumen = peso * 100;
  }
  return volumen;
}
function superficie(peso) {
  volumen = (peso * 4 + 7) / (peso + 90);
  return volumen;
}
