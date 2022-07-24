function metragem() {
    var num = document.getElementById('dist');
    var distancia = Number(num.value);

    var cm = distancia * 100;
    var mm = distancia * 1000;

    var res = document.getElementById('res').innerHTML = `A mediada de ${distancia.toFixed(1)} corresponde a ${cm} centímetros e ${mm.toFixed(1)} milímetros.`; 
}