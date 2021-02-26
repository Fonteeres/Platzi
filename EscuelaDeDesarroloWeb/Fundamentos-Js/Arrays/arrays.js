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

var personas = [gino, miguel, martina, hugo]

for (var i = 0; i<personas.length; i++){
    var persona = personas [i]
    console.log(`${persona.nombre} mide ${persona.altura}mts`)

}