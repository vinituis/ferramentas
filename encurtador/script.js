function encurtarUrl () {
    //valida se existe link
    let url = document.getElementById('input-url').value;

    if(!url) {
        alert('É preciso inserir uma Url');
        return;
    }

    //api key: 8b05da053f5444b6860a28d8d578518f

    //encurtar o link

    //header
    let headers = {
        'Content-Type': 'application/json',
        'apiKey': '8b05da053f5444b6860a28d8d578518f'
    }

    //dados da requisição
    let linkRequest = {
        destination: url,
        domain: { fullName: 'rebrand.ly' }
    }

    fetch('https://api.rebrandly.com/v1/links', {
        method: 'POST',
        headers: headers,
        body: JSON.stringify(linkRequest)
    })
        .then(response => response.json())
        .then(json => {
            let inputUrl = document.getElementById('input-url');
            var bntEncurta = document.getElementById('encurta');

            bntEncurta.innerHTML = 'Sua url foi encurtada'
            bntEncurta.style.border = '2px solid green';
            inputUrl.value = json.shortUrl;
        })
}

function copiar() {
    let inputUrl = document.getElementById('input-url');
    var btn = document.getElementById('copia');
    if (inputUrl.value == ''){
        btn.innerHTML = 'Não há link para ser copiado';
        btn.style.border = '2px solid red';
    }else{
        inputUrl.select();
        inputUrl.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(inputUrl.value);
        btn.innerHTML = 'Seu link foi copiado!';
        btn.style.border = '2px solid green';
    }
}

function reset() {
    var inputUrl = document.getElementById('input-url');
    var bntEncurta = document.getElementById('encurta');
    var btn = document.getElementById('copia');

    inputUrl.value = '';

    bntEncurta.innerHTML = 'Encurtar';
    bntEncurta.style.border = 'none';

    btn.innerHTML = 'Copiar link';
    btn.style.border = 'none';
}

window.onload = function () {
    var inputUrl = document.getElementById('input-url').focus();
}