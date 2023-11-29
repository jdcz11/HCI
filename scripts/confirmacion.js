//Obtén el formulario y el div del mensaje de éxito
const formulario = document.querySelector('form');
const mensajeExito = document.getElementById('mensaje-exito');

//Agrega un evento al formulario para manejar el envío
formulario.addEventListener('submit', function (event) {
    // Evita que el formulario se envíe normalmente
    event.preventDefault();

    // Simula el envío del formulario (puedes hacer la llamada AJAX aquí)
    // ... Código de envío del formulario ...

    // Muestra el mensaje de éxito
    mensajeExito.style.display = 'block';

    // Oculta el mensaje después de 3 segundos
    setTimeout(function () {
        mensajeExito.style.display = 'none';
    }, 3000); // 3000 milisegundos = 3 segundos

    // Puedes agregar más acciones aquí si es necesario
});

