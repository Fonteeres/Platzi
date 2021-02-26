var Gino = {
    nombre: 'Gino',
    appellido: 'Sibello',
    edad: 21
} 
var Pepe = {
    nombre: 'Pepe',
    appellido: 'kilo',
    edad: 32
}



// modificar un objeto creando uno totalmente nuevo
function cumpleaños(persona){
    return{
        ...persona,
        edad: persona.edad + 1
    }
}
    