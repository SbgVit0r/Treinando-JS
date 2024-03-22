var botaoAdicionar = document.querySelector("#adicionar-encomenda");

botaoAdicionar.addEventListener("click", function(event){
    event.preventDefault();

    var form = document.querySelector("#form-adiciona");
    
    var encomenda = obtemEncomenda(form);

    console.log(encomenda);
})

function obtemEncomenda(form){

    var encomenda = {
        nome: form.nome.value,
        qtde: form.qtd.value,
        produto: form.produto.value,
        unitario: form.valor.value,
        total: calculaTotal(form.qtd.value,form.valor.value)
    }    

    return encomenda;
}

function montaTr(encomenda){

    var tr = document.createElement("tr");
    
    var nomeTd = montaTd(encomenda.nome, "info-nome");
    var qtdeTd = montaTd(encomenda.qtde, "info-qtde");
    var produtoTd = montaTd(encomenda.produto, "info-produto");
    var unitarioTd = montaTd(encomenda.unitario, "info-unitario");
    var totalTd = montaTd(encomenda.total, "info-total");

    tr.appendChild(nomeTd);
    tr.appendChild(qtdeTd);
    tr.appendChild(produtoTd);
    tr.appendChild(unitarioTd);
    tr.appendChild(totalTd);

    return tr;
}

function montaTd(dado, classe){

    var td = document.createElement("td");
    td.textContent = dado;
    td.classList.add(classe);

    return td;
}