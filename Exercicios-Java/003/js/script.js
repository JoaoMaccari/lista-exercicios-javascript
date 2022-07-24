function soma() {
    //extraindo elementos html
var numero1 = document.getElementById('n1');
var numero2 = document.getElementById('n2');
var txt = document.getElementById('res')


//passando o valor da tag pra uma variavel
var n1 = Number(numero1.value); 
var n2 = Number(numero2.value);

//processando dados
var soma = n1 + n2;

//saida
    txt.textContent = soma;
    }
