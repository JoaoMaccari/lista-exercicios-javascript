let listaNomes = []
let nome = document.getElementById('nome');


let btn1 = document.getElementById("btn1")
btn1.addEventListener('click', adicionar)
  
let btn = document.getElementById("btn")
btn.addEventListener("click", sorteia)

function adicionar() {
    
    listaNomes.push(nome.value);
    nome.value = ' '

}


function sorteia() {
    var mensagem = document.getElementById('mensagem');
                                                    //neste método estou aleatorizando apenas um item da lista
        mensagem.innerHTML = `O nome sorteado foi ${listaNomes[Math.floor(Math.random() * listaNomes.length)]}`
        // para sortear um elemento de um vetor eu devo multiplicar pelo numero total de indices
        
}      