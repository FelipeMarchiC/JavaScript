//Assim se faz um comentário
/*Assim também*/

//Nome de variável: $pode, tb_pode, camelCase, maiúscula e minúscula
//Tipos: Boolean, Null, Undefined, String, Symbol, Object, Number

function darDataConcatenada() {
    let msg_concatenada = 24 + 3 + "/" + "09" + "/" + 2 + 0 + 2 + 3;
    console.log("Data:", msg_concatenada);
}


function converter() {
    console.log("== é um comparador c/ conversão\n=== é um comparador sem conversão\nSem conversão, qualquer dados de tipos diferentes serão Falsy!\nPor outro lado, c/ conversão isso se torna mais flexível\nPor exemplo...");
    console.log("10 == '10' = Truthy");
    console.log("null == undefined = Truthy");
    console.log("'' == false = Truthy");
    console.log("");
}

function tiposDeMensagem() {
    alert("Essa é uma mensagem de alerta!");
    confirm("Essa é uma mensagem p/ confirmar!");
    prompt("Esse é um prompt!", "Viu só?");
}

function tiposVariaveis() {
    var var1 = "Var declara uma variável c/ escopo de função, ou global se fora de função!";
    let var2 = "Let declara uma variável c/ escopo de bloco, assim como const!";
    const var3 = "Const declara uma variável com valor imutável, seu valor deve ser posto junto da declaração!";

    console.log(var1);
    console.log(var2);
    console.log(var3);

    var1 = "O içamento de var é completo! Ela existe e pode ser usada em qualquer trecho do código, mas só ganha seu valor onde foi declarada!";
    var2 = "Por outro lado, const e let possuem içamento incompleto! Elas existem, mas só podem ser usadas DEPOIS da declaração!";

    console.log(var1);
    console.log(var2);
}

function Functions() {
    console.log("Função é um subprograma, um conjunto de instruções que são feitas dado um conjunto de parâmetros, podendo ou não retornar algum valor!");
    console.log("Uma função que não retorna nada pode ser chamada de Procedimento (Procedure)!");

    function exemplo() {
        console.log("Há essa forma de declarar uma função!");
    }
    var exemplo2 = function() {
        console.log("E essa aqui também, além de funções poderem ser declaradas uma dentro da outra! Cuidado com o escopo!");
    }

    exemplo;
    exemplo2;
}

function Arrays() {
    console.log("vetor.length = Retorna o tamanho do Array.\nvalor in vetor = Retorna os índices.\nvalor of vetor = Retorna os elementos.");

    vetor = [1, 2, 3, 6, 7, 8, 11, 12, 13, 15];

    console.log("");
    console.log(vetor);
    console.log("vetor.length =", vetor.length); //10
    console.log("");

    console.log("Valor in Vetor... ");
    for (valor in vetor) {
        console.log(valor); //0, 1, 2, 3, 4, 5, 6, 7, 8, 9
    }
    console.log("");

    console.log("Valor of Vetor... ");
    for (valor of vetor) {
        console.log(valor); //1, 2, 3, 6, 7, 8, 11, 12, 13, 15
    }
    console.log("");

    console.log("Lista de Funções:\nvetor")
    console.log(".push() = Adiciona no final do vetor, retorna veto r.length\n.unshift() = Adiciona no começo do vetor, retorna vetor.length\n.pop() = Remove do fim do vetor, retorna elemento removido\n.shift() = Remove do início do vetor, retorna elemento removido.");
    console.log("");

    vetor.push(18);
    console.log(".push(18) =", vetor);
    vetor.pop()
    console.log(".pop() =", vetor);
    vetor.unshift(0);
    console.log(".unshift(0) =", vetor);
    vetor.shift();
    console.log(".shift() =", vetor);

    console.log("");
    console.log("Pra evitar a atribuição por referência, copiamos uma array na outra usando o vetor.splice(0)!\nvetor.splice(indiceInicial, quantosTirar) => Retorna os elementos removidos.");

    vetor2 = vetor.splice(0);
    console.log(vetor2);
    let retorno = vetor2.splice(3, 5)
    console.log(vetor2, retorno);
    console.log("");

    console.log("Lista de Funções:\nvetor")
    console.log(".split()\n.join()\n.reverse()\n.sort() [UNICODE]\n.indexOf(valor)\n.lastIndexOf(valor)\n.includes(valor)");

    let msg = "exemplificando o split e sua função!";
    console.log(msg);
    msg_alter = msg.split(" ");
    msg_alter[2] = "join";
    console.log(msg_alter);
    console.log("");

    console.log("Agora join!");
    console.log(msg_alter.join("-"));
    console.log("");

    console.log("Agora o sort!");
    console.log(msg_alter.sort());
    console.log("");

    console.log("Agora as outras...");
    console.log(msg_alter.indexOf("função!"));
    console.log(msg_alter.includes("join"));
}

function MapFilterReduce() {
    console.log("map(function(valor [, índice[, array]]))");
    console.log("Map é uma função que modifica lista e retorna uma de mesmo tamanho!\nSua função é traduzir/mapear todos os elementos de um vetor em outro!");
    console.log("Ele percorre da esquerda pra direita, aplicando a função do parâmetro pra cada elemento, o resultado é um vetor c/ o retorno de cada invocação da função!")
    console.log("");
    
    console.log("Exemplo de Map...");
    function f1(inp) {
        return inp * (9 / 5) + 32;
        }
    let graus = [-10, 0, 10, 20, 30, 40, 50, 60];
    let fahrenheit = graus.map(f1);
    console.log(fahrenheit);
}


function menu() {
    let escolha = prompt("Qual operação?\n1. Conversores\n2. Tipos de Mensagem\n3. Tipos de variáveis\n4. Functions\n5. Arrays\n6. Map, Filter, Reduce\n7.");
    switch (escolha) {
        case "1":
            converter();
            break;
        case "2":
            tiposDeMensagem();
            break;
        case "3":
            tiposVariaveis();
            break;
        case "4":
            Functions();
            break;
        case "5":
            Arrays();
            break;
        case "6":
            MapFilterReduce();
            break;
        default:
            break;
    }
}

darDataConcatenada();
menu();