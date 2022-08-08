function contar(){
    var inicio = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passo = document.getElementById('txtp')
    var res = document.querySelector('div#res')
    var ni = Number(inicio.value)
    var nf = Number(fim.value)
    var np = Number(passo.value)

    if (inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0){
        res.innerHTML = '[ERRO] faltam dados, impossivel contar'
    }
    else{
        res.innerHTML = 'contando: <br>'
        if(np <= 0){
            window.alert('Passo invalido! Colocando Passo igual a 1')
            np = 1
        }
        if (ni < nf){
            for(let c = ni; c <= nf; c += np){
                res.innerHTML += `${c} \u{27A1} `
            }
        }
        else{
            for( let c = ni; c >= nf; c-= np){
                res.innerHTML += `${c} \u{27A1} `
            }
        }
        res.innerHTML += `\u{1F3C1}`
    }
}
