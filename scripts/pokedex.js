/*document.addEventListener('DOMContentLoaded', function () {
    // Llama a la función inicial para cargar información de Ditto al cargar la página
    obtenerDatosPokemon('ditto');
});*/

function buscarPokemon() {
    // Obtiene el valor de la barra de búsqueda
    const pokemonABuscar = document.getElementById('searchInput').value.toLowerCase();

    // Llama a la función para obtener información del Pokémon buscado
    obtenerDatosPokemon(pokemonABuscar);
}

function obtenerDatosPokemon(pokemonNombre) {
    // Realiza una solicitud a la API de Pokémon para obtener datos del Pokémon especificado
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonNombre}`)
        .then(response => response.json())
        .then(data => {
            // Maneja los datos y actualiza el contenido de la página
            mostrarInfoPokemon(data);
        })
        .catch(error => {
            console.error('Error:', error);
            mostrarError();
        });
    fetch(`https://pokeapi.co/api/v2/ability/7/${pokemonNombre}`)
        .then(response => response.json())
        .then(data => {
            // Maneja los datos y actualiza el contenido de la página
            mostrarInfoPokemon(data);
        })
        .catch(error => {
            console.error('Error:', error);
            mostrarError();
        });
}

function mostrarInfoPokemon(pokemon) {
    // Obtén el elemento donde se mostrará la información del Pokémon
    const contenedorPokemon = document.getElementById('pokemon-info');

    // Limpia el contenido actual del contenedor
    contenedorPokemon.innerHTML = '';

    // Crea elementos para mostrar el nombre y la imagen del Pokémon
    const nombrePokemon = document.createElement('h2');
    nombrePokemon.textContent = `Nombre: ${pokemon.name}`;

    const imagenPokemon = document.createElement('img');
    imagenPokemon.src = pokemon.sprites.front_default;
    imagenPokemon.alt = `Imagen de ${pokemon.name}`;

    const habilidadPokemon = document.createElement('h2');
    habilidadPokemon.textContent = `Habilidad: ${pokemon.abilities[0].ability.name}`;

    const habilidad2Pokemon = document.createElement('h2');
    habilidad2Pokemon.textContent = `Habilidad 2: ${pokemon.abilities[1].ability.name}`;
    

    // Agrega los elementos al contenedor en la página
    contenedorPokemon.appendChild(nombrePokemon);
    contenedorPokemon.appendChild(imagenPokemon);
    contenedorPokemon.appendChild(habilidadPokemon)
    contenedorPokemon.appendChild(habilidad2Pokemon)

}

function mostrarError() {
    // Obtén el elemento donde se mostrará el mensaje de error
    const contenedorPokemon = document.getElementById('pokemon-info');

    // Limpia el contenido actual del contenedor
    contenedorPokemon.innerHTML = '';

    // Crea un elemento para mostrar el mensaje de error
    const mensajeError = document.createElement('p');
    mensajeError.textContent = '¡Error al obtener datos del Pokémon!';

    // Agrega el elemento al contenedor en la página
    contenedorPokemon.appendChild(mensajeError);
}
