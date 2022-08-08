var tab = document.getElementById('seltab')

function calcularTab(){
    // let num = Number(document.getElementById('txtnum').value)
    let num = document.getElementById('txtnum')
    //let tab = document.getElementById('seltab')

    if(num.value.length == 0){
        window.alert('Por favvor, insira um numero')
    }
    else{
        let n = Number(num.value)
        tab.innerHTML = ' '
        for(let c = 1; c <= 10; c++){
            let item = document.createElement('option')
            item.text = `${n} x ${c} = ${n*c}`
            tab.appendChild(item)
        }
    }
}
function limpar(){
    tab.innerHTML = ' '
}