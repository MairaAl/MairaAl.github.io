let boton = document.getElementById("calcular");
let dia = document.getElementById("dia");
let flu = document.getElementById("flu");
let man = document.getElementById("man");
let error = document.getElementById("error");
let input = document.getElementById("peso");
boton.addEventListener("click", calcular);
input.addEventListener("keyup", calcular);

function calcular() {
  const DATO = document.getElementById("peso").valueAsNumber;
  console.log(DATO);
  if (DATO > 0) {
    error.style.display = "none";
    let valor = segar(DATO);
    console.log(valor);
    let mantenimiento = valor * 1.5;
    let porHora = valor / 24;
    dia.innerHTML = "Diario: " + valor + " cc";
    flu.innerHTML = " Por hora: " + Math.round(porHora) + " cc/hr";
    man.innerHTML = "m+m/2: " + mantenimiento + " cc";
    flu.style.display = "block";
    man.style.display = "block";
    dia.style.display = "block";
    function segar(peso) {
      if (DATO > 20) {
        return (DATO - 20) * 20 + 1500;
      } else if (DATO > 10) {
        return (DATO - 10) * 50 + 1000;
      } else {
        return DATO * 100;
      }
    }
    function superficie(peso) {
      return;
      (DATO * 4 + 7) / (DATO + 90);
    }
    if (DATO <= 30) {
      segar(peso);
    } else {
      superficie(peso);
    }
  } else {
    error.style.display = "block";
    flu.style.display = "none";
    man.style.display = "none";
    dia.style.display = "none";
  }
}
