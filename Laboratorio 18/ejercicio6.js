async function mostrarUsuarios() {
    try {
        const respuesta = await fetch("https://jsonplaceholder.typicode.com/users");
        if (!respuesta.ok) {
            throw new Error("Error en la petición: " + respuesta.status);
        }
        const usuarios = await respuesta.json();
        console.log("--- NOMBRE DE LOS USUARIOS ---");
        let numUser = 1;
        usuarios.forEach((usuario) => {
            console.log(`Usuario ${numUser}:`, usuario.name);
            numUser++
        });
    } catch (error) {
        console.error("Error al cargar el usuario:", error);
    }
}

mostrarUsuarios();