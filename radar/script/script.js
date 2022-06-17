
document.getElementById("input_velo").addEventListener('change', myFunc);
var d = new Date;
var horas = d.getHours();
console.log(horas);

if (horas > 6 && horas < 18) {

}

function myFunc() {
    let msg = document.getElementById("msg");
    let velo = document.getElementById("input_velo");

    if (velo.value <= 80) {
        msg.style.backgroundColor = "#689b1b"
        msg.style.borderRadius = "15px"
        msg.style.left = "95px";
        msg.style.top = "50px"

        msg.innerHTML = "<p>Limite de velocidade dentro do permitido.<br> Dirija com segurança</p>"
        velo.value = " ";
        velo.focus();
    }else{
        msg.style.backgroundColor = "lightcoral"
        msg.style.borderRadius = "15px"
        msg.style.top = "20px"

        let diferenca = velo.value - 80;
        let multa = diferenca * 7;
        msg.innerHTML = `<p>MULTADO! Você excedeu o limite permitido que é de 80km/h.</p> 
        <p>Você deve pagar uma multa no valor de R$${multa.toFixed(2)}!</p>`
        velo.value = " ";
        velo.focus();
    }
}