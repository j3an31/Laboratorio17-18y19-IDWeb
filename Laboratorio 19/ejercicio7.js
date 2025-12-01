async function listaPrimeros20() {
    console.log("--- POKEMONES DEL 1 AL 20 ---");
    try {
        const respuesta = await fetch("https://pokeapi.co/api/v2/pokemon?limit=20");
        if (!respuesta.ok) {
            throw new Error("Error en la petición: " + respuesta.status);
        }
        const pokemones = await respuesta.json();
        for(let i=0;i<20;i++) {
            console.log(`Pokémon N° ${i+1}: ${pokemones.results[i].name}`)
        }        
    } catch (error) {
        console.error(error.message);
    }
}

listaPrimeros20();