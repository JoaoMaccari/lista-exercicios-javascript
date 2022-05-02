//crio uma função que calcula o atk fora do objeto, pois assim, caso mude a formula da função e eu tiver mais de um objeto usando ela, vai mudar para todos os outros que recebem o retorno, sem que preciso modificar um por um

function calculaAtkArqeuiro() {
    var statusAtk  = ((this.baseLvl/4) + (this.forca/5) + this.dextreza + (this.sorte/3));
        return statusAtk;
}

var personagem1 = { classe: "Arqueiro",
                    name: "Enzo",
                    baseLvl: 3,
                    forca: 9,
                    dextreza: 9,
                    agilidade: 9,
                    sorte: 9,
// o meu statusAtak ao invés de receber um valor, recebe uma função que calcula o estatus dele
                    statusAtk: calculaAtkArqeuiro 
                                                                    
};

var personagem2 = { classe: "Arqueiro",
                    name: "Junio",
                    baseLvl: 3,
                    forca: 9,
                    dextreza: 9,
                    agilidade: 9,
                    sorte: 9,
                    statusAtk: calculaAtkArqeuiro 
                                                                    
};


var personagem3 = { classe: "Espadachin",
                    name: "Victor",
                    baseLvl: 1,
                    forca: 9,
                    dextreza: 9,
                    agilidade: 9,
                    sorte: 9,
                    statusAtk: 0,
    
                    
    calculaAtkEspadachin () {
        //usando o this eu não preciso passar nenhum parametro para a função, posso usar direto o nome da propriedade, pois agora o método dabe que eu me refiro as propriedades do objeto
        return  ((this.baseLvl/4) + this.forca + (this.dextreza/5) + (this.sorte/3));
    }
};

//não preciso passar os parametros pois a função está usando a chave this
console.log("statusAtk personagem 1: " + personagem1.statusAtk());
console.log(personagem1)

//nos arqueiros eu chamo a propriedade statusAtk ao invés de chamar a função, pois ele já que serve como função. |Passo os parametros pra ele, este método vai funcionar pra todos os arqueiros
console.log(personagem2.statusAtk(personagem2.baseLvl,personagem2.forca,personagem2.dextreza,personagem2.sorte))
console.log(personagem2)

//como o espadachim não tem um método atribuido ao statusAtk, eu tenho que chamar a função r passar os parametros
console.log(personagem3.calculaAtkEspadachin(personagem3.baseLvl, personagem3.forca, personagem3.dextreza, personagem3.sorte));
console.log(personagem3);

//PERGUNTAS AULA MÉTODOS
//No fim das contas usamos só o ultimo modelo?(funcao fora do escopo do objeto com o this?)
//como fazer aparecer o valor de status atak juntos com os outros atributos?