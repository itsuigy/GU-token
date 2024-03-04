function github() {
    window.open('https://github.com/itsuigy/GU-token');
}

var currentToken;

function generateToken() {
    currentToken = generateMD5Token();
    document.getElementById("tokenText").innerText = "Token generado: " + currentToken;
}

function generateMD5Token() {
    var token = "";
    var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i = 0; i < 10; i++) {
        var randomIndex = Math.floor(Math.random() * characters.length);
        token += characters.charAt(randomIndex);
    }

    return btoa(token);
}

function validateForm() {
    var enteredToken = document.getElementById("token").value;

    if (enteredToken === currentToken) {
        return true;
    } else {
        alert("Token incorrecto");
        return false;
    }
}