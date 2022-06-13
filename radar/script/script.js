
document.getElementById("input_velo").addEventListener('change', myFunc);

function myFunc() {
    let msg = document.getElementById("msg");
    let velo = document.getElementById("input_velo");

    if (velo.value <= 80) {
        msg.style.backgroundColor = "green"
        
        msg.innerHTML = "<p>Limite de velocidade dentro do permitido.<br> Dirija com segurança</p>"
        velo.value = " ";
        velo.focus();
    }else{
        msg.style.backgroundColor = "lightcoral"
        let diferenca = velo.value - 80;
        let multa = diferenca * 7;
        msg.innerHTML = `<p>MULTADO! Você excedeu o limite permitido que é de 80km/h.</p> 
        <p>Você deve pagar uma multa no valor de R$${multa.toFixed(2)}!</p>`
        velo.value = " ";
        velo.focus();
    }
}