var tel = document.getElementById('nTel');

var msg = document.getElementById('mensagem');

function geraLink () {
  var link = document.getElementById('link');
  
  nTel = tel.value;
  m = msg.value
  
  link.innerText = 'https://wa.me/+55' + nTel + '?text=' + m;
}

function limpaLink () {
  var link = document.getElementById('link');
  link.innerHTML = '';
  tel.value = '';
  msg.value = '';
}