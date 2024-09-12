let sliderElement = document.querySelector("#slider");
let buttonElement = document.querySelector("#button");
let sizePassword = document.querySelector("#valor");
let passwordElement = document.querySelector("#password");
let containerPassword = document.querySelector("#container-password");

let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!674323@#$%^&*_+?";
let novaSenha = "";

sizePassword.innerHTML = sliderElement.value;

sliderElement.oninput = function () {
    sizePassword.innerHTML = this.value;
    generatePassword();
}

buttonElement.onclick = generatePassword;

function generatePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }

    novaSenha = pass;
    containerPassword.classList.remove("hide");
    passwordElement.innerHTML = pass;
}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha).then(() => {
        alert("Senha copiada com sucesso");
    }).catch(err => {
        alert("Falha ao copiar a senha");
    });
}

    

