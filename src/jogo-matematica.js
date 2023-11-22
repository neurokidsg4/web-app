var num1 = parseFloat(document.getElementById("num1").innerHTML);
var num2 = parseFloat(document.getElementById("num2").innerHTML);

btnConfimar = document.getElementById("iconfirm");

btnConfimar.addEventListener("click", function(){
    
    var calculo = num1 + num2;

    var resposta = document.getElementById("resposta").value;

    if(calculo == resposta)
    document.getElementById("resultado").innerHTML = "Parabéns! Você acertou.";

    else
    document.getElementById("resultado").innerHTML = "Tente mais uma vez.";
});

