<?php
// Configuración de conexión a la base de datos
$host = 'localhost';
$usuario = 'root';
$contrasena = '1234';
$base_datos = 'nicol';

// Conexión
$conn = new mysqli($host, $usuario, $contrasena, $base_datos);

// Verifica conexión
if ($conn->connect_error) {
    die("Conexión fallida: " . $conn->connect_error);
}

// Validación básica
if (!isset($_POST['nombre'], $_POST['email'], $_POST['telefono'], $_POST['mensaje'])) {
    die("Error: datos del formulario incompletos.");
}

// Obtener y sanitizar datos del formulario
$nombre = trim($_POST['nombre']);
$email = trim($_POST['email']);
$telefono = trim($_POST['telefono']);
$mensaje = trim($_POST['mensaje']);

// Prepara y ejecuta la consulta SQL
$stmt = $conn->prepare("INSERT INTO contactos (nombre, email, telefono, mensaje) VALUES (?, ?, ?, ?)");
if ($stmt === false) {
    die("Error en la preparación de la consulta: " . $conn->error);
}

$stmt->bind_param("ssss", $nombre, $email, $telefono, $mensaje);

if ($stmt->execute()) {
    header("Location: contacto.html?status=success");
    exit();
} else {
    die("Error al ejecutar la consulta: " . $stmt->error);
}

// Cierra conexiones
$stmt->close();
$conn->close();
?>
