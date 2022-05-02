//exercicio ultima aula de js

//crio função para criar aluno. 
var criarAluno = function(nome, n1, n2) {
    // variavel aluno recebe um objeto
         var aluno = {
                    nome: nome,
                    nota1 : n1,
                    nota2: n2,
                    media : function () {
                        return (this.nota1 + this.nota2) / 2;
                    }
  
                }
        return aluno;
}


// arrey com objetos. Cada index tem a chamada da funcao que cria um objeto a partir dos parametros inseridos
//
var turma = [ 
    // aqui ao invéz do objeto, eu tenho minha função que cria o aluno a partir de parametros inseridos
    criarAluno("igor", 9 , 8)

]

// //variavel recebendo a função que contem o retorno com o objeto
 var aluno = turma[0];
// a variavel aluno agora contem um objeto com um novo aluno e com uma função que calcula sua média

for (var aluno of turma) {
    console.log("nome: " + aluno.nome + "\n" + "nota1: " + aluno.nota1 + "\n" +"nota2: " + aluno.nota2);
    console.log("A média do aluno é: " + aluno.media());
}

