async function procesarLista(numeros) {
    let procesados = 0;
    const total = numeros.length;
    console.log("--- PROCESAR NÚMEROS ---");
    console.log("Números ingresados", numeros);
    try {
        const respuesta = await new Promise ((resolve) => {
            numeros.forEach((elemento) => { // Normalmente sería: (elemento, indice)
                const tiempoAleatorio = Math.random()*1000 + 500;
                setTimeout(() => {
                    console.log(`Procesando... número: ${elemento}`);
                    procesados++; 
                    if (procesados === total) {
                        resolve("¡Proceso completado!");
                    } 
                }, tiempoAleatorio);
            });
        });
        console.log(respuesta);
    } catch (e) {
        console.log(e);
    }
}

const numeros = [1, 2, 3, 4, 5];
procesarLista(numeros);