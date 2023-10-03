//var funcao_inc = [];

var palavra = prompt("Sua string?", "ovo");
if(palavra != null) {
    alert("Abra o console!");
}

var funcao = palavra.split("");
funcao = funcao.filter((letras) => letras != " ");
funcao = funcao.map((letra) => letra.toUpperCase());
console.log(funcao);

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