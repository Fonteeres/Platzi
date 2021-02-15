let op1 = "Piedra"
let op2 = "Papel"
let op3 = "tijeras"
var cpu = Math.floor(Math.random()*3);
    if (cpu == 1){
        cpu = op1;
    }
    else if (cpu == 2){
        cpu = op2;
    }
    else{
        cpu = op3;
    }
const resultado = function (usuario, cpu){
    if (usuario !== cpu){
        if (usuario === op1 && cpu ===op2){
            console.log("Gano la computadora con " + cpu + " y el usuario uso " + usuario);
        }
        else if (usuario === op1 && cpu === op3){
            console.log("Gano el usuario con " + usuario + " y la computadora uso " + cpu);
        }
        else if (usuario === op2 && cpu === op1){
            console.log("Gano el usuario con " + usuario + " y la computadora uso " + cpu);
        }
        else if (usuario === op2 && cpu === op3){
            console.log("Gano la computadora con " + cpu + " y el usuario uso " + usuario);
        }
        else if (usuario === op3 && cpu === op1){
            console.log("Gano la computadora con " + cpu + " y el usuario uso " + usuario);
        }
        else if (usuario === op3 && cpu === op2){
            console.log("Gano el usuario con " +usuario+ " y la computadora uso " + cpu);
        }
    }
    else{
        console.log("Empate")
    }
};
resultado(user, cpu)
