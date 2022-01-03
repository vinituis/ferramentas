var horas = document.querySelector("input#hora").value;

var retorno = document.querySelector("span#valor");

console.log(retorno);

function conta() {

    var valorPorHora = 16.11;
    
    var valorPorMinuto = valorPorHora / 60;

    var total = parseFloat(hora.value) * valorPorMinuto;

    var valorTotal = total;

    retorno.innerHTML = "R$ " + total.toFixed(2);        
}