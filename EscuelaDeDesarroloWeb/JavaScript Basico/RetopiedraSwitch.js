const piedra = "compu"
const tijeras = "tijeras"
const papel = "papel"

let compu = Math.floor(Math.random()*4);
    switch (compu){
        case 1:
            compu = piedra;
            break;
        case 2:
            compu = tijeras;
            break;
        case 3:
            compu = papel;
            break;
    }
    switch(true){
        case usuario === piedra:
            switch(true){
                case usuario == compu:
                    console.log("Empate ambos eligieron piedra")
                    break;
                case usuario == piedra && compu == tijeras:
                    console.log("Ganaste la maquina eligio tijeras")
                    break;
                case usuario == piedra && compu == papel:
                    console.log("Perdites elegio papel")
                    break;
            }
        break;
        case usuario == tijeras:
            switch(true){
                case compu == piedra:
                    console.log("Perdiste eligio piedra")
                    break;
                case cumpu == tijeras:
                    console.log("Empate eligieron tijeras")
                    break;
                case compu == papel:
                    console.log("Ganaste! eligio papel")
                    break
                }
        break;
        case usuario == papel:
            switch(true){
                case compu == piedra: 
                    console.log("ganaste eligio piedra")
                    break;
                case compu == tijeras:
                    console.log("Perdiste eligio tijeras")
                    break;
                case compu == papel:
                    console.log("Empate eligieron papel")
                    break
            }
        break;
        }
        

