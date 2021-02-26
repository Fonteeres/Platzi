var gino = {
    nombre: 'Gino',
    edad: 21
}
var nico = {
    nombre: 'Nico',
    edad: 16
}
var pepe = {
    nombre: 'Pepe',
    edad: 56
}
var miguel= {
    nombre: 'Miguel',
    edad: 78
}
var martina = {
    nombre: 'Martina',
    edad: 23
}

const mayoria_de_edad = 18
//esta funcion es igual a la funcion de abajo
/*var esMayorDeEdad = function (persona){
    return persona.edad >= mayoria_de_edad
}*/
// si hay un solo parametro los parentesis de persona no irian
/*const esMayorDeEdad = persona => {
    return persona.edad >= mayoria_de_edad
}*/
// const esMayorDeEdad = persona => persona.edad >= mayoria_de_edad
const esMayorDeEdad = ({edad}) => edad >= mayoria_de_edad


function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}
// Desafio
const Acceso = ({edad}) => !esMayorDeEdad({edad})? console.log ('Acceso denegado') : console.log ('Podes pasar')

imprimirSiEsMayorDeEdad(gino)
imprimirSiEsMayorDeEdad(nico)
imprimirSiEsMayorDeEdad(pepe)
imprimirSiEsMayorDeEdad(miguel)
imprimirSiEsMayorDeEdad(martina)

Acceso(gino)
Acceso(nico)