function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')    
    var res = document.querySelector('div#resultado')
    if (fano.value.length == 0 || fano.value > ano ) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex') 
        var idade = ano - Number(fano.value) 
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'Homem'
            if (idade >= 0 && idade < 10 ) {
                img.setAttribute('src' , 'menino.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'hadolescente.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'hadulto.png' )
            } else {
                img.setAttribute('src', 'hidoso.png' )
            }    
        } else if (fsex[1].checked) {
            genero = 'Mulher'
            if (idade >=0 && idade <10) {
                img.setAttribute('src', 'menina.png')
            } else if (idade < 21) {
                img.setAttribute('src', 'madolescente.png')
            } else if (idade < 50) {
                img.setAttribute('src', 'madulta.png')
            } else {
                img.setAttribute('src', 'midosa.png')
            }
        } 
        res.style.textAlign ='center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`  
        res.appendChild(img)
    }

} 

