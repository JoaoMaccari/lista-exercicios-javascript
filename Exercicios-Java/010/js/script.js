function conversao() {
    var reais = document.getElementById('qtdade');
    var qtdade = parseFloat(reais.value);
    reais.value = ""
    var valorConvertido = qtdade / 5.0
    
    document.getElementById('res').innerHTML = `Com ${qtdade.toFixed(2)} você consegue comprar US$${valorConvertido.toFixed(2)}`
}