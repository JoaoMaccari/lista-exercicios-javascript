function calculaMedia() {
    var n1 = document.getElementById('nota1');
    var nota1 = Number(n1.value);

    var n2 = document.getElementById('nota2');
    var nota2 =  Number(n2.value);

    var media = (nota1 + nota2) / 2;

    document.getElementById('res').innerHTML = `A média do aluno é ${media.toFixed(1)}`
}