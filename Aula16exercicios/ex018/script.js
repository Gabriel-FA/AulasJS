let tab = document.getElementById('selanali')
let res = document.getElementById('res')
let valores = []

function inLista(num, l){
    if(l.indexOf(num) != -1){
        return true
    }
    else{
        return false
    }
}

function add(){
    //let num = document.getElementById('txtnum')
    let num = Number(document.getElementById('txtnum').value)

    if(num >= 1 && num <= 100 && !inLista(num, valores)){
        //let n = Number(num.value)
        valores.push(num)
        let item = document.createElement('option')
        item.text = `Valor ${num} adicionado`
        tab.appendChild(item)
        res.innerHTML = ''
    }
    else{
        window.alert('Valor invalido ou ja adicionado na lista')
    }
    num = ''
    num.focus()
}
function finalizar(){
    valores.sort((a,b) => a - b)
    let soma = 0
    //let media = 0

    for(i in valores){
        soma += valores[i] // soma os valores adicionados no array.
    }

    //media = soma / valores.length

    res.innerHTML = `Ao todo temos ${valores.length} numeros cadastrados</br>` 
    res.innerHTML += `O maior valor informado foi ${valores[valores.length -1]}</br>`
    res.innerHTML += `O menor valor informado foi ${valores[0]}</br>`
    res.innerHTML += `A soma dos valores é ${soma}</br>`
    res.innerHTML += `A média dos valores é ${soma / valores.length}`
}

//Math.min.apply(Math,vetor) e Math.max.apply(Math,vetor)