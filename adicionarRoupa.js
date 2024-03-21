var botaoAdicionar = document.querySelector("#adicionar-encomenda");


botaoAdicionar.addEventListener("click", function(event){
    var linha = document.createElement("tr");
    var coluna = document.createElement("td");
    var coluna2 = document.createElement("td");
    var coluna3 = document.createElement("td");
    var coluna4 = document.createElement("td");
    var coluna5 = document.createElement("td");
    var nome =  document.getElementsByClassName(".info-nome").value;
    var qtde = document.getElementsByClassName(".info-produto").value;
    var produto = document.getElementsByClassName(".info-qtd").value;
    var preco = document.getElementsByClassName(".info-valor").value;
    var total = calculaTotal(preco, qtde)
    event.preventDefault();

    coluna.textContent = nome;
    coluna2.textContent = qtde;
    coluna3.textContent = produto;
    coluna4.textContent = preco;
    coluna5.textContent = total;

    linha.appendChild(coluna);
    linha.appendChild(coluna2);
    linha.appendChild(coluna3);
    linha.appendChild(coluna4);
    linha.appendChild(coluna5);

    document.querySelector("table").appendChild(linha);
});

