let tempoIntervaloVerificarChamada = 5000
let oldValue
const conexao = _ => document.getElementById('messagebox-1001-msg')
const chamadas = (status) => {
    let elemento = document.getElementById('label-1033')
    if (status == 'verificar') {
        return elemento
    } else {
        return elemento.innerHTML.substr(18, 2)
    }
}

window.setInterval(function () {
    if (chamadas('verificar')) {
        if (chamadas() != oldValue) {
            oldValue = chamadas()

            if (chamadas() > 0) {
                notification("Chamadas em fila:", `Você tem ${chamadas()} chamada(s) na fila`, false)
            }
        }
    }

    if (conexao()) {
        notification("Peda conexão", "Favor relogar no converja", false)
    }
}, tempoIntervaloVerificarChamada)


// Função para enviar as notificações
function notification(title, message, onClick) {
    if (!Notification) {
        alert('Sua versão do Google Chrome não suporte esse tipo de Notificação.')
        return
    }

    if (Notification.permission !== 'granted') {
        Notification.requestPermission()
    }

    var notification = new Notification(
        title, {
            body: message
        }
    )
}