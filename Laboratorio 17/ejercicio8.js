function nivel2() {
    try {
        console.log(x); 
    } catch (e) {
        console.log("Nivel 2 atrapó el error:", e.message);
        throw e; // Mantiene el mismo error en todos los niveles 
    }
}

function nivel1() {
    try {
        nivel2();
    } catch (e) {
        console.log("Nivel 1 recibió el error:", e.message);
        throw e;
    }
}

try {
    nivel1(); 
} catch (e) {
    console.log("ERROR FINAL capturado en el nivel superior:", e.message);
}