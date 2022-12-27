const btnEnviar = document.getElementById("btnEnviar");
const usuario = document.getElementById("usuario");
const nombre = document.getElementById("nombre");
const pass1 = document.getElementById("pass1");
const pass2 = document.getElementById("pass2");
const resultado1 = document.getElementById("resultado1");
const resultado2 = document.getElementById("resultado2");
const resultado4 = document.getElementById("resultado4");

function validar (){
    let user = usuario.value;
    let expRegUser = /^[a-zA-Z0-9_-]{4,16}$/
    resultado1.innerText = "";

    if(user == "" || !expRegUser.test(user)){
        resultado1.innerText = "Usuario invalido"
    }else{
        resultado1.innerText = "Usuario valido"
    }

    let name = nombre.value;
    let expRegName = /^[A-ZÑa-zñáéíóúÁÉÍÓÚ'° ]+$/;
    resultado2.innerText = "";

    if(name == "" || !expRegName.test(name)){
        resultado2.innerText = "Usuario invalido"
    }else{
        resultado2.innerText = "Usuario valido"
    }

    let contra1 = pass1.value;
    let contra2 = pass2.value;

    if(contra1 !== contra2){
        resultado4.innerText = "Las contraseñas no coinciden"
    }else{
        resultado4.innerText = "Las contraseñas coinciden"
    }

}

btnEnviar.onclick = () => validar();