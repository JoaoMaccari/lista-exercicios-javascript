
let nome = document.getElementById("name");
let nota1 = document.getElementById("n1");
let nota2 = document.getElementById("n2");
let falta = document.getElementById("faltas");

function capturaSelect() {

    let select = document.getElementById("materias");
    let opcao1 = select.options[select.selectedIndex].text

    
}

function calculaMedia() {

    
    
    let name = String(nome.value);
    let n1 = Number(nota1.value);
    let n2 = Number(nota2.value);
    
    nome.value = ""
    nota1.value = ""
    nota2.value = ""
    
    let media = (n1 + n2) / 2;

    let divRes = document.getElementsByClassName("resultado")[0];
    let p = document.createElement("p");

    let mediaMior = document.createTextNode(`O aluno ${name} foi aprovado com 
    média  ${media}`);
    
    let recuperação = document.createTextNode(`O aluno ${name} ficou em recuperação com a média ${media}`);
    let reprovado = document.createTextNode(`O aluno ${name} está reprovado com média ${media}`)
    divRes.appendChild(p)
    
    console.log(media);
    if ( media >=7) {
        p.appendChild(mediaMior)
     
    }else if(media >=5 ) {
        p.appendChild(recuperação)
    }else {
        p.appendChild(reprovado)
    }
    
    
//    limpar(conteudo)
}

// function limpar(cont) {
//     console.log(cont)
//     cont = cont + 0
// }