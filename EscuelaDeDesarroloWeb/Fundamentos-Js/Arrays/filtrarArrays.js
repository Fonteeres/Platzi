var gino = {
    nombre: 'Gino',
    apellido: 'Sibello',
    altura: 1.76
}
var miguel = {
    nombre: 'Miguel',
    apellido: 'Gomez',
    altura: 1.70 
}
var martina = {
    nombre: 'Martina',
    apellido: 'huj',
    altura: 1.64
}
var hugo = {
    nombre: 'hugo',
    apellido: 'lopez',
    altura: 1.86
}

const esAlta = ({altura}) => altura>= 1.75
const esBaja = ({altura}) => altura<= 1.70//Reto

var personas = [gino, miguel, martina, hugo]

var personasBajas = personas.filter(esBaja)
var personasAltas = personas.filter(esAlta)
/*var personasAltas = personas.filter(function(persona){
    return persona.altura> 1.75
})*/
console.log(personasAltas)
console.log(personasBajas)