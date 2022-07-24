function multiplicar () {

        
    var numero = document.getElementById('num');
    var num = Number(numero.value);

    var res = document.getElementById('res');

    for (var i = 1; i <=10; i++) {
        var result = num * i;
        
        res.innerHTML += `${num} X ${i} = ${result} <br>` 
    }

    }   
