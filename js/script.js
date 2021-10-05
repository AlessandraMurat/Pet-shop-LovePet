
$(document).ready(function () {
    //Botao scroll
    $(window).scroll(function () {
        if ($(this).scrollTop() > 400) {
            $("#scroll-top-btn").css({ "display": "block" });
        }
        else {
            $("#scroll-top-btn").css({ "display": "none" });
        }
    })

    $("#scroll-top-btn").click(function () {
        $("html, body").animate({ scrollTop: 0 }, 1500);
        return false;
    })

});

function validacaoEmail(field) {
    usuario = field.value.substring(0, field.value.indexOf("@"));
    dominio = field.value.substring(field.value.indexOf("@")+ 1, field.value.length);
    if ((usuario.length >=1) &&
        (dominio.length >=3) &&
        (usuario.search("@")==-1) &&
        (dominio.search("@")==-1) &&
        (usuario.search(" ")==-1) &&
        (dominio.search(" ")==-1) &&
        (dominio.search(".")!=-1) &&
        (dominio.indexOf(".") >=1) &&
        (dominio.lastIndexOf(".") < dominio.length - 1)) {
            document.getElementById("email").style.border= "2px solid green";
    }
    else{
        document.getElementById("email").style.border= "2px solid red";
    }
}

function validaNome() {
    let letras = /^[a-zA-Z\s]*$/;
    let nome = document.getElementById("nome").value;
    let campo = document.getElementById("nome");

    if (nome.match(letras)) {
        campo.style.border = "2px solid green";
    }
    else {
        campo.style.border = "2px solid red";
    }

}


function Sobrenome() {
    let letras = /^[a-zA-Z\s]*$/;
    let nome = document.getElementById("sobrenome").value;
    let campo = document.getElementById("sobrenome");

    if (nome.match(letras)) {
        campo.style.border = "2px solid green";
    }
    else {

        campo.style.border = "2px solid red";
    }

}

function Validatelefone() {
    let numeros = /(\(?\d{2}\)?\s)?(\d{4,5}\-\d{4})/;
    let tel = document.getElementById("telefone").value;
    let campo = document.getElementById("telefone");

    if (tel.match(numeros)) {
 
        campo.style.border = "2px solid green";
    }
    else {

        campo.style.border = "2px solid red";
        
    }

}



  




