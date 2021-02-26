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

function esMayorDeEdad(persona){
    return persona.edad >= mayoria_de_edad
}

function imprimirSiEsMayorDeEdad(persona){
    if(esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad`)
    }else{
        console.log(`${persona.nombre} no es mayor de edad`)
    }
}
imprimirSiEsMayorDeEdad(gino)
imprimirSiEsMayorDeEdad(nico)
imprimirSiEsMayorDeEdad(pepe)
imprimirSiEsMayorDeEdad(miguel)
imprimirSiEsMayorDeEdad(martina)


