function inverterFrase() {
    // Recebe o texto digitado pelo usuario
    var input = document.getElementById("insiraTexto").value;

    // Teste para caracteres inválidos
    if (!validacaoInput(input)) {
        document.getElementById("saidaTexto").textContent = "Erro: A frase contém caracteres inválidos.";
        return;
    }

    // Reverte a ordem das palavras
    var fraseInvertida = palavraInvertida(input);

    // Exibe o resultado
    document.getElementById("saidaTexto").textContent = fraseInvertida;
}

function palavraInvertida(frase) {
    // Divide a frase em  palavras
    var palavra = frase.split(" ");

    // Inverte a ordem
    var palavraInversa = palavra.reverse();

    // Junta as palavras
    var fraseInvertida = palavraInversa.join(" ");

    // Retorna a frase invertida
    return fraseInvertida;
}

function validacaoInput(input) {
    // Verifica caracteres inválidos
    var regex = /^[a-zA-Z\s.,!?']+$/;
    return regex.test(input);
}