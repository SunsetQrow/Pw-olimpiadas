function validarFormulario() {
    var nome = document.forms["contato"]["nome"].value;
    var email = document.forms["contato"]["email"].value;
    var avaliacao = document.forms["contato"]["avaliacao"].value;
    var comentario = document.forms["contato"]["comentario"].value;

    if (nome === "") {
        alert("Por favor, preencha o campo Nome.");
        document.forms["contato"]["nome"].focus();
        return false;
    }
    if (email === "") {
        alert("Por favor, preencha o campo Email.");
        document.forms["contato"]["email"].focus();
        return false;
    }
    if (avaliacao === "") {
        alert("Por favor, avalie o site.");
        document.forms["contato"]["avaliacao"].focus();
        return false;
    }
    if (comentario === "") {
        alert("Por favor, deixe seu comentário.");
        document.forms["contato"]["comentario"].focus();
        return false;
    }

    alert("Formulário enviado com sucesso!");
    document.forms["contato"].reset(); // Reseta os campos
    return true;
}
