function cargarUsuario(callback) {
    const tiempoAleatorio = parseInt(Math.random()*(1500-800) + 800);
    console.log(`Esperando ${tiempoAleatorio} ms...`);
    setTimeout(() => {
        const usuario = {
            id: 31,
            nombre: "Gian Franco"
        };
        callback(usuario);
    }, tiempoAleatorio);
}

console.log("--- USUARIO ---")
cargarUsuario(usuario => {
    console.log(`Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`);
});