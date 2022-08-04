<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mis compañeros :)</title>
</head>
<body>
        <?php
        $contador=0;
        $contadortablas=0;
        // echo $contador;
                session_name("SesionComprobarInicio");
                session_id("0000121");
                session_start();
                require("./config.php");
                $conexion=connect();
                // $peticion="SELECT NombreCompleto,Correo,Contacto,ID_Group FROM Alumno WHERE ID_NumeroDeCuenta='$busqueda'";
                if (isset($_SESSION["Usuario"])){
                    // echo("Tipo de sesión:");
                    // echo($_SESSION["Usuario"]);
        
                    if($_SESSION["Usuario"]=='Alumno'){
                        if (isset($_SESSION["NumDeCuenta"])){
                            // echo(". Numero de cuenta: ");
                            $busqueda=$_SESSION["NumDeCuenta"];
                            // BUSQUEDA NOMBREEEEEEEEEEEEEEEEE
                            $peticion="SELECT ID_Group FROM Alumno WHERE ID_NumeroDeCuenta='$busqueda'";
                            $query=mysqli_query($conexion,$peticion);
                            $datos = mysqli_fetch_assoc($query);
                            $grupo=implode(", ",$datos);
                            // echo ("Nombre:");
                            $peticion2="SELECT NombreCompleto,Contacto,Correo FROM Alumno WHERE ID_GROUP='$grupo'";
                            $resultado=mysqli_query($conexion,$peticion2);
                            if($resultado){
                            echo"
                            <table border=1 cellpadding=30px>
                            <thead>
                                <tr>
                                    <th colspan='5'><h1>Mis compañer@s:</h1></th>
                                </tr>
                            </thead>
                            ";
                            while($row=$resultado->fetch_array()){
                                $nombre= $row['NombreCompleto'];
                                $contacto=$row['Contacto'];
                                $correo=$row['Correo'];
                                $contador++;
                                $contadortablas++;
                                echo"
                                    <tr>
                                        <td>Nombre: $nombre<br>
                                        Contacto: $contacto<br>
                                        Correo: $correo<br>
                                        </td>
                                    </tr>
                                        
                                ";
                    }
                    echo ("Número total de compañer@s: $contador");
                }
                // $datos2 = mysqli_fetch_assoc($query);
                // $grupo=implode(",",$datos2);
                // echo $grupo;
                echo"
                        <form action='./tablon.php' method='post'>
                                <button type='submit'>Regresar al tablón principal </button>
                        </form>
                ";
        
                        }else{
                            echo("VACIO");
                        }
                    }
                    if($_SESSION["Usuario"]=='Profesor'){
                        if (isset($_SESSION["RFC"])){
                            // echo("YES");
                            // echo $_SESSION["RFC"];
                            // BUSQUEDA NOMBREEEEEEEEEEEEEEEEE
                            echo("Opción para alumnos por el momento");
                            $USUARIOCUENTA=$_SESSION["RFC"];
                            $peticion="SELECT NombreCompleto FROM Profesor WHERE ID_NumRFC='$USUARIOCUENTA'";
                            $query=mysqli_query($conexion,$peticion);
                            $datos = mysqli_fetch_assoc($query);
                            $NombreBusqueda=implode(", ",$datos);
                            echo"
                                <form action='./tablon.php' method='post'>
                                    <button type='submit'>Regresar al tablón principal </button>
                                </form>
                            ";
                        }else{
                            echo("VACIO");
                        }
                    }
                }
                
        ?>
        
</body>
</html>