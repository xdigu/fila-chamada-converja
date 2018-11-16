// Executa a função em um intervalo (1000 = 1s)
var tempoIntervaloVerificarChamada = 5000


window.setInterval(function () {
    
    // Envia uma notificação que o monitoramento foi ativado
    var notificacaoInicial
    if (notificacaoInicial == null) {
        notification(
            "Converja",
            "Estamos monitorando as chamadas em espera, caso tenha alguma iremos lhe avisar",
            false
        )
        notificacaoInicial = true
    }

    // Pega as chamadas pelo id do elemento
    let chamadas = document.getElementById('')

    if (chamadas) {
        chamadas = chamadas.innerHTML.substr(18, 2)

        var oldValue
        if (chamadas != oldValue) {
            if (chamadas > 0) {
                oldValue = chamadas
                notification(
                    "Nova chamada",
                    `Você tem ${chamadas} chamada(s) na fila`,
                    false
                )
            }

        }
    }

}, tempoIntervaloVerificarChamada)


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

    if (onClick) {
        notification.onclick = function () {
            var url = "https://github.com/xdigu"
            window.open(url)
        }
    }
}