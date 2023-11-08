const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const passwordConfirmation = document.getElementById("password-confirmation");


form.addEventListener("submit", (event) => { 
    event.preventDefault();

    checkForm();

    alert("Cadastrado com sucesso !!")

})


email.addEventListener("blur", () => {
    checkInputEmail();
})
username.addEventListener("blur", () => {
    checkInputUsername();
})
password.addEventListener("blur", () => {
    checkInputPassword();
})
passwordConfirmation.addEventListener("blur", () => {
    checkInputPasswordConfirmation();
})





function checkInputUsername(){
    const usernameValue = username.value;

    if (usernameValue === ""){
        errorInput(username,"Preencha um username!")
    }else{
        const formItem = username.parentElement;
        formItem.className = "form-content"
    }
}


function checkInputEmail(){
    const emailValue = email.value;

    if (emailValue === ""){
        errorInput(email,"E-mail Obrigatório!!")
    }else{
        const formItem = email.parentElement;
        formItem.className = "form-content"
    }
}


function checkInputPassword(){
    const passwordValue = password.value;

    if (passwordValue === ""){
        errorInput(password,"A senha é Obrigatório!!")
    }else if(passwordValue.length < 8){
        errorInput(password,"A senha precisa ter no mínio 8 caracteres.")    
    }else{
        const formItem = password.parentElement;
        formItem.className = "form-content"
    }
}

function checkInputPasswordConfirmation(){

    const confirmationpasswordValue = passwordConfirmation.value;
    const passwordValue = password.value;

    if (confirmationpasswordValue === ""){
        errorInput(passwordConfirmation, "A confirmação da senha é obrigatória;")
    }else if(confirmationpasswordValue !== passwordValue){
        errorInput(passwordConfirmation, "As senhas não são iguais.")
    }else{
        const formItem = passwordConfirmation.parentElement;
        formItem.className = "form-content"
    }

}

function checkForm(){

    checkInputUsername();
    checkInputEmail();
    checkInputPassword();
    checkInputPasswordConfirmation();

    const formItems = form.querySelectorAll(".form-content")

    const isValid = [...formItems].every((item) => {
        return item.className === "form-content"

    });

    if(isValid){
        alert("Cadastrado com sucesso !!")

    }

}



function errorInput(input, message){
    const formItem = input.parentElement;
    const textMessage = formItem.querySelector("a")

    textMessage.innerText = message;
    formItem.className = "form-content error"

}