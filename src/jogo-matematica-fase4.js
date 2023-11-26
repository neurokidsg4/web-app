
var num1 = [8, 0, 6, 9, 2];
var num2 = [2, 3, 6, 1, 2];
var cont = 1;
var op1;
var op2;

const btnContinue = document.getElementById("icontinue");
btnContinue.style.display = "none";

const btnProximaFase = document.getElementById("iproxima-fase");
btnProximaFase.style.display = "none";

const btnVoltar = document.getElementById("ivoltar");
btnVoltar.style.display = "none";



//Gera dois número aleatório de 0 a 10.
function geraNum() {

    op1 = num1[cont-1];
    op2 = num2[cont-1];

    document.getElementById("num1").innerHTML = op1;
    document.getElementById("num2").innerHTML = op2;

}

geraNum();

//Ação ao confirmar a resposta.
btnConfimar = document.getElementById("iconfirm");

btnConfimar.addEventListener("click", function () {

    btnConfimar.style.display = "none";

    var calculo = op1 / op2;
    var resposta = document.getElementById("resposta").value;



    if (calculo == resposta) {

        document.getElementById("pontos").innerHTML = `Acertos: ${cont}`;
        document.getElementById("resultado").innerHTML = `Parabéns! Você acertou`;

        if (cont < 5) {

            btnContinue.style.display = "block";
            btnContinue.addEventListener("click", function () {

                geraNum();
                document.getElementById("resposta").value = "";
                document.getElementById("resultado").innerHTML = "";
                btnContinue.style.display = "none";
                btnConfimar.style.display = "block";
            });

            cont++;
        }

        else{
            btnConfimar.style.display ="none";
            btnProximaFase.style.display  = "none";
            btnVoltar.style.display = "";


            btnVoltar.addEventListener("click", function(){
                window.location.href = "/src/area_infantil.html";
            });
        }

    }

    else{

        document.getElementById("resultado").innerHTML = "Tente mais uma vez.";
        document.getElementById("resposta").value = "";
        btnConfimar.style.display = "block";

    }

});