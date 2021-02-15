var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];
//! 1er metodo find
var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "Laptop"
});
//! 2do metodo forEach
articulos.forEach(function(articulo){
    console.log(articulo.nombre)
});
//! 3er metodo some
var articulosBaratos = articulos.some(function(articulo){
    return articulo.costo <= 700;
});