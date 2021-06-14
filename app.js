//Incrementa
var btnIncrementa = document.querySelectorAll(".btn-incrementa");

for (let botao of btnIncrementa) {
    
    botao.addEventListener('click',incrementa);

    function incrementa() {

    var item = botao.closest('.item');
    var input = item.querySelector('.quantidade');
     
    input.value++;

    var preco = pegaPrecoItem(item);
    somaTotal(preco);
    }
    
}




//Decrementa
var btnDecrementa = document.querySelectorAll(".btn-decrementa");
btnDecrementa.addEventListener('click',decrementa);

function decrementa(){
    var item = btnDecrementa.closest('.item');
    var input = item.querySelectorAll('.quantidade');
    
    if (input.value > 0) {

    input.value--;

    var preco = pegaPrecoItem(item);
    somaTotal(-preco);
    } else {
        console.log(input.value);
    }
}

//Func Aux
function pegaPrecoItem(item) {
    var precoItem = item.querySelectorAll('.preco-item');
    return Number(precoItem.textContent);
}
function somaTotal(valor){
    var elementoTotal = document.querySelectorAll("#total");
    elementoTotal.textContent = valor + Number(elementoTotal.textContent);
}