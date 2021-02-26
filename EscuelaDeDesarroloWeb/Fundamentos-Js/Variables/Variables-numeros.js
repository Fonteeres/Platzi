var edad = 27
//edad = edad + 1, le suma 1 a la var edad
edad += 1   

var peso = 75 
//peso = peso - 2
peso -= 2

var sandwich = 1 
peso += sandwich;

var jugarAlFutbol = 3
peso -= jugarAlFutbol

var precioDeVino = 200.3

//redondear una cantidad con Math.round()
var total = Math.round(precioDeVino*100* 3)/100

//toFixed(n) para tomar en cuenta n cantidad de decimales que queremos
var totalStr= total.toFixed(2)
//parsear de un string a un float (convertir de texto a numero decimal)
var total2 = parseFloat(totalStr)

var pizza = 8 
var personas = 2 
var cantidadPorcionesPorPersona = pizza / personas