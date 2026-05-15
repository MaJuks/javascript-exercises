// numero aleatorio
var x = Math.floor(Math.random() * 100 + 1);

// puxando variavel erros
var erros = document.getElementById("outErros");

//puxando variavel chances
var chances = document.getElementById("outChances");

// puxando mensagem para o usuario "acertou ou errou"
var outSaida = document.getElementById("outSaida");

var numeros = [];

// tentativas do usuario
var tentativas = 0;
var tenta = 1;

  
//iniciar jogo ao clicar Apostar
document.getElementById("btSubmit").onclick = function(){
    // numero de clicadas no apostar = chances
    var xy = 6-tenta;

    // numero do usuario 
    var num = document.getElementById("inNumero").value;
    numeros.push(num);  // acrescenta o


    // inseriu numero maior do sorteado//
    if(num > x)  
    {    
        tentativas++;
        outSaida.innerHTML = '<span style="color: pink">' + "Errou!!!!!!" +" Dica... Chute um numero menor :v <br> Suas Jogadas: "+numeros+ '</span>';
    }

    // inseriu numero menor que o sorteado//
    else
    {
        tentativas++;
        outSaida.innerHTML = '<span style="color: pink">' + "Errou!!!!!!" +" Dica... Chute um numero maior :v <br> Suas Jogadas: "+numeros+ '</span>';
    }

    // Atualizando menu do usuario. erros e chances
    erros.innerHTML = '<span style="color: pink">' + tentativas + '</span>';
    chances.innerHTML = '<span style="color: pink">' + xy + '</span>';

    // caso as chances do usuario acabarem
    if (xy == 0){
        erros.innerHTML = '<span style="color: pink">' + "perdeu" + '</span>';
        chances.innerHTML = '<span style="color: pink">' + "perdeu" + '</span>';
        outSaida.innerHTML = '<span style="color: pink">' + "PERDEUUUUU!!!!!" +" O número sorteado foi:  "+ x + " Clique em <b>JOGAR NOVAMENTE</b> e tenta outra vez <3 <br> Suas Jogadas: "+numeros+'</span>';
        var btNovo = document.getElementById('btNovo').style.display = 'inline';
        var xxx = document.getElementById('btSubmit').style.display = 'none';

    }
     // se o usuario acertou
     if(num == x)
     {  
         erros.innerHTML = '<span style="color: pink">' + "GANHOU!!!! " + '</span>';
         chances.innerHTML = '<span style="color: pink">'+ "GANHOU!!!! " + '</span>';
         outSaida.innerHTML = '<span style="color: pink">' + "Acertou!!!!!!" +" Número sorteado: "+ x +" Clique em <b>JOGAR NOVAMENTE</b> e tenta outra vez <3 <br> Suas Jogadas: "+ numeros+'</span>';
         var btNovo = document.getElementById('btNovo').style.display = 'inline';
         var xxx = document.getElementById('btSubmit').style.display = 'none';
     }

    
    tenta++;
}
btNovo.addEventListener("click", function() {document.location.reload(true);
});