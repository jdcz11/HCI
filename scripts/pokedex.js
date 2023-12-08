/*document.addEventListener('DOMContentLoaded', function () {
    // Llama a la función inicial para cargar información de Ditto al cargar la página
    obtenerDatosPokemon('ditto');
});*/

// Obtén el elemento de entrada de búsqueda y el botón de búsqueda
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('search-button');

// Agrega un evento de escucha para la tecla "Enter" en el campo de búsqueda
searchInput.addEventListener('keyup', function(event) {
    // Verifica si la tecla presionada es "Enter"
    if (event.key === 'Enter') {
        // Llama a la función buscarPokemon() al presionar "Enter"
        buscarPokemon();
    }
});

// También, puedes agregar un evento de clic al botón de búsqueda
searchButton.addEventListener('click', function() {
    buscarPokemon();
});

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

    // Crea un contenedor para los elementos del Pokémon
    const pokemonContainer = document.createElement('div');
    pokemonContainer.classList.add('pokemon-container');

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

    // Agrega los elementos al contenedor del Pokémon
    pokemonContainer.appendChild(nombrePokemon);
    pokemonContainer.appendChild(imagenPokemon);
    pokemonContainer.appendChild(habilidadPokemon);
    pokemonContainer.appendChild(habilidad2Pokemon);

    // Agrega el contenedor del Pokémon al contenedor principal en la página
    contenedorPokemon.appendChild(pokemonContainer);
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
