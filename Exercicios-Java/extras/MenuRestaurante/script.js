const vet =[]
function addCart () {

    
    var select = document.getElementById('sabores');
   let optionValue = select.options[select.selectedIndex];
   console.log(optionValue)

   let opcao = optionValue.value;
   console.log(opcao)
  
    vet.push(opcao)
    console.log(vet)
}
    

   
 
