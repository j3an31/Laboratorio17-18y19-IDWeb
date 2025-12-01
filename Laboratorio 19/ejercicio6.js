async function charizard() {
    console.log("--- CHARIZARD ---");
    try {
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon/charizard");
        if (!respuesta.ok) {
            throw new Error("Error en la petición: " + respuesta.status);
        }
        const charizard = await respuesta.json();
        console.log("URL del sprite frontal:", charizard.sprites.front_default);
        
    } catch (error) {
        console.error(error.message);
    }
}

charizard();