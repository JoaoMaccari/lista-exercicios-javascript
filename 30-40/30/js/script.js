let btn = document.querySelector("#btn")

btn.addEventListener("click", function(){
    let input = document.querySelector("#numero").value
    let numero =Number(input)

    let resultado = parOuImpar(numero)
    console.log(resultado);
    
    console.log(numero);
    console.log(typeof  numero)

    
})

function parOuImpar(n){
    let par = "O número é par"
    let impar = "O número é impar"
    if (n%2 == 0) {
        return par
    } else {
        return impar
    }
}