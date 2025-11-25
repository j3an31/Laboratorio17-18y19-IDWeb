function procesarLista(numeros) {
    let procesados = 0;
    const total = numeros.length;
    return new Promise ((resolve) => {
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
}

const numeros = [1, 2, 3, 4, 5];
console.log("--- PROCESAR NÚMEROS ---");
console.log("Lista de números:", numeros);
procesarLista(numeros)
    .then((respuesta) => {
        console.log(respuesta);
    })