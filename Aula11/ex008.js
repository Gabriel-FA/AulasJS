/*
var val = 60.5
console.log(`A velocidade do seu carro é ${val} km/h`)
console.log('dirija com cuidado')
*/

function velocidade(vel){
    if(vel > 80){
        console.log(`A velocidade do seu carro é ${vel} km/h`)
        console.log('você ultrapassou o limite de velocidade e foi multado')
    }
    else{
        console.log(`A velocidade do seu carro é ${vel} km/h`)
        console.log('você esta dentro do limite permitido')
    }
}
velocidade(50)
velocidade(85)