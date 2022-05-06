const vet =[]
let quantidadeItens  = 0
const vetQtItens = []

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
    var totfrango = [];
    var totcalabresa = [];

        if (vet.indexOf("frango") > -1 && opcao == "frango") {
            preco = 30.00;
            for (let i = 0; i< vet.length; i++ ) {
                totfrango.push(opcao);
            }
        }

        if (vet.indexOf("calabresa") > -1 && opcao == "calabresa") {
             preco = 34.00;
             for (let i = 0; i< vet.length; i++) {
                totcalabresa.push(opcao)
                console.log(totcalabresa.length)
             }
             
        }
        if (vet.indexOf("strogonoff")> -1) {
            preco = 28.00;
        }
        if (vet.indexOf("chocolate")> -1) {
            preco = 29.00
        }
       
        //soma o preço total
        for (let i = 0; i < vet.length;i++) {
            soma += preco;
        }
        
        //mostra quanto pedidos ao todo foram realizados
        msgQtd.innerHTML = `<p>Você realizou ${vet.length} pedidos<p>` 

        //mostra quantos de cada sabor foi pedido
       
        for (let i = 0; i < vet.length; i++) {

            if (totfrango.length >= 1 ) {
                 msgQtdSabor.innerHTML= `${totfrango.length}: Pizza sabor frango \n`
                    if (totcalabresa.length >= 1) {
                    msgQtdSabor.innerHTML += `${totcalabresa.length}: Pizza sabor calabresa\n`
            }
            } 

            

        }
        
        
        
                         

   console.log(preco)
   console.log(soma)
   console.log(totfrango)
   console.log(totcalabresa)
   
  
     
}

   
 
