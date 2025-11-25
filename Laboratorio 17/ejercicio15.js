function dividirAsync(a, b) {
    return new Promise ((resolve, reject) => {
        console.log("Esperando 1.5 segundos...");
        setTimeout(() => {
            if (b===0) {
                reject("Error: ¡No se puede dividir entre cero!");
            } else {
                resolve(a/b);
            }
        }, 1500);
    });
}

console.log("--- DIVISIÓN ---");
console.log("Número 1: 18\nNúmero 2: 0");
dividirAsync(18, 0) 
    .then((resultado) => {
        console.log("Resultado", resultado);
    })
    .catch((error) => {
        console.log(error);
    })