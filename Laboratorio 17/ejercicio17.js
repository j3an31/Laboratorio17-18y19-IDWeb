async function cargarMensaje() {
    try {
        const resultado = document.getElementById("resultado");
        resultado.textContent = "Cargando...";
        console.log("Cargando...");
        const respuesta = await new Promise((resolve) => {
            setTimeout(() => {
                resolve("¡Mensaje cargado!");
            }, 1000);
        });
        console.log(respuesta);
        resultado.textContent = respuesta;  
    } catch (e) {
        console.log(e);
    }
}

cargarMensaje();