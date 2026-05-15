function att(){
    let inP = document.getElementById("inP");
    let outC = document.getElementById("outC");

    let pala = inP.value;

    var x = pala.length;
    var vog = 0;
    var conso = 0;

    for (var i = 0; i < x; i++){
        if (pala[i] == "a" || pala[i] == "e" || pala[i] == "i" || pala[i] == "o" || pala[i] == "u" || 
        pala[i] == "A" || pala[i] == "E" || pala[i] == "I" || pala[i] == "O" || pala[i] == "U"){
            vog += 1;
        } else {
            conso += 1;
        }
    }

    outC.textContent = "Palavra: " + pala;
    outC.textContent += " || Letras: " + x;
    outC.textContent += " || Consoantes: " + conso;
    outC.textContent += " || Vogais: "+ vog;
}

let outP = document.getElementById("inM");

outP.addEventListener("click", att);