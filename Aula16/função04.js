/*function fatorial(numero){
    
    if (numero <= 1){
        return 1
    }
    else{
        return numero * fatorial(numero - 1)
    }
}
console.log(fatorial(5))
console.log(fatorial(1))
console.log(fatorial(4))
console.log(fatorial(3))
console.log('\n ')*/

function fato(n){
    let fat = 1

    for(let c = n; c > 1; c--){
        fat *= c
    }
    return fat
}
console.log(fato(5))