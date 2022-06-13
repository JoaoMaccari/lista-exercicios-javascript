
document.getElementById("input_velo").addEventListener('change', myFunc);

function myFunc() {
    let msg = document.getElementById("msg");
    let velo = document.getElementById("input_velo");

    if (velo.value <= 80) {
        msg.innerHTML = "boa viagem"
    }else{
        msg.innerHTML = "multado"
    }
}