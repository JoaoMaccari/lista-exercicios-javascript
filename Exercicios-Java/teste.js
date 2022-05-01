
 function calculaAtkArqeuiro(blvl, str, dex, luk) {
    var statusAtk  = ((blvl/4) + (str/5) + dex + (luk/3));
        return statusAtk;
}

var personagem1 = { classe: "Arqueiro",
                    name: "Enzo",
                    baseLvl: 1,
                    forca: 9,
                    dextreza: 9,
                    agilidade: 9,
                    sorte: 9,
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
    
    calculaAtkEspadachin (blvl, str, dex, luk) {
        return  ((blvl/4) + str + (dex/5) + (luk/3));
    }
};

console.log(personagem1.statusAtk(personagem1.baseLvl,personagem1.forca,personagem1.dextreza,personagem1.sorte));
console.log(personagem1)

console.log(personagem2.statusAtk(personagem2.baseLvl,personagem2.forca,personagem2.dextreza,personagem2.sorte))
console.log(personagem2)

console.log(personagem3.calculaAtkEspadachin(personagem3.baseLvl, personagem3.forca, personagem3.dextreza, personagem3.sorte));
console.log(personagem3);

