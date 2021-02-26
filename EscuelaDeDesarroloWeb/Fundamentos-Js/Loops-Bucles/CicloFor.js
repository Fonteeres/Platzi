var gino = {
    nombre: 'Gino',
    apellido: 'Sibello',
    edad: 21,
    peso: 70
}

console.log (`Al inicio del año ${gino.nombre} pesa ${gino.peso}kg`)

const incremento_peso = 0.2

const aumentarDePeso = persona => persona.peso += incremento_peso
const adelgazar = persona => persona.peso -= incremento_peso

for (var i = 1; i <= 365 ; i++){
    var random = Math.random()

    if(random<0.25){
        aumentarDePeso(gino)
    }else if (random < 0.5) {
        adelgazar(gino)
    }
}

console.log (`Al final del año ${gino.nombre} pesa ${gino.peso.toFixed(2)}kg`)




