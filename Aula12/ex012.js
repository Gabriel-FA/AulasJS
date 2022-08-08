var relogio = new Date()
var hora = relogio.getHours()
console.log(`agora são exatamente ${hora} horas`)

if (hora < 12){
    console.log('Bom dia!')
}
else if (hora < 19){
    console.log('Boa tarde!')
}
else{
    console.log('Boa noite!')
}