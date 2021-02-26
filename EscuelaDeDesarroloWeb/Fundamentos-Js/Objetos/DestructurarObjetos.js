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
 

function imprimirNombreEnMayusculas (persona) {
    // var nombre = persona.nombre
    var {nombre} = persona
    console.log(nombre.toUpperCase())
}

imprimirNombreEnMayusculas(Gino)
imprimirNombreEnMayusculas(Pepe)
imprimirNombreEnMayusculas({nombre: 'pepito'})
