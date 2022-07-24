var btn = document.getElementById('btn');
        var res = document.getElementById('res');
        function quebrar() {
            var num = Number(document.getElementById('valor').value)

            var valorAbsoluto = Math.trunc(num);

            res.innerHTML = `O valor digitado foi ${num.toFixed(3).replace('.', ',')} e a sua porção inteira foi ${valorAbsoluto}`
        }
        btn.addEventListener('click', quebrar);