// console.log('funciona')

// evento disparado após carregamento da janela
window.addEventListener('load', (event) => {
    let formulario = document.querySelector('.form-auth');
    // console.log(formulario);
    let btnSubimit = document.querySelector('.form-auth button');
    // elemento.addEventListener(nome_evento, funcao_disparadaS);

    // selecionando inputs
    let listaErros =  document.querySelector('.erros ul')
    let inputNome = document.querySelector('input[name="name"]');
    let inputEmail = document.querySelector('input[name="email"]')
    let inputSobrenome = document.querySelector('input[name="surname"]')
    let inputNick = document.querySelector('input[name="username"]')
    let inputSenha = document.querySelector('input[name="password"]')
    listaErros.style.cssText = 'color:red;font-weight:500';

    // campo de data de nascimento
    inputDataNascimento = document.createElement('input')
    labelDataNascimento = document.createElement('label')
    inputDataNascimento.type = 'date'
    inputDataNascimento.id = 'dataNascimento'
    labelDataNascimento.for = 'dataNascimento'
    father = inputNome.parentElement
    father.insertBefore(labelDataNascimento,inputNick)
    father.insertBefore(inputDataNascimento,inputNick)
    labelDataNascimento.innerHTML = 'Data de nascimento :'
    labelDataNascimento.style.cssText = 'text-align: initial;font: 14px "Lucida Grande", Helvetica, Arial, sans-serif;margin: 5px;diplay:flex;width:50%;font-weight:500'
    inputDataNascimento.style.cssText = 'width:40%;display:inline;'
    
    console.log(inputDataNascimento.value)
    
    btnSubimit.addEventListener('click', (event) => {
        // interrompe o envio do formulario
        event.preventDefault();
        console.log(btnSubimit);
        let erros = []
        
        // separando data
        let [ano,mes,dia] = inputDataNascimento.value.split('-')
        
        let data =  new Date();
        let anoAtual = data.getFullYear()

        listaErros.innerHTML = ""
        
        // Regras do Nome
        if(!inputNome.value){
            erros.push('Preencha o campo Nome')
        }
        if(inputNome.value.length<2){
            erros.push('Seu nome deve ter no minimo 2 caracteres')
        }
        if(inputNome.value.length>80){
            erros.push('Seu nome deve ter no máximo 80 caracteres') 
        }

        // Regras Email
        if(inputEmail.value.length<10){
            erros.push('Digite um email com no minimo 10 caracteres')
        }
        if(inputEmail.value.length>180){
            erros.push('Digite um email com no máximo 180 caracteres')
        }
        if(!inputEmail.value){
            erros.push('Preencha o campo Email!')
        }
        if(inputEmail.value.indexOf('@')==-1||inputEmail.value.indexOf('.')==-1){
            erros.push('Seu email deve conter um "@" e um "."')
        }

        
        //Regras Sobrenome
        if(!inputSobrenome.value){
            erros.push('Preencha o campo Sobrenome de usuário!')
        }
        if(inputSobrenome.value.length<2){
            erros.push('Digite um sobrenome com no minimo 2 caracteres')
        }
        if(inputSobrenome.value.length>180){
            erros.push('Digite um sobrenome com no maximo 180 caracteres')
        }

        //Regras Nick
        if(!inputNick.value){
            erros.push('Preencha o campo Nome de usuário!')
        }
        if(inputNick.value.length<10){
            erros.push('O username deve ter no minimo 10 caracteres')
        }
        if(inputNick.value.length>20){
            erros.push('O username deve ter no maximo 20 caracteres')
        }

        // Regras Senha
        if(!inputSenha.value){
            erros.push('Preencha o campo Senha')
        }
        
        // Regras Data Nascimento
        if(!inputDataNascimento.value){
            erros.push('Preencha o campo Data de nascimento')
        }
        if(anoAtual-ano<16){
            erros.push('Você deve ter mais de 16 anos')
        }
        if(anoAtual-ano>120){
            erros.push('Data de nascimento inválida')
        }

        for(const erro of erros){
            listaErros.innerHTML += "<li>"+ erro + "</li>" 
        }
    })

});