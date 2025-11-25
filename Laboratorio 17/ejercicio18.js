async function cargarUsuario() {
    console.log("--- USUARIO ---")
    const tiempoAleatorio = parseInt(Math.random()*(1500-800) + 800);
    console.log(`Esperando ${tiempoAleatorio} ms...`);
    try {
        const respuesta = await new Promise((resolve) => {
            setTimeout(() => {
                const usuario = {
                    id: 31,
                    nombre: "Gian Franco"
                };
                resolve(`Usuario cargado: ${usuario.nombre} (ID: ${usuario.id})`);
            }, tiempoAleatorio);
        });
        console.log(respuesta)
    } catch (e) {
        console.log(e);
    }
}

cargarUsuario();