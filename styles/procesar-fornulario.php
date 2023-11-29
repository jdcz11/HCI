<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $mensaje = $_POST["mensaje"];

    // Aquí puedes agregar la lógica para enviar un correo de confirmación al remitente
    $asunto = "Confirmación de mensaje recibido";
    $mensaje_confirmacion = "Hola $nombre,\n\nGracias por contactarnos. Hemos recibido tu mensaje y nos pondremos en contacto contigo pronto.";

    // Configura el encabezado del correo
    $headers = "From: patori-jd@hotmail.com\r\n";
    $headers .= "Reply-To: tu-direccion-de-correo@tu-dominio.com\r\n";
    $headers .= "Content-Type: text/plain; charset=UTF-8\r\n";

    // Envía el correo de confirmación
    mail($email, $asunto, $mensaje_confirmacion, $headers);

    // Muestra un mensaje de éxito en la página
    echo "<p>Mensaje enviado con éxito. Te enviaremos una confirmación por correo electrónico.</p>";
} else {
    // Si alguien trata de acceder directamente a este archivo sin enviar el formulario, redirige a la página de contacto
    header("Location: index.html#contacto");
    exit();
}
?>
