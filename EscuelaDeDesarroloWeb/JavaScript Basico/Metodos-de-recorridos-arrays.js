var articulos = [
    {nombre: "Bici", costo: 3000},
    {nombre: "Tv", costo: 2500},
    {nombre: "Libro", costo: 320},
    {nombre: "Celular", costo: 10000},
    {nombre: "Laptop", costo: 20000},
    {nombre: "Teclado", costo: 500},
    {nombre: "Audifonos", costo: 1700},
];

/*Metodos de recorrido de arrays */
// filter 1er metodo
var ArticulosFiltrado = articulos.filter(function(articulo){
    return articulo.costo <= 500
});
// map 2do metodo
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});