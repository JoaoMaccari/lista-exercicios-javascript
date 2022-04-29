const vet =[]
let quantidadeItens  = 0

function addCart () {

    
    let select = document.getElementById('sabores');
    let optionValue = select.options[select.selectedIndex];
    let opcao = optionValue.value;

   
    
    vet.push(opcao);
    
  

    for (let i = 0; i<vet.length;i++) {
        quantidadeItens ++;
        
    }
    
    
    
}

//já consegui pegar a quantidade e buscar o preço do produto
function somaValores () {
    
    var preco = 0;
    
    
    
        if (vet.indexOf("frango") > -1) {
            preco = preco+ 30.00; 
           
        }
        
    
    console.log(quantidadeItens)
    console.log(vet) 
    console.log(preco);  

    
}

   
 
