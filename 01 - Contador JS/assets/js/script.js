var currentNumberWrapper = document.getElementById('currentNumber')
var currentNumber = 0;

function increment(){
    currentNumber = currentNumber + 1;
    currentNumberWrapper.innerHTML = currentNumber;
}

function decrement(){
    currentNumber = currentNumber - 1;
    currentNumberWrapper.innerHTML = currentNumber;
}
var input = document.querySelector("#name");
var texto = "";

function click(){
    texto = texto+input;
    input.innerHTML = texto;
    console.log(texto)
}

