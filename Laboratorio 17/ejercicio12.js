function procesarLista(numeros, callback) {
    let procesados = 0;
    const total = numeros.length;

    numeros.forEach((elemento) => { // Normalmente sería: (elemento, indice)
        const tiempoAleatorio = Math.random()*1000 + 500;
        setTimeout(() => {
            console.log(`Procesando... número: ${elemento}`);
            procesados++; 
            if (procesados === total) {
                callback("¡Proceso completado!");
            }
        }, tiempoAleatorio);
    });
}

const numeros = [1, 2, 3, 4, 5];
console.log("--- PROCESAR NÚMEROS ---");
console.log("Lista de números:", numeros);
procesarLista(numeros, (mensaje) => {
    console.log(mensaje);
});