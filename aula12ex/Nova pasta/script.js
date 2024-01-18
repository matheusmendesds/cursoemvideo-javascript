function carregar() {
    var hora = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var agora = new Date()
    var h = agora.getHours()
    hora.innerHTML =  `Agora são ${h} horas`
    if (h >= 0 && h < 12 ) {
        img.src = 'imagens/diap.png' 
        document.body.style.background = '#fcdca1' 
    } else if (h >= 12 && h < 18) {
        img.src = 'imagens/tardep.png'
        document.body.style.background = '#9a8251'
    } else {
        img.src = 'imagens/noitep.png'
        document.body.style.background = '#273b44'
    }


}
