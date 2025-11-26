const boton = document.querySelector("button");
const datosUser2 = document.getElementById("datosUser2");

boton.addEventListener("click", () => {
    fetch("https://jsonplaceholder.typicode.com/users")
        .then(respuesta => {
            if (!respuesta.ok) {
                throw new Error("Error en la petición: " + respuesta.status);
            }
            return respuesta.json();
        })
        .then(usuarios => {
            const usuario = usuarios.find(u => u.id === 2);
            if (usuario) {
                datosUser2.innerHTML = `
                    <strong>Nombre:</strong> ${usuario.name}<br>
                    <strong>Email:</strong> ${usuario.email}<br>
                    <strong>Ciudad:</strong> ${usuario.address.city}
                `;
            } else {
                datosUser2.innerHTML = "¡Usuario 2 no encontrado!";
            }
        })
        .catch(error => {
            datosUser2.innerHTML = `Error: ${error.message}`;
            console.log("Error al cargar usuario:", error);
        });
});