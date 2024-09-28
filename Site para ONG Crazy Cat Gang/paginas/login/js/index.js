function Acessar(){
    var email = document.getElementById("email").value;
    var senha = document.getElementById("password").value;
    if (email == "ccgcwb@gmail.com" && senha == "123456"){
        window.location.href="../telalista(admin)/index.html";

    }else{
        alert("Email ou senha incorreta");

    }

}