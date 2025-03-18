function logar(){
    var email = document.getElementById('email').value;
    var senha = document.getElementById('senha').value;

    if(email == "email" && senha == "senha"){
        alert("Sucesso!");
        location.href = "home.html";
    }
    else {
        alert("Email ou senha incorretos");
    }
}