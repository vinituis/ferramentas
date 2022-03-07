var tel = document.getElementById('nTel');

var msg = document.getElementById('mensagem');

function geraLink () {
  var link = document.getElementById('link');
  
  if(tel.value == ''){
    link.innerText = 'É necessário inserir um número';
  } else {
  nTel = tel.value;
  m = msg.value
  
  link.innerText = 'https://wa.me/+55' + nTel + '?text=' + m;
  }
}

function limpaLink () {
  var link = document.getElementById('link');
  link.innerHTML = '';
  tel.value = '';
  msg.value = '';
}

window.onload = function () {
  var tel = document.getElementById('nTel').focus();
}