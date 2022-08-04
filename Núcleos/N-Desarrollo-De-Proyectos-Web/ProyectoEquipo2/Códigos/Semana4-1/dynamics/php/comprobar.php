<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Registro completo</title>
</head>
<body>
    <?php

    include("./config.php");
    require_once "seguridad.php";
    $conexion=connect();

    $nombre     =(isset($_POST["nombre"]) && $_POST["nombre"] != "") ?$_POST["nombre"] : false; //GLOBAL
    $apellidos  =(isset($_POST["apellidos"]) && $_POST["apellidos"] != "") ?$_POST["apellidos"] : false; //GLOBAL
    $NumDeCuenta=(isset($_POST["NumDeCuenta"]) && $_POST["NumDeCuenta"] != "") ?$_POST["NumDeCuenta"] : false; //ALUMNO
    $grupo =(isset($_POST["Grupo"]) && $_POST["Grupo"] != "") ?$_POST["Grupo"] : false; //ALUMNO
    $NumDeContacto=(isset($_POST["NumDeContacto"]) && $_POST["NumDeContacto"] != "") ?$_POST["NumDeContacto"] : false; //GLOBAL
    $correo  =(isset($_POST["correo"]) && $_POST["correo"] != "") ?$_POST["correo"] : false; //GLOBAL
    $contra  =(isset($_POST["contra"]) && $_POST["contra"] != "") ?$_POST["contra"] : false; //GLOBAL
    $comprobar  =(isset($_POST["comprobar"]) && $_POST["comprobar"] != "") ?$_POST["comprobar"] : false; //GLOBAL
    $usuario =(isset($_POST["es"]) && $_POST["es"] != "") ?$_POST["es"] : false; //GLOBAL SELECT MAESTRO
    $RFC =(isset($_POST["NumDeRFC"]) && $_POST["NumDeRFC"] != "") ?$_POST["NumDeRFC"] : false; //MAESTRO
    
    $nombreCom= "$nombre "."$apellidos"; //Nombre Completo
    if($usuario=='Profesor'){

        echo("Registro para profesor");
        echo "<br><br>";
        if($contra == $comprobar){
            echo ("Son iguales las contraseñas, continuar");
            echo "<br><br>";

            $sal_base=uniqid();
            // echo "Sal $sal_base"; //Guardar base
            // echo "<br><br>";

            $pimienta=generar_pimienta();
            // echo "Pimienta: ".$pimienta; //Guardar base
            // echo "<br><br>";

            $contra=hash("sha256",$contra .$pimienta. $sal_base);

            // echo $contra;
            // echo "<br><br>";
            // echo "<br><br>";

            $IDNUMCUENTA=0;
            if($nombreCom && $RFC && $contra && $correo && $NumDeContacto &&$sal_base && $pimienta){
                $peticion3="SELECT ID_NumRFC FROM PROFESOR WHERE ID_NumRFC='$RFC'";
                $query5=mysqli_query($conexion,$peticion3);
                if($query5){
                    while($row=$query5->fetch_array()){
                        $IDNUMCUENTA= $row['ID_NumRFC'];
                    }
                }
                if ($IDNUMCUENTA==$RFC){
                    echo("No se puede registrar porque el RFC: $IDNUMCUENTA ya lo tenemos en nuestra base.");
                    echo "<form id='iniciar' action='../../templates/FormularioRegistro.html' method='post'>
                            <button type='submit'>Regresar al Registro </button>
                        </form>";
                }else{    
                echo "Los datos que se registraron fueron: ";      
                echo ("Se cumple");
                $peticion="INSERT INTO PROFESOR (NombreCompleto,ID_NumRFC,Contrasena,Correo,Contacto,Sal,Pim) VALUES('$nombreCom','$RFC','$contra','$correo','$NumDeContacto','$sal_base','$pimienta')";
                $query=mysqli_query($conexion,$peticion);
    
                // $datos = mysqli_fetch_array($query, MYSQLI_ASSOC); 
                // echo $datos;       Quitar comentario para ver erro
                echo "<table border=1 cellpadding=25px>
                    <thead>
                        <tr>
                            <th colspan='5'><h1>Tipo de usuario: $usuario</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><br><br>Nombre Completo: $nombreCom</td>
                            <td><br><br>Tu RFC: $RFC</td>
                            <td><br><br>Tu correo electrónico: $correo</td>
                        </tr>
                        <tr>
                            <td><br><br>Tu contraseña</td>
                            <td><br><br>Tu contacto: $NumDeContacto</td>
                        </tr>
                    </tbody>
                </table>";
                
                echo "<form id='iniciar' action='../../index.php' method='post'>
                        <button type='submit'>Regresar al inicio de sesión </button>
                    </form>";
                }
            }else{
                echo ("No coinciden las contraseñas ;(");
                echo "<form id='iniciar' action='../../templates/FormularioRegistro.html' method='post'>
                        <button type='submit'>Regresar al inicio de sesión </button>
                    </form>";
            }
            echo "<br><br>";
        }
    }
    if($usuario=='Alumno'){
        echo("Registro para alumno");
        echo "<br><br>";
        
        if($contra == $comprobar){
            echo ("Son iguales las contraseñas, continuar");
            echo "<br><br>";

            $sal_base=uniqid();
            // echo "Sal $sal_base"; //Guardar base
            // echo "<br><br>";

            $pimienta=generar_pimienta();
            // echo "Pimienta: ".$pimienta; //Guardar base
            // echo "<br><br>";

            $contra=hash("sha256",$contra .$pimienta. $sal_base);

            // echo $contra;
            // echo "<br><br>";
            // echo "<br><br>";

            $IDNUMCUENTA=0;
            if($nombreCom && $NumDeCuenta && $contra && $correo && $NumDeContacto && $grupo && $sal_base && $pimienta){
                $peticion3="SELECT ID_NumeroDeCuenta FROM ALUMNO WHERE ID_NumeroDeCuenta='$NumDeCuenta'";
                $query5=mysqli_query($conexion,$peticion3);
                if($query5){
                    while($row=$query5->fetch_array()){
                        $IDNUMCUENTA= $row['ID_NumeroDeCuenta'];
                    }
                }
                if ($IDNUMCUENTA==$NumDeCuenta){
                    echo("No se puede registrar porque el Número de Cuenta: $IDNUMCUENTA ya lo tenemos en nuestra base.");
                    echo "<form id='iniciar' action='../../templates/FormularioRegistro.html' method='post'>
                            <button type='submit'>Regresar al Registro </button>
                        </form>";
                }else{                
                echo ("Se cumple");
                $peticion="INSERT INTO ALUMNO (NombreCompleto,ID_NumeroDeCuenta,Contrasena,Correo,Contacto,ID_Group,Sal,Pim) VALUES('$nombreCom','$NumDeCuenta','$contra','$correo','$NumDeContacto','$grupo','$sal_base','$pimienta')";            // $query=mysqli_query($conexion,$peticion);
                $query=mysqli_query($conexion,$peticion);
                // $datos = mysqli_fetch_array($query, MYSQLI_ASSOC); 
                // echo $datos;       Quitar comentario para ver erro
                if($query){
                echo "Los datos que se registraron fueron: ";
                echo "<table border=1 cellpadding=25px>
                    <thead>
                        <tr>
                            <th colspan='5'><h1>Tipo de usuario: $usuario</h1></th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td><br><br>Nombre Completo: $nombreCom</td>
                            <td><br><br>Tu número de cuenta: $NumDeCuenta</td>
                            <td><br><br>Tu correo electrónico: $correo</td>
                        </tr>
                        <tr>
                            <td><br><br>Tu contraseña</td>
                            <td><br><br>Tu grupo: $grupo</td>
                            <td><br><br>Tu contacto: $NumDeContacto</td>
                        </tr>
                    </tbody>
                </table>";
            
                echo "<form id='iniciar' action='../../index.php' method='post'>
                        <button type='submit'>Regresar al inicio de sesión </button>
                    </form>";
                }else{
                    echo ("No coinciden las contraseñas ;(");
                    echo "<form id='iniciar' action='../../templates/FormularioRegistro.html' method='post'>
                            <button type='submit'>Regresar al inicio de sesión </button>
                        </form>";
                }
                echo "<br><br>";
            }
        }
    }
    }
    
    
    ?>
         
</body>
</html>