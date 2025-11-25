function cargarMensaje() {
    return new Promise((resolve) => {
        console.log("Cargando...");
        setTimeout(() => {
            resolve("¡Mensaje cargado!");
        }, 1000);
    });
}

const resultado = document.getElementById("resultado");
resultado.textContent = "Cargando...";
cargarMensaje()
    .then((mensaje) => {
        console.log(mensaje);
        resultado.textContent = mensaje;
    });