var titulo = document.querySelector("#titulo");

titulo.textContent = "Lista de Encomendas";

const total = document.querySelectorAll('.info-total')
const qtd = document.querySelectorAll('.info-qtd') 
const valor = document.querySelectorAll('.info-valor')

for (let i = 0; i < total.length; i++) {
    total[i].textContent = ((qtd[i].textContent * valor[i].textContent))
}