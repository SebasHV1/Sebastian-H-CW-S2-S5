<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php
        $nombre = (isset($_POST["nombre"]) && $_POST["nombre"] != "")? $_POST['nombre'] : "no especifico";
        $apellidos = (isset($_POST["apellidos"]) && $_POST["apellidos"] != "")? $_POST['apellidos'] : "no especifico";
        $edad = (isset($_POST["Edad"]) && $_POST["Edad"] != "")? $_POST['Edad'] : "no especifico";
        $direccion = (isset($_POST['direccion']) && $_POST["direccion"] != "")? $_POST['direccion'] : "no especifico";
        $boletos = (isset($_POST['numerbol']) && $_POST["numerbol"] != "")? $_POST['numerbol'] : "no especifico";
        $tipo = (isset($_POST['Tipos']) && $_POST["Tipos"] != "")? $_POST['Tipos'] : "no especifico";
        
    ?>
    <table border="1" style="border-collapse: collapse;" cellpadding="25px" >
        <thead>
                <tr>
                    <th colspan="4"> SIX FLAGS</th>
                </tr>
        </thead>
        <tr>
            <td>
            <?php
                echo $nombre
            ?>
            </td>
            <td>
            <?php
                echo $apellidos
            ?>
            </td>
            <td>
            <?php
                echo $edad
            ?>
            </td>
            <td rowspan="2">
            <?php
                if ($tipo=='value1')
                {
                    echo "<img src=\"a.jpg\">";
                }
                if ($tipo=='value2')
                {
                    echo "<img src=\"fls.jfif\">";
                }
                if ($tipo=='value3')
                {
                    echo "<img src=\"dd.jpg\">";
                }
                if ($tipo=='value4')
                {
                    echo "<img src=\"bat.jfif\">";
                }
                if ($tipo=='value5')
                {
                    echo "<img src=\"SUP.jpg\">";
                }
            ?>
            </td>
        </tr>
        <tr>
            <td>
            <?php
                echo $direccion
            ?>
            </td>
            <td>
            <?php
                echo $boletos
            ?>
            </td>
            <td>
            <?php
                if ($tipo=='value1')
                {
                    echo 'Boleto de un Día';
                }
                if ($tipo=='value2')
                {
                    echo 'Flash Pass';
                }
                if ($tipo=='value3')
                {
                    echo 'Gente Rica';
                }
                if ($tipo=='value4')
                {
                    echo 'Batman Pass';
                }
                if ($tipo=='value5')
                {
                    echo 'Superman Pass';
                }
            ?>
            </td>
        </tr>
    </table>

</body>
</html>