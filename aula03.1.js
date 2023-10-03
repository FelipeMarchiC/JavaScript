var funcao = [];

var palavra = prompt("Sua string?", "ovo");
if(palavra != null) {
    alert("Abra o console!");
}

funcao = palavra.replace(" ","").split("")

var i = 0;
var flag = 0;

console.log("Essa palavra...");
while (flag == 0 && i < (funcao.length - i) / 2) {
    if (funcao[i] != funcao[funcao.length - 1 - i]) {
        flag = 1;
    }
    i++;
}

if (flag == 0) {
    console.log("É palíndromo!");
} else {
    console.log("Não é palíndromo!");
}