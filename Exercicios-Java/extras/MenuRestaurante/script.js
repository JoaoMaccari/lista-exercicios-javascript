const vet =[]
let quantidadeItens  = 0
var vetQtItens = []

//funcao que adiciona itens no carrinho e soma a quantidade de itens pedidos
function addCart () {
    
   let select = document.getElementById('sabores');
    let optionValue = select.options[select.selectedIndex];
    let opcao = optionValue.value;

    vet.push(opcao);
    quantidadeItens = vet.length


    
    
    console.log(quantidadeItens)
    console.log(vet)

    
    
}
    
   
    
   let soma = 0;
   var preco
//função que soma os valores 
function somaValores () {
    //referente ao preço
    let select = document.getElementById('sabores');
    let optionValue = select.options[select.selectedIndex];
    let opcao = optionValue.value;
    


    var msgQtd = document.getElementsByClassName('msgQtd')[0];
    var msgQtdSabor = document.getElementsByClassName("msgQtdSabor")[0]
    var totfrango = []
    var totcalabresa=0

        if (vet.indexOf("frango") > -1 && opcao == "frango") {
         preco = 30.00;
         //                                                     TEM QUE ITERAR O ARREY
            // for (let i of vet.values ) {
            //     totfrango[i] += opcao
            // }
        }
        if (vet.indexOf("calabresa") > -1) {
             preco = 34.00;
             totcalabresa ++
        }
        if (vet.indexOf("strogonoff")> -1) {
            preco = 28.00;
        }
        if (vet.indexOf("chocolate")> -1) {
            preco = 29.00
        }
       
       


        for (let i = 0; i < vet.length;i++) {
            soma += preco;
        }
        
        msgQtd.innerHTML = `<p>Você realizou ${vet.length} pedidos<p>` 
        if (totfrango>= 1 ) {
             msgQtdSabor.innerHTML = `${totcalabresa.length}: Pizza sabor frango `
        }
                         

   console.log(preco)
   console.log(soma)
   console.log(totfrango)
   console.log(opcao)
  
     
}

   
 
