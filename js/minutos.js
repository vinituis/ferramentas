var reais = document.querySelector("input#reais");

var retorno = document.querySelector("span#minutos");

console.log(reais);

function conta() {

    var valorPorMinuto = 0.5;

    var total = parseFloat(reais.value) / valorPorMinuto;

    var emHoras = parseFloat(total) / 60;

    retorno.innerHTML = total + " minutos que é igual a " + emHoras.toFixed(2) + " horas";
}