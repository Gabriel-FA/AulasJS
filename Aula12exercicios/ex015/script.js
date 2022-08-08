function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if (fano.value.length == 0 || Number(fano.value)> ano){
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    }
    else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if(fsex[0].checked){
            gênero = 'Homem'
            if(idade >= 0 && idade < 12){
                // criança
                img.setAttribute('src', 'foto-bebe-m.png')
                document.body.style.background = 'rgb(109, 229, 245)'
            }
            else if(idade < 18){
                // adolescente
                img.setAttribute('src', 'foto-jovem-m.png')
                document.body.style.background = 'rgb(64, 150, 248)'
            }
            else if(idade < 50){
                // adulto
                img.setAttribute('src', 'foto-adulto-m.png')
                document.body.style.background = 'rgb(64, 107, 248)'
            }
            else{
                //idoso
                img.setAttribute('src', 'foto-idoso-m.png')
                document.body.style.background = 'rgb(54, 51, 248)'
            }
        }
        else if(fsex[1].checked){
            gênero = 'Mulher'
            if(idade >= 0 && idade < 12){
                // criança
                img.setAttribute('src', 'foto-bebe-f.png')
                document.body.style.background = 'rgb(227, 104, 252)'
            }
            else if(idade < 18){
                // adolescente
                img.setAttribute('src', 'foto-jovem-f.png')
                document.body.style.background = 'rgb(218, 68, 248)'
            }
            else if(idade < 50){
                // adulto
                img.setAttribute('src', 'foto-adulto-f.png')
                document.body.style.background = 'rgb(207, 36, 241)'
            }
            else{
                //idoso
                img.setAttribute('src', 'foto-idoso-f.png')
                document.body.style.background = 'rgb(178, 14, 211)'
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}