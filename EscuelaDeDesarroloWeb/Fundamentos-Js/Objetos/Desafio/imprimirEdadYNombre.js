var Gino = {
    nombre: 'Gino',
    edad: 22
}
var pepe = {
    nombre: 'Pepe',
    edad: 34
}


function imprimirEdadYNombre (persona){
    var {nombre} = persona
    var {edad} = persona
    console.log(`Hola mi nombre es ${nombre} y tengo ${edad} años`)
}

imprimirEdadYNombre(Gino)
imprimirEdadYNombre(pepe)