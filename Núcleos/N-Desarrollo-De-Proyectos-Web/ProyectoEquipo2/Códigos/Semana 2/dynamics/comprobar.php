<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Boletos vista</title>
</head>
<body>
<?php
$nombre     =(isset($_POST["nombre"]) && $_POST["nombre"] != "") ?$_POST["nombre"] : "no especifico";
$apellidos  =(isset($_POST["apellidos"]) && $_POST["apellidos"] != "") ?$_POST["apellidos"] : "no especifico";
$NumDeCuenta=(isset($_POST["NumDeCuenta"]) && $_POST["NumDeCuenta"] != "") ?$_POST["NumDeCuenta"] : "no especifico";
$correo  =(isset($_POST["correo"]) && $_POST["correo"] != "") ?$_POST["correo"] : "no especifico";
$contra  =(isset($_POST["contra"]) && $_POST["contra"] != "") ?$_POST["contra"] : "no especifico";
$usuario =(isset($_POST["es"]) && $_POST["es"] != "") ?$_POST["es"] : "no especifico";

$nombreCom= "$nombre "."$apellidos";

/*include("./config.php");
$conexion= connect();

$peticion= "SELECT * FROM proyectoClass";

$query = mysqli_query($conexion, $peticion);

/////////while($row = mysqli_fetch_array($query, MYSQLI_ASSOC)){
    var_dump($row);
    echo "<br/><br/>";
}/////////////esto no
//$datos = mysqli_fetch_array($query, MYSQLI_ASSOC);

$peticion = "INSERT INTO proyectoClass VALUES ('$nombreCom', $NumDeCuenta, '$correo', '$contra')";

$query = mysqli_query($conexion, $peticion);

var_dump($query);


//////////////se arreglara///////////


*/
    echo "<table border=1 cellpadding=25px>
        <thead>
            <tr>
                <th colspan='5'><h1>$usuario</h1></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><br><br>$nombre</td>
                <td><br><br>$apellidos</td>
                <td><br><br>$nombreCom</td>
                <td><br><br>$NumDeCuenta</td>
                <td><br><br>$correo</td>
            </tr>
        </tbody>
    </table>";
    ?>
</body>
</html>