document.getElementById("validacaoLogin").addEventListener("submit", function (event) {
    event.preventDefault();
    var emailInput = document.getElementById("email");
    var email = emailInput.value;
    var divEmail = emailInput.closest("form");
    var emailError = document.getElementById("emailError");
    var validacaoSenha = document.getElementById("validacaoSenha");

    if (email) {
        emailError.textContent = "";
        divEmail.style.display = "none";
        validacaoSenha.style.display = "block";
    } else {
        emailError.textContent = "E-mail inválido";
    }
});

document.getElementById("validacaoSenha").addEventListener("submit", function (event) {
    event.preventDefault();
    window.location.href = "index.html"
})