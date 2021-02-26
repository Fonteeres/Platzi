// Tengo el desafio de hacer que el bug de la 1 veces ya no suceda
var contador = 0 

const lluvia = () => Math.random() < 0.25

do {
    contador++ 
}while (!lluvia())

console.log(`Fui a ver si llovia ${contador} ${contador>1? 'veces': 'vez'}`)