
var num1 = parseInt(Math.random() * 10);
var num2 = parseInt(Math.random() * 10);

document.getElementById("num1").innerHTML = num1;
document.getElementById("num2").innerHTML = num2;


btnConfimar = document.getElementById("iconfirm");

btnConfimar.addEventListener("click", function () {


    var calculo = num1 + num2;

    var resposta = document.getElementById("resposta").value;

    if (calculo == resposta) {
        document.getElementById("resultado").innerHTML = `Você acertou`;
        location.reload();

    }

    else
        document.getElementById("resultado").innerHTML = "Tente mais uma vez.";

});


