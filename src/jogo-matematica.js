
//Se comentar as 4 linha enumeradas abaixo o jogo roda normalmente.

//comentar essa linha (1)
// import { Game } from './js/entities/Jogo.js';

//comentar essa linha(2)
// const jogo = new Game('Matematica');

var num1 = 0;
var num2 = 0;
var cont = 1;

const btnContinue = document.getElementById("icontinue");
btnContinue.style.display = "none";

const btnProximaFase = document.getElementById("iproxima-fase");
btnProximaFase.style.display = "none";

const btnVoltar = document.getElementById("ivoltar");
btnVoltar.style.display = "none";



//Gera dois número aleatório de 0 a 10.
function geraNum() {

    num1 = parseInt(Math.random() * 10);
    num2 = parseInt(Math.random() * 10);

    document.getElementById("num1").innerHTML = num1;
    document.getElementById("num2").innerHTML = num2;

}

geraNum();

//Ação ao confirmar a resposta.
btnConfimar = document.getElementById("iconfirm");

btnConfimar.addEventListener("click", function () {

    btnConfimar.style.display = "none";

    var calculo = num1 + num2;
    var resposta = document.getElementById("resposta").value;

    if (calculo == resposta) {

        //comentar essa linha(3)
        // jogo.sumPoint();

        document.getElementById("pontos").innerHTML = `Acertos: ${cont}`;
        document.getElementById("resultado").innerHTML = `Parabéns! Você acertou`;

        if (cont < 5) {

            //cometar essa linha(4)
            // jogo.attempt();
            
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
            btnProximaFase.style.display  = "";
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