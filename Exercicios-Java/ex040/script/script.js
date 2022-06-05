let materias = document.getElementById("materias");
let nome = document.getElementById("name");
let nota1 = document.getElementById("n1");
let nota2 = document.getElementById("n2");
let falta = document.getElementById("faltas");
var disciplina =" "




function getMat(chosen){
  
    console.log(disciplina);
    disciplina = chosen
  
}


function getMedia() {

   
   
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
    
   
    if ( media >=7) {
       return p.appendChild(mediaMior)
     
    }else if(media >=5 ) {
       return p.appendChild(recuperação)
    }else {
      return  p.appendChild(reprovado)
    }
    
    

}

