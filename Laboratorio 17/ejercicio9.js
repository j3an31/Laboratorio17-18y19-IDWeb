function cargarMensaje(callback) {
    console.log("Cargando...");
    setTimeout(() => {
        callback("¡Mensaje cargado!");
    }, 1000);
}

const resultado = document.getElementById("resultado");
resultado.textContent = "Cargando...";
cargarMensaje(mensaje => {
    console.log(mensaje); 
    resultado.textContent = mensaje;  
});