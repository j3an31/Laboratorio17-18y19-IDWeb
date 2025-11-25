function dividirAsync(a, b, callback) {
    console.log("Esperando 1.5 segundos...");
    setTimeout(() => {
        if (b===0) {
            callback(new Error("¡No se puede dividir entre cero!"), null);
        } else {
            callback(null, a / b);
        }
    }, 1500);
}

function callbackFuncion(error, resultado) {
    if (error) {
        console.log("Error:", error.message);
    } else {
        console.log("Resultado:", resultado);
    }
}

console.log("--- DIVISIÓN ---");
console.log("Número 1: 18\nNúmero 2: 0");
dividirAsync(18, 0, callbackFuncion);