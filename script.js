function github() {
    window.open('https://github.com/itsuigy/GU-usuario-contrasena');
}

function validateForm() {
    var token = document.getElementById("token").value;

    // Generate MD5 hash of the token
    var md5Token = md5(token);

    if (md5Token === "your_generated_token_here") {
        return true;
    } else {
        alert("Token incorrecto");
        return false;
    }
}
