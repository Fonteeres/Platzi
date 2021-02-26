var gino = {
    nombre: 'Gino',
    apellido: 'Sibello',
    edad: 21,
    peso: 70
}

console.log (`Al inicio del año ${gino.nombre} pesa ${gino.peso}kg`)

const incremento_peso = 0.3
const DIAS_DEL_ANO = 365

const aumentarDePeso = persona => persona.peso += incremento_peso
const adelgazar = persona => persona.peso -= incremento_peso
const comeMucho = () =>Math.random() < 0.3
const realizadeporte = () => Math.random() <0.4
const meta = gino.peso-3
var dias = 0

while (gino.peso > meta) {
    if (comeMucho()){
        aumentarDePeso(gino)
    }
    if (realizadeporte()){
        adelgazar(gino)
    }
dias += 1
}

console.log(`pasaron ${dias} dias hasta que ${gino.nombre} adelgazo 3kg`)

