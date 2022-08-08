function carregar(){
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas`

    if (hora >= 0 && hora < 12){
        img.src = 'manha.jpg'
        document.body.style.background = 'rgb(109, 245, 216)'
    }
    else if (hora >= 12 && hora <= 18){
        img.src = 'tarde.jpg'
        document.body.style.background = 'orange'
    }
    else {
        img.src = 'noite.jpg'
        document.body.style.background = 'rgb(6, 56, 49)'
    }
}
