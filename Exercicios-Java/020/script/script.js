//trazendo os elementos html para o Js
var mensagem = document.getElementById('mensagem');
var btn = document.getElementById('btn');
var nome =  document.getElementById('nome');
var paragrafo = document.getElementById('paragrafo');

//minha lista de nomes
let ListaNomes = []


//função que vai adicionar nomes dentro do vetor
function adicionar() {
    ListaNomes.push(nome.value);
    //apaga o input que recebe os nomes
    nome.value = ' '
    
    
}

//funcao de shuffler que é usada como parametro da função sort() do vetor
function ordenarArrey (a, b) {
        //quando uso strings tenho que usar o localeCompare
    return a.localeCompare(b)
    //caso fose ordem inversa trocaria o b de lugar com o a
}


function sortear() {
    //meu sort recebe a função que faz a ordenação como parametros, 
    //dentro de shufle ela vai embaralhar os valores e retornar esses valores para a variavel sorted
   var sorted = ListaNomes.sort(ordenarArrey)
    //sorted está recebendo todos os valores ordenados 
    
   //uso o sorted para exibir os elementos
    mensagem.innerHTML = sorted
} 
btn.addEventListener('click', sortear)