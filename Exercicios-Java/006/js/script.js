function teste() {
    var num = document.getElementById('n1');
    var n1 = Number(num.value);
    var n2 = Number(num.value);
    var n3 = Number(num.value)

   var t1 =  document.getElementById('t1').innerHTML = `O dobro de ${n1} vale ${n1 = n1 * 2}`
   var t2 =  document.getElementById('t2').innerHTML = `O triplo de ${n2} vale ${n2 * 3}` 
    document.getElementById('t3').innerHTML = `A raiz quadrada de ${n3} vale ${Math.sqrt(n3)}`;
    
}