function btnClick() {

    var num = document.getElementById('entrada');
    var n1 = Number(num.value);
    var res = document.getElementById('res');

    var antes = n1 - 1;
    var suce = n1 + 1;

    res.textContent = `Analisando o valor ${n1}, seu antecessor é ${antes} e o sucessor é ${suce}`
}
