var reais = document.querySelector("input#reais");

var retorno = document.querySelector("span#minutos");

console.log(reais);

function conta() {

    var valorPorHora = 16.11;
    
    var valorPorMinuto = valorPorHora / 60;

    var total = parseFloat(reais.value) / valorPorMinuto;

    var emHoras = parseFloat(total) / 60;

    retorno.innerHTML = total.toFixed(0) + " minutos, que é aproximadamente <br>" + emHoras.toFixed(0) + " horas";
}