
    

   
 
function attSelect () {
    var select = document.getElementById('sabores');
   let optionValue = select.options[select.selectedIndex];

   let opcao = String(optionValue.value);
    console.log(opcao)
   var preco = 0
  
   

   switch (opcao) {
    case "frango":
        preco   += 30.00;
        break;
    case "calabresa":
        preco  += 34.00;
        break;
   }
   console.log(preco);
}