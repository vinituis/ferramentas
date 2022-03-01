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
            inputUrl.value = json.shortUrl;
        })
}

function copiar() {
    let inputUrl = document.getElementById('input-url');
    
    inputUrl.select();
    inputUrl.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(inputUrl.value);
    alert('copiado');
}