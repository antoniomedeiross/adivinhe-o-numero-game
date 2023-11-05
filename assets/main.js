function comecar() {
    const main = document.querySelector('.h2-comecar');
    main.innerHTML=''
    const resultado = document.querySelector('.resultados');
    resultado.innerHTML='';
    const h3 = document.createElement('h3');
    h3.style.fontSize = '2.3em'
    h3.innerText = 'digíte um número de 0 a 10'
    const input = document.createElement('input');
    input.type='number';
    input.classList = 'input-numero';
    
    const botao = document.createElement('button');
    botao.innerText = 'enviar';
    botao.classList = 'botao-enviar';
    botao.addEventListener('click', verificaNumero);
    resultado.appendChild(h3);
    resultado.appendChild(input);
    resultado.appendChild(botao);


    function verificaNumero() {
        const numero = document.querySelector('.input-numero').value;

        if (numero <= 10 && numero > 0) {
            console.log(numero);
            const numeroComp = numeroComputador()
            acerteiErrrei(numero, numeroComp)

        } else {
            h3.innerText = 'insira um NÚMERO entre 1 e 10';
            h3.style.backgroundColor = 'darkred';
            h3.style.color = 'white';
            h3.style.padding = '8px';
            h3.style.fontSize = '2.3em';
            input.value = ''
        }
    }

    function numeroComputador() {
        const numero = Math.floor(Math.random()*(10-1+1))+1;
        console.log(numero)
        return numero
    }
    function acerteiErrrei(num1, num2) {
        const mensagem = document.createElement('h1');
        const mostraEscolha = document.createElement('p')
        const numeroEscolhido = `você escolheu o número (${num1}) o número escolhido foi (${num2})`
        mostraEscolha.innerHTML = `${numeroEscolhido}`
        const recomecar = document.createElement('button');
        recomecar.classList = 'recomecar'
        recomecar.innerText = 'jogar novamente'
        recomecar.addEventListener('click', comecar)
        mensagem.style.padding = '8px'
        if(num1 == num2) {
            mensagem.innerText = 'PARABENS VOCE ACERTOU!'
            mensagem.style.backgroundColor = 'lightgreen'
            mensagem.style.color = 'darkgreen'
            
        } else {
            mensagem.innerText = 'VOCE ERROU'
            mensagem.style.backgroundColor = 'red'
            mensagem.style.color = 'white'
        }
        resultado.innerHTML = '';
        resultado.appendChild(mensagem);
        resultado.appendChild(mostraEscolha)
        resultado.appendChild(recomecar);
    }
}