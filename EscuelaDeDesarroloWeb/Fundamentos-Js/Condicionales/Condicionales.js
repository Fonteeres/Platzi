var gino = {
    nombre: 'Gino',
    apellido: 'Sibello',
    edad: 21,
    ingeniero: true,
    cocinero: false,
    cantante: true,
    dj: false,
    guitarrista: false,
    drone: true
}
function imprimirProfesiones (persona){
    console.log(`${persona.nombre} es:`)
    if (persona.ingeniero){
        console.log('Ingeniero')
    }else{
        console.log('No es Ingeniero')
    }
    if (persona.cocinero){
        console.log('Cocinero')
    }
    if (persona.cantante){
        console.log('Cantante')
    }
    if (persona.dj){
       console.log('Dj')
    }
    if (persona.guitarrista){
       console.log('Guitarrista')
    }
    if (persona.drone){
       console.log('Piloto de Drones')
    }
    
}
imprimirProfesiones(gino)