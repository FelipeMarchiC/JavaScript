function addAluno(botao, nome) {
    const novoAluno = document.createElement("tr");
    let dados;

    dados = document.createElement("td");
    dados.innerText = nome;
    novoAluno.append(dados);

    for (let i = 1; i < 4; i++) {
        dados = document.createElement("td");
        dados.innerText = geraNota();
        novoAluno.append(dados);
    }

    let n1 = parseFloat(novoAluno.querySelector("td:nth-child(2)").innerText);
    let n2 = parseFloat(novoAluno.querySelector("td:nth-child(3)").innerText);
    let n3 = parseFloat(novoAluno.querySelector("td:nth-child(4)").innerText);

    dados = document.createElement("td");
    if (((n1 + n2 + n3) / 3).toFixed(2) == 10.00) {
        dados.innerText = 10;
    } else {
        dados.innerText = ((n1 + n2 + n3) / 3).toFixed(2);
    }
    novoAluno.append(dados);

    let media = parseFloat(novoAluno.querySelector("td:nth-child(5)").innerText);

    dados = document.createElement("td");
    if (media >= 6) {
        dados.innerText = "Aprovado";
    } else if (media >= 3) {
        dados.innerText = "Recuperação";
    } else {
        dados.innerText = "Reprovado";
    }
    novoAluno.append(dados);

    dados = document.createElement("td");
    let botaoMaisNota = document.createElement("button");
    botaoMaisNota.innerText = "Aumentar nota";
    botaoMaisNota.classList.add("button", "is-primary", "plus");
    botaoMaisNota.addEventListener("click", function(event) {menu(botaoMaisNota, event)});
    dados.append(botaoMaisNota);

    let botaoMenosNota = document.createElement("button");
    botaoMenosNota.innerText = "Diminuir nota";
    botaoMenosNota.classList.add("button", "is-info", "minus");
    botaoMenosNota.addEventListener("click", function(event) {menu(botaoMenosNota, event)});
    dados.append(botaoMenosNota);

    let botaoRemove = document.createElement("button");
    botaoRemove.innerText = "Remover";
    botaoRemove.classList.add("button", "is-warning", "rem");
    botaoRemove.addEventListener("click", function(event) {menu(botaoRemove, event)});
    dados.append(botaoRemove);

    novoAluno.append(dados);

    botao.target.parentElement.nextElementSibling.children[1].append(novoAluno);
    inputAdd.value = '';
    alunoAdd.disabled = true;
}

function rmvPiorAluno(botao) {
    let alunos = botao.target.parentElement.nextElementSibling.children[1].children;

    if (alunos.length != 0) {
        let piorMedia = alunos[0].children[4].innerText, piorAluno = 0;

        for (let i = 1; i < alunos.length; i++) {
            if (parseFloat(alunos[i].children[4].innerText)  < piorMedia) {
                piorAluno = i;
                piorMedia = alunos[i].children[4].innerText;
            }
        }
        alunos[piorAluno].remove();
    }
}

function somar(botao) {
    let notas = botao.target.parentElement.parentElement;
    let n1 = parseFloat(notas.children[1].textContent), 
    n2 = parseFloat(notas.children[2].textContent),
    n3 = parseFloat(notas.children[3].textContent);

    if (notas.children[1].innerText != "10") {
        if (n1 + 0.5 > 10) {
            n1 = 10;
        } else {
            n1 = n1 + 0.5;
        }
        notas.children[1].innerText = n1;
    }
    if (notas.children[2].innerText != "10") {
        if (n2 + 0.5 > 10) {
            n2 = 10;
        } else {
            n2 = n2 + 0.5;
        }
        notas.children[2].innerText = n2;
    }
    if (notas.children[3].innerText != "10") {
        if (n3 + 0.5 > 10) {
            n3 = 10;
        } else {
            n3 = n3 + 0.5;
        }
        notas.children[3].innerText = n3;
    }
    media(notas, n1, n2, n3);
}

function subtrair(botao) {
    let notas = botao.target.parentElement.parentElement;
    let n1 = parseFloat(notas.children[1].textContent), 
    n2 = parseFloat(notas.children[2].textContent),
    n3 = parseFloat(notas.children[3].textContent);

    if (notas.children[1].innerText != "0") {
        if (n1 - 0.5 < 0) {
            n1 = 0;
        } else {
            n1 = n1 - 0.5;
        }
        notas.children[1].innerText = n1;
    }
    if (notas.children[2].innerText != "0") {
        if (n2 - 0.5 < 0) {
            n2 = 0;
        } else {
            n2 = n2 - 0.5;
        }
        notas.children[2].innerText = n2;
    }
    if (notas.children[3].innerText != "0") {
        if (n3 - 0.5 < 0) {
            n3 = 0;
        } else {
            n3 = n3 - 0.5;
        }
        notas.children[3].innerText = n3;
    }
    media(notas, n1, n2, n3);
}

function remover(botao) {
    botao.target.parentElement.parentElement.remove();
}

function media(notas, n1, n2, n3) {
    let media = ((n1 + n2 + n3) / 3).toFixed(2);
    if (media == 10.00) {
        media = 10;
    };
    notas.children[4].innerText = media;
    estado(media, notas);
}

function estado(media, notas) {
    if (media >= 6) {
        notas.children[5].innerText = "Aprovado";
    } else if (media >= 3) {
        notas.children[5].innerText = "Recuperação";
    } else {
        notas.children[5].innerText = "Reprovado";
    }
}

function gerenciar() {
    if (inputAdd.value !== '') {
        alunoAdd.disabled = false;
    } else {
        alunoAdd.disabled = true;
    }
}

function menu(botao, event) {
    switch (botao.innerText) {
        case "Adicionar aluno":
            addAluno(event, inputAdd.value);
            break;

        case "Remover pior aluno":
            rmvPiorAluno(event);
            break;

        case "Aumentar nota":
            somar(event);
            break;

        case "Diminuir nota":
            subtrair(event);
            break;

        case "Remover":
            remover(event);
            break;
    }

}

const inputAdd = document.querySelector("input");
inputAdd.addEventListener("input", gerenciar);

const alunoAdd = inputAdd.parentElement.parentElement.nextElementSibling.children[0];
alunoAdd.disabled = true;

const botoes = document.querySelectorAll("button");

for (let botao of botoes) {
    botao.addEventListener("click", function(event) {
        menu(botao, event)
    });
}