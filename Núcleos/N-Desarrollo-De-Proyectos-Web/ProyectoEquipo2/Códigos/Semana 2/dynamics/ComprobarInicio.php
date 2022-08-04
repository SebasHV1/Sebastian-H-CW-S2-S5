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
$NumDeCuenta=(isset($_POST["NumDeCuenta"]) && $_POST["NumDeCuenta"] != "") ?$_POST["NumDeCuenta"] : "no especifico";
$correo  =(isset($_POST["correo"]) && $_POST["correo"] != "") ?$_POST["correo"] : "no especifico";
$usuario =(isset($_POST["es"]) && $_POST["es"] != "") ?$_POST["es"] : "no especifico";
    echo "<table border=1 cellpadding=25px>
        <thead>
            <tr>
                <th colspan='4'><h1>$usuario</h1></th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td><br><br>$NumDeCuenta
                <td><br><br>$correo
            </tr>
        </tbody>
    </table>";
    ?>
</body>
</html>