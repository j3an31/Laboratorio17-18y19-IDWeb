async function dividirAsync(a, b) {
    console.log("--- DIVISIÓN ---");
    console.log(`Número 1: ${a}\nNúmero 2: ${b}`);
    try {
        const respuesta = await new Promise ((resolve, reject) => {
            console.log("Esperando 1.5 segundos...");
            setTimeout(() => {
                if (b===0) {
                    reject("Error: ¡No se puede dividir entre cero!");
                } else {
                    resolve(a/b);
                }
            }, 1500);
        });
        console.log("Resultado", respuesta);
    } catch (e) {
        console.log(e);
    }
}

dividirAsync(18, 0);