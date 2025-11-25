function cargarUsuario() {
    return new Promise ((resolve) => {
        const tiempoAleatorio = parseInt(Math.random()*(1500-800) + 800);
        console.log("--- USUARIO ---");
        console.log(`Esperando ${tiempoAleatorio} ms...`);
        setTimeout(() => {
            const usuario = {
                id: 31,
                nombre: "Gian Franco"
            };
            resolve(`Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`);
        }, tiempoAleatorio);
    });
}

cargarUsuario() 
    .then((usuario) => {
        console.log(usuario);
    })