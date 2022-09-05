function verificaSeOValorChuteEhValido(chute) {
    const numero = +chute

    if(chuteForInvalido(numero)){
        elementoChute.innerHTML += `<div>Valor inválido!</div`
        return
    }

    if(numeroForMaiorOuMenorQueOValorPermetido(numero)){
        elementoChute.innerHTML += `
            <div>Valor Inválido: Fala um número entre ${menorValor} e ${maiorValor}</div>
        `
        return 
    }

    if(numero === numeroSecreto){
        document.body.innerHTML = `
            <h2>Você Acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button id="jogar-novamente" class="btn">Jogar Novamente!</button>
        `
    } else if (numero > numeroSecreto){
        elementoChute.innerHTML += `
        <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>
        `
    } else {
        elementoChute.innerHTML += `<div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`
    }

}

function chuteForInvalido(numero){
   return Number.isNaN(numero)
}

function numeroForMaiorOuMenorQueOValorPermetido(numero){
    return numero > maiorValor || numero < menorValor
}

document.body.addEventListener('click', e => {
    if(e.target.id == 'jogar-novamente'){
        window.location.reload
    }
})