function encontrandoPalindromaLonga() {
   // Recebe o texto digitado pelo usuario
    var input = document.getElementById("inputText").value;

    // Teste para caracteres inválidos
    if (!validacaoDoInput(input)) {
        document.getElementById("output").textContent = "Erro: A string contém caracteres inválidos.";
        return;
    }

    // Verificar a substring palindrômica mais longa
    var result = encontrandoPalindromaLongaSubstring(input);

    // Exibe o resultado na página HTML
    document.getElementById("output").textContent = result;
}

function encontrandoPalindromaLongaSubstring(str) {
    var palindromaMaisLonga = '';

    for (var i = 0; i < str.length; i++) {
        for (var j = i + 1; j <= str.length; j++) {
            var substring = str.slice(i, j);
            if (sendoPalindroma(substring) && substring.length > palindromaMaisLonga.length) {
                palindromaMaisLonga = substring;
            }
        }
    }

    return palindromaMaisLonga;
}

function sendoPalindroma(str) {
    var reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

function validacaoDoInput(input) {
    // Verifica caracteres inválidos
    var regex = /^[a-zA-Z\s.,!?']+$/;
    return regex.test(input);
}