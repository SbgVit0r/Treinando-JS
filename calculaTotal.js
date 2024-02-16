// Captura todos os clientes que fizeram encomendas
var clientes = document.querySelectorAll(".cliente")

// Passa por cada encomenda calculando o valor total
for (let count = 0; count < clientes.length; count++) {
    
    // Captura a quantidade encomendada
    var qtde = clientes[count].querySelector(".info-qtde").textContent

    //Captura o valor unitário do produto
    var unitario = cliente[count].querySelector(".info-valor").textContent

    // Valida a quantidade
    if(qtde <1 || isNaN(qtde)){
        //Quantidade NOK, avisa o usuario.
        clientes[count].querySelector(".info-qtde").textContent = "QTDE INVALIDA!"
        clientes[count].style.backgroundColor="red"
    }else{
        //Quantidade OK, prossegue
        //Calcula o valor total da encomenda
        clientes[count].querySelector(".info-total").textContent = calculaTotal(qtde,unitario);
    }

    // Validar valor unitário

    if (qtd > 7 || isNaN(valor)) {
        clientes[count].style.backgroundColor="red"
    }
    
}

function calculaTotal(qtde, unitario){
    var total = 0;
    total=qtde*unitario;
}
