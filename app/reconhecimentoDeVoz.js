window.SpeechRecognition = window.SpeechRecognition || webkitSpeechRecognition;

const recognition = new SpeechRecognition();
recognition.lang = 'pt-Br'
recognition.start()

const elementoChute = document.getElementById('chute')

recognition.addEventListener('result', onSpeak)

function onSpeak(e) {
    chute = e.results[0][0].transcript
    exibirChuteNaTela(chute)
    verificaSeOValorChuteEhValido(chute)
}

function exibirChuteNaTela(chute) {
    elementoChute.innerHTML = ` 
        <div>Você disse</div>
        <span class="box">${chute}</span>

        `
}

recognition.addEventListener('end', () => recognition.start());