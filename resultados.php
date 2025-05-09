
<!DOCTYPE html>
<html>
<head>
    <title>Mensaje enviados recientemente</title>
    <link rel="stylesheet" href="resultados.css">
</head>

<style>

body {
    font-family: 'Arial', sans-serif;
    background-color: #f5f5f5;
    margin: 0;
    padding: 20px;
    color: #333;
}

h2 {
    text-align: center;
    color: #ff0000;
    margin-bottom: 30px;
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 1px;
}

/* Estilos de la tabla */
table {
    width: 90%;
    max-width: 1200px;
    margin: 20px auto;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
    border-collapse: collapse;
    overflow: hidden;
}

th {
    background-color: #ff0000;
    color: red;
    font-weight: 600;
    text-transform: uppercase;
    padding: 15px;
    letter-spacing: 0.5px;
    border: none;
}

td {
    padding: 12px 15px;
    border-bottom: 1px solid #eee;
    color: #666;
}

tr:nth-child(even) {
    background-color: #f9f9f9;
}

tr:hover {
    background-color: #f5f5f5;
    transition: background-color 0.3s ease;
}

/* Estilos responsivos */
@media screen and (max-width: 768px) {
    table {
        width: 100%;
        margin: 10px 0;
    }

    th, td {
        padding: 10px;
        font-size: 14px;
    }

    h2 {
        font-size: 1.5rem;
    }
}

/* Mensaje cuando no hay datos */
p {
    text-align: center;
    color: #666;
    font-size: 1.1rem;
    margin: 20px 0;
    padding: 20px;
    background: white;
    border-radius: 10px;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.1);
}

</style>
<body>

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

// Consulta para obtener todos los datos
$sql = "SELECT * FROM contactos";
$resultado = $conn->query($sql);

// Mostrar resultados
echo "<!DOCTYPE html>
<html>
<head>
    <title>Mensaje enviados</title>
    <style>
        table {
            width: 80%;
            border-collapse: collapse;
            margin: 20px auto;
        }
        th, td {
            padding: 10px;
            border: 1px solid #999;
            text-align: center;
        }
        th {
            background-color: #f2f2f2;
        }
    </style>
</head>
<body>
<h2 style='text-align: center;'>Mensaje enviados</h2>";

if ($resultado->num_rows > 0) {
    echo "<table>
            <tr>
                <th>ID</th>
                <th>Nombre</th>
                <th>Email</th>
                <th>Teléfono</th>
                <th>Mensaje</th>
            </tr>";
    
    while ($fila = $resultado->fetch_assoc()) {
        echo "<tr>
                <td>{$fila['id']}</td>
                <td>{$fila['nombre']}</td>
                <td>{$fila['email']}</td>
                <td>{$fila['telefono']}</td>
                <td>{$fila['mensaje']}</td>
              </tr>";
    }
    echo "</table>";
} else {
    echo "<p style='text-align: center;'>No se encontraron contactos.</p>";
}

echo "</body></html>";

// Cierra la conexión
$conn->close();
?>
</body>
</html>