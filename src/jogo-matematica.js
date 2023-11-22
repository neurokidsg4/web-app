num1 = parseFloat(document.getElementById("num1").innerHTML);
num2 = parseFloat(document.getElementById("num2").innerHTML);

btnConfimar = document.getElementBtId("iconfirm");

calculo = num1 + num2;

btnConfimar.addEventListener("click", function(){

    resposta = document.getElementById("resposta");

    if(calculo == resposta)
    document.getElementById("resultado").innerHTML = "Acertou";
});

if(calculo == resultado)
console.log('Parabéns! Você acertou.');

document.getElementById("resultado").innerHTML = calculo;

