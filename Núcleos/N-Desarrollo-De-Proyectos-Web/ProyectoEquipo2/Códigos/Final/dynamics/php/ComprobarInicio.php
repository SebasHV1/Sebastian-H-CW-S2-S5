<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Comprobar inicio</title>
</head>

<body>
    
    <?php

        session_name("SesionComprobarInicio");
        session_id("0000121");
        session_start();
        include("./config.php");
        require_once "seguridad.php";
        $conexion=connect();
        
        $NumDeCuenta=(isset($_POST["NumDeCuenta"]) && $_POST["NumDeCuenta"] != "") ?$_POST["NumDeCuenta"] : false;
        $contra  =(isset($_POST["contra"]) && $_POST["contra"] != "") ?$_POST["contra"] : false;
        $correo  =(isset($_POST["correo"]) && $_POST["correo"] != "") ?$_POST["correo"] : false;
        $RFC =(isset($_POST["NumDeRFC"]) && $_POST["NumDeRFC"] != "") ?$_POST["NumDeRFC"] : false;               
        $usuario =(isset($_POST["es"]) && $_POST["es"] != "") ?$_POST["es"] : false;
        $USERADMIN=(isset($_POST["USERADMIN"]) && $_POST["USERADMIN"] != "") ?$_POST["USERADMIN"] : false;
        
        
        function IniciarSesionMYSQL($NumDeCuenta,$conexion,$correo)
        {
            $peticion="SELECT * FROM Alumno WHERE ID_NumeroDeCuenta ='$NumDeCuenta'  AND Correo='$correo'";
            $query = mysqli_query($conexion, $peticion);
            $informacion = mysqli_fetch_array($query, MYSQLI_ASSOC);
            return $informacion;
        }

        function IniciarSesionMYSQLProfesor($RFC,$conexion,$correo){
            $peticion="SELECT * FROM Profesor WHERE ID_NumRFC ='$RFC' AND Correo='$correo'";
            $query = mysqli_query($conexion, $peticion);
            $informacion = mysqli_fetch_array($query, MYSQLI_ASSOC);
            return $informacion;
        }

        function IniciarSesionMYSQLAdmin($USERADMIN,$conexion){
            $peticion="SELECT * FROM Admin WHERE UserAdmin ='$USERADMIN'";
            $query = mysqli_query($conexion, $peticion);
            $informacion = mysqli_fetch_array($query, MYSQLI_ASSOC);
            return $informacion;
        }
        
        if($usuario=='Alumno'){
            // echo ("Inicio de sesión para alumno");
            if($NumDeCuenta !== false){
                if(IniciarSesionMYSQL($NumDeCuenta,$conexion,$correo)===NULL){
                    echo "<h1>Inicio de sesión fallido :(  !</h1>";
                    echo "<br>";
                    echo "Verifica tu número de cuenta junto con tu correo para poder ingresar al sitio";
                    echo "
                        <br><br>
                        <form action='./cerrarsesion.php' method='post' target='_self'>
                            <button type='submit'> Cerrar Sesión</button>
                        </form>
                    ";
                }else{
                    $_SESSION["Usuario"]=$usuario;
                    $_SESSION["NumDeCuenta"]=$NumDeCuenta;
                    $peticion2="SELECT Contrasena,Sal,Pim FROM Alumno WHERE ID_NumeroDeCuenta='$NumDeCuenta'";
                    $resultado=mysqli_query($conexion,$peticion2);
                    if($resultado){
                        while($row=$resultado->fetch_array()){
                            $hash_guardado= $row['Contrasena'];
                            $sal=$row['Sal'];
                            $Pim=$row['Pim'];
                        }

                        if(verificar_contra_pimienta($contra,$sal,$hash_guardado,$Pim)){
                            header("Location:./tablon.php");                        
                        }else{
                            echo "<h1>Inicio de sesión fallido :(  !</h1>";
                            echo "<br>";
                            echo "Verifica tu contraseña para poder ingresar al sitio";
                            echo "
                                <br><br>
                                <form action='./cerrarsesion.php' method='post' target='_self'>
                                    <button type='submit'> Cerrar Sesión</button>
                                </form>
                            ";
                        }
                    }
                } 
            }
        }
        if($usuario=='Profesor'){
            $_SESSION['Rol']="Profesor";
            // echo ("Inicio de sesión para profesor");
            if($RFC !== false){
                if(IniciarSesionMYSQLProfesor($RFC,$conexion,$correo)===NULL){
                    echo "<h1>Inicio de sesión fallido :(  !</h1>";
                    echo "<br>";
                    echo "Verifica tu número de cuenta junto con tu correo para poder ingresar al sitio";
                    echo "
                        <br><br>
                        <form action='./cerrarsesion.php' method='post' target='_self'>
                            <button type='submit'> Cerrar Sesión</button>
                        </form>
                    ";
                }else{
                    $_SESSION["Usuario"]=$usuario;
                    $_SESSION["RFC"]=$RFC;
                    $peticion2="SELECT Contrasena,Sal,Pim FROM Profesor WHERE ID_NumRFC='$RFC'";
                    $resultado=mysqli_query($conexion,$peticion2);
                    if($resultado){
                        while($row=$resultado->fetch_array()){
                            $hash_guardado= $row['Contrasena'];
                            $sal=$row['Sal'];
                            $Pim=$row['Pim'];
                        }
                        // echo "<br>";
                        // echo ("Contraseña: $hash_guardado") ;
                        // echo "<br>";
                        // echo ("S: $sal");
                        // echo "<br>";
                        // echo ("P: $Pim");
                        // echo "<br>";

                        if(verificar_contra_pimienta($contra,$sal,$hash_guardado,$Pim)){
                            header("Location:./tablon.php");
                        }else{
                            echo "<br>";
                            // echo("Los hashes no coinciden");
                            echo "<h1>Inicio de sesión fallido :(  !</h1>";
                            echo "<br>";
                            echo "Verifica tu contraseña para poder ingresar al sitio";
                            echo "
                                <br><br>
                                <form action='./cerrarsesion.php' method='post' target='_self'>
                                    <button type='submit'> Cerrar Sesión</button>
                                </form>
                                ";
                            
                        }
                    }
                       
                 }
            }
        }
        if($usuario=='Admin'){
            // $_SESSION['Rol']="Profesor";
            // echo ("Inicio de sesión para profesor");
            if($USERADMIN !== false){
                if(IniciarSesionMYSQLAdmin($USERADMIN,$conexion)===NULL){
                    echo "<h1>Inicio de sesión fallido :(  !</h1>";
                    echo "<br>";
                    echo "Hay de 2... o te equivocaste en los datos o tu no ere admin :[";
                    echo "
                        <br><br>
                        <form action='./cerrarsesion.php' method='post' target='_self'>
                            <button type='submit'> Cerrar Sesión</button>
                        </form>
                    ";
                }else{
                    $_SESSION["Usuario"]=$usuario;
                    $_SESSION["USUARIOADMIN"]=$USERADMIN;
                    $peticion2="SELECT Contraseña,Sal,Pim FROM Admin WHERE UserAdmin ='$USERADMIN'";
                    $resultado=mysqli_query($conexion,$peticion2);
                    if($resultado){
                        while($row=$resultado->fetch_array()){
                            $hash_guardado= $row['Contraseña'];
                            $sal=$row['Sal'];
                            $Pim=$row['Pim'];
                        }
                        if(verificar_contra_pimienta($contra,$sal,$hash_guardado,$Pim)){
                            header("Location:./tablon.php");
                        }else{
                            echo "<br>";
                            // echo("Los hashes no coinciden");
                            echo "<h1>Inicio de sesión fallido :(  !</h1>";
                            echo "<br>";
                            echo "Verifica tu contraseña para poder ingresar al sitio";
                            echo "
                                <br><br>
                                <form action='./cerrarsesion.php' method='post' target='_self'>
                                    <button type='submit'> Cerrar Sesión</button>
                                </form>
                                ";
                            
                        }
                    }
                       
                 }
            }
        }
        

        ?>       
</body>
</html>