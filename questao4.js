function deixarMaiusculaPrimeiraLetra() {
   // Recebe o texto digitado pelo usuario
    var input = document.getElementById("inputText").value;

    // Teste para caracteres inválidos
    if (!validacaoDoInput(input)) {
        document.getElementById("output").textContent = "Erro: A string contém caracteres inválidos.";
        return;
    }

    // Tornar maiuscula a primeira letra de todas as frases
    var result = deixarMaiusculaPrimeiraLetraOfSentences(input);

    // Exibe o resultado na página HTML
    document.getElementById("output").textContent = result;
}

function deixarMaiusculaPrimeiraLetraOfSentences(str) {
    var frases = str.split(/(?<=[.!?])\s*/);
    var result = ' ';

    for (var i = 0; i < frases.length; i++) {
        var frase = frases[i];
        if (frase.length > 0) {
            var primeiraLetra = frase.charAt(0).toUpperCase();
            var fraseMaiuscula = primeiraLetra + frase.slice(1);
            result += fraseMaiuscula;
        }
    }

    return result;
}

function validacaoDoInput(input) {
    // Verifica caracteres inválidos
    var regex = /^[a-zA-Z\s.,!?']+$/;
    return regex.test(input);
}