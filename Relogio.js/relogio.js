function info() {
    let meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
    let semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
    let agora = new Date
    let saida = Document.getElementByid('saida')
    let dia = agora.getDate()
    let mes = agora.getMonth()
    let ano = agora.getFullYear() 
    let sem = agora.getDay()
    let hora = agora.getHours()
    let min = agora.getMinutes()
    let seg = agora.getSeconds()

    saida.innerHTML = ${dia} 
    saida.innerHTML = ${mes}
    saida.innerHTML = ${ano}
    saida.innerHTML = ${sem}
    saida.innerHTML = ${hora}
    saida.innerHTML = ${min}
    saida.innerHTML = ${seg}
}