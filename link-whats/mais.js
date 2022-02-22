var tel = document.getElementById('nTel');
console.log(tel.value);

var msg = document.getElementById('mensagem');

function geraLink () {
  var link = document.getElementById('link');
  
  nTel = tel.value;
  m = msg.value
  
  link.innerText = 'https://wa.me/+5511' + nTel + '?text=' + m;
}