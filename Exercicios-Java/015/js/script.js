 
        var res = document.getElementById('res');
        var btn = document.getElementById('btn')

       

        function calcular() {

            

            var kmRodados = Number(document.getElementById('km').value);
            var diasAlugado = Number(document.getElementById('dias').value);

            var km = Number(kmRodados * 0.15);
            var dias = Number(diasAlugado * 60);
            
            var valorFinal = Number((km + dias));

            res.innerHTML = `O valor do aluguel do carro foi <mark>R$ ${valorFinal.toFixed(2).replace('.', ',')}</mark>` 
            
        }
        btn.addEventListener('click', calcular)