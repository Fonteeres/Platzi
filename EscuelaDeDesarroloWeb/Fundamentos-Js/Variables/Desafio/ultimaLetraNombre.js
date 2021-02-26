var ingresarNombre;
ingresarNombre = prompt('Ingrese su nombre completo')
var largo = ingresarNombre.length
var ultimaLetra = ingresarNombre.substr(largo-1, largo)
console.log("La ultima letra de su nombre es " + ultimaLetra)
document.write('La ultima letra de su nombre es ' +ultimaLetra)