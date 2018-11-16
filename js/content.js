// Executa a função em um intervalo (1000 = 1s)
var tempoIntervaloVerificarChamada = 5000
var oldValue

window.setInterval(function () {
    // Pega as chamadas pelo id do elemento
    var chamadas = document.getElementById('label-1033')

    if (chamadas) {
        chamadas = chamadas.innerHTML.substr(18, 2)

        if (chamadas != oldValue) {
            oldValue = chamadas

            if (chamadas > 0) {
                notification(
                    "Chamadas em fila:",
                    `Você tem ${chamadas} chamada(s) na fila`,
                    false
                )}
        }
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