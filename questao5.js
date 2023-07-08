function checarSeAnagramaPalindromo() {
   // Recebe o texto digitado pelo usuario
    var input = document.getElementById("inputText").value;

    // Teste para caracteres inválidos
    if (!validarInput(input)) {
        document.getElementById("output").textContent = "Erro: A string contém caracteres inválidos.";
        return;
    }

    // Chama a função para verificar se a string é um anagrama de um palíndromo
    var result = AnagramaÉPalindromo(input);

    // Exibe o resultado na página HTML
    document.getElementById("output").textContent = result;
}

function AnagramaÉPalindromo(str) {
    // Remove espaços em branco e converte a string para minúsculas
    var converteStr = str.replace(/\s/g, '').toLowerCase();
    var contemStrMinuscula = {};

    // Conta a frequência de cada caractere
    for (var i = 0; i < converteStr.length; i++) {
        var char = converteStr[i];
        contemStrMinuscula[char] = (contemStrMinuscula[char] || 0) + 1;
    }

    var contemCaracterImpar = 0;

    // Verifica se há mais de um caractere com contagem ímpar
    for (var key in contemStrMinuscula) {
        if (contemStrMinuscula.hasOwnProperty(key) && contemStrMinuscula[key] % 2 !== 0) {
            contemCaracterImpar++;
        }
    }

    // Retorna true se houver no máximo um caractere com contagem ímpar (anagrama de um palíndromo)
    return contemCaracterImpar <= 1;
}

function validarInput(input) {
    // Verifica caracteres inválidos
    var regex = /^[a-zA-Z\s.,!?']+$/;
    return regex.test(input);
}