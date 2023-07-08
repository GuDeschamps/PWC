function removerDuplicadas() {
   // Recebe o texto digitado pelo usuario
    var input = document.getElementById("inputTexto").value;

    // Teste para caracteres inválidos
    if (!validarInput(input)) {
        document.getElementById("output").textContent = "Erro: A frase contém caracteres inválidos.";
        return;
    }

    // Chama a função para remover caracteres duplicados
    var result = removerDuplicadasFromString(input);

    // Exibe o resultado na página HTML
    document.getElementById("output").textContent = result;
}

function removerDuplicadasFromString(str) {
    var charSet = new Set();
    var result = '';

    for (var i = 0; i < str.length; i++) {
        var char = str[i];

        if (!charSet.has(char)) {
            charSet.add(char);
            result += char;
        }
    }

    return result;
}

function validarInput(input) {
    // Verifica caracteres inválidos
    var regex = /^[a-zA-Z\s.,!?']+$/;
    return regex.test(input);
}