var p = document.getElementById('res');
var btn = document.getElementById('btn');


function aumento() {
    var salarioAtual = Number(document.getElementById('salarioAtual').value)
    
    var bonusAumento = Number(salarioAtual * 15 / 100);
    var novoSalario = Number((bonusAumento + salarioAtual));


    p.innerHTML = `<p>Um funcionário que ganhava R$${salarioAtual.toFixed(2).replace('.', ',')}, com 15% de aumento passa a ganhar R$${novoSalario}<p>`

}
btn.addEventListener('click', aumento);