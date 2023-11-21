const form = document.querySelector('.formulario');
let email = document.querySelector('#email');
let  senha =  document.querySelector('#password');
let  mensagemErro = document.querySelector('#resposta'); 


function valida(event){  
    event.preventDefault(); 
     
        let resultadoSenha = (validaSenha(senha.value, 8));
        let resultadoEmail = (email.value !== "" || validaEmail(email.value));

        if(resultadoEmail && resultadoSenha){
                mensagemErro.innerHTML = 'Formulário enviado';
                form.submit();
        } else {
                 mensagemErro.innerHTML = 'Email vazio ou senha inválida';
                alert('Email vazio ou senha inválida');
        }

}

function validaEmail(email){
    //regex valida caracteres
    const emailRegex = new RegExp(
      /^[a-zA-Z0-9+_-]+@[a-zA-Z0-9+_-]+\.[a-zA-Z0-9+_-]+\.[a-zA-Z]{2,}$/
    );
   // const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if(emailRegex.test(email)){
        return true;
    }
    return false;

}

function validaSenha(senha, numminimo){
    if(senha.length > numminimo){
        //senha valida
        return true;
    }
    return false;

}

//no lugar de onclick="valida()" no html
form.addEventListener('submit', valida);


/*Menu hamburger */

// const menu  = document.querySelector('.menu-hamburger');
// const nav = document.querySelector('.menu');
// menu.addEventListener('click', () =>
// nav.classList.toggle('acttive'));


