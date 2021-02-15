function Auto (marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
};
var numero = prompt ("¿Cuantos autos son?");
var autos = [];
for (i=0; i < numero; i++){
    marca = prompt("¿Que marca es?")
    modelo = prompt ("¿Que modelo es?")
    annio = prompt ("¿De que año es?")
    autos.push(new Auto(marca, modelo, annio));
}
for(var i = 0; i < autos.length; i++) {
    console.log(autos[i])
}