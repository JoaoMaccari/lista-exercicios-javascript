function calcular() {
    let largura = document.getElementById('largura');
    let l = Number(largura.value);
    let altura = document.getElementById('altura');
    let a = Number(altura.value);
    
    largura.value = ""
    altura.value = ""
    largura .focus()

    var area = l * a;
    var ltinta = area / 2;

    var res = document.getElementById('res').innerHTML = ` Sua parede tem a dimensão de ${l}x${a} e sua area é de ${area}\n
    Para pintar essa parede, voce precisará de ${ltinta}l de tinta`

}
