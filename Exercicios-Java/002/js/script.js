function dizNome(){
    var resp = document.getElementById('resp');
    var msg = document.getElementById('msg');
    var msg2 = document.getElementById('outra-msg');
    var nome = String((resp.value));
    msg.innerHTML = nome;
    msg2.innerHTML = `Seja bem vindo ${nome.toUpperCase()}!`

    
}