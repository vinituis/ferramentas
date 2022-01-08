const getBanco = () => JSON.parse(localStorage.getItem('todoList')) ?? [];

const setBanco = (banco) => localStorage.setItem('todoList', JSON.stringify(banco));

const criaItem = (tarefa, status, indice) => {
    const item = document.createElement('label');
    item.classList.add('item');
    item.innerHTML = `
        <input type="checkbox" ${status} data-indice=${indice}>
        <div>${tarefa}</div>
        <input type="button" value="X" data-indice=${indice}>
    `
    document.getElementById('lista').appendChild(item);
}

const limparTarefas = () => {
    const lista = document.getElementById('lista');
    while (lista.firstChild) {
        lista.removeChild(lista.lastChild);
    }
}

const renderTela = () => {
    limparTarefas();
    const banco = getBanco();
    banco.forEach ((item, indice) => criaItem (item.tarefa, item.status, indice));
}

const inserirTarefa = (evento) => {
    const tecla = evento.key;
    const texto = evento.target.value;

    if (tecla === 'Enter') {
        const banco = getBanco();
        banco.push({'tarefa': texto, 'status': ''});
        setBanco(banco);
        renderTela();
        evento.target.value = '';
    }
}

const removeItem = (indice) => {
    const banco = getBanco();
    banco.splice (indice, 1);
    setBanco(banco);
    renderTela();
}

const atualizarItem = (indice) => {
    const banco = getBanco();
    banco[indice].status = banco[indice].status === '' ? 'checked' : '';
    setBanco(banco);
    renderTela();
}

const clickItem = (evento) => {
    const elemento = evento.target;
    if (elemento.type === 'button') {
        const indice = elemento.dataset.indice;
        removeItem (indice);
    }else if (elemento.type === 'checkbox') {
        const indice = elemento.dataset.indice;
        atualizarItem (indice);
    }
}

document.getElementById('novoItem').addEventListener('keypress', inserirTarefa);
document.getElementById('lista').addEventListener('click', clickItem);

renderTela();