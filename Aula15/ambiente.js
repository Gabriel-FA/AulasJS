let num = [5, 8, 2, 9, 3]
num.push(4)
num.sort()

console.log(num)
console.log(`o array tem ${num.length} posições`)
console.log(`o primeiro valor do array é ${num[0]}`)

/*for(let posVet = 0; posVet < num.length; posVet++){
    console.log(`A posição ${posVet} tem o valor ${num[posVet]}`)
}*/

for(let i in num){ 
    console.log(i, num[i])
}

let pos = num.indexOf(5)

if(pos == -1){ // o retorno menos um (-1), significa que ele pesquisou o valor dentro do vetor e n achou.
    console.log('o valor não foi encontrado')
}
else{
    console.log(`o valor está na posição ${pos}`)
}