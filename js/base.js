var horas = document.querySelector("input#hora").value;

var retorno = document.querySelector("span#valor");

console.log(retorno);

function conta() {

    var valorPorMinuto = 0.5;

    var valorPorHora = valorPorMinuto * 60;

    var total = parseFloat(hora.value) * valorPorMinuto;

    var valorTotal = total;

    retorno.innerHTML = "R$ " + total;
}