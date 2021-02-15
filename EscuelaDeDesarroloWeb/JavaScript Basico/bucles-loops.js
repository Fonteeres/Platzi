var estudiantes = ["maria", "sergio", "rosa", "Daniel"];

function saludarestudiantes (estudiante){
    console.log(`hola, ${estudiante}`);
}

for (var i = 0; i < estudiantes.length; i++){
    saludarestudiantes(estudiantes[i]);
}

// opcion 2

var estudiantes = ["maria", "sergio", "rosa", "daniel"];

function saludarestudiantes (estudiante){
    console.log(`hola, ${estudiante}`)
}
for(var estudiante of estudiantes){
    saludarestudiantes(estudiante)
}