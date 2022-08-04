<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mi perfil :)</title>
</head>
<body>
        <?php
                session_name("SesionComprobarInicio");
                session_id("0000121");
                session_start();
                require("./config.php");
                $conexion=connect();

                if (isset($_SESSION["Usuario"])){
                        // echo("Tipo de sesión:");
                        // echo($_SESSION["Usuario"]);
            
                        if($_SESSION["Usuario"]=='Alumno'){
                            if (isset($_SESSION["NumDeCuenta"])){
                                // echo(". Numero de cuenta: ");
                                // echo $_SESSION["NumDeCuenta"];
                                // BUSQUEDA NOMBREEEEEEEEEEEEEEEEE
                                $USUARIOCUENTA=$_SESSION["NumDeCuenta"];
                                // $peticion="SELECT NombreCompleto FROM Alumno WHERE ID_NumeroDeCuenta='$USUARIOCUENTA'";
                                // $query=mysqli_query($conexion,$peticion);
                                // $datos = mysqli_fetch_assoc($query);
                                // $NombreBusqueda=implode(", ",$datos);
                                // $PrimerNom = explode(" ", $NombreBusqueda);
                                echo ("Mi número de cuenta :");
                                echo $USUARIOCUENTA;
                                echo ("<br>");
                                echo ("Mi nombre: ");
                                
                                // $peticion="SELECT NombreCompleto,Correo,Contacto,ID_Group FROM Alumno WHERE ID_NumeroDeCuenta='$busqueda'";
                                $peticion="SELECT NombreCompleto FROM Alumno WHERE ID_NumeroDeCuenta='$USUARIOCUENTA'";
                                $query=mysqli_query($conexion,$peticion);
                                $datos = mysqli_fetch_assoc($query);
                                $json2=implode(", ",$datos);
                                echo $json2;
                                echo ("<br>");
                                echo ("Mi contacto: ");
                                $peticion2="SELECT Contacto FROM Alumno WHERE ID_NumeroDeCuenta='$USUARIOCUENTA'";
                                $query=mysqli_query($conexion,$peticion2);
                                $datos = mysqli_fetch_assoc($query);
                                $json2=implode(", ",$datos);
                                echo $json2;
                                echo("<br>");
                                echo("Mi correo: ");
                                $peticion3="SELECT Correo FROM Alumno WHERE ID_NumeroDeCuenta='$USUARIOCUENTA'";
                                $query=mysqli_query($conexion,$peticion3);
                                $datos = mysqli_fetch_assoc($query);
                                $json2=implode(", ",$datos);
                                echo $json2;
                                echo("<br>");
                                echo ("Mi grupo: ");
                                $peticion4="SELECT ID_Group FROM Alumno WHERE ID_NumeroDeCuenta='$USUARIOCUENTA'";
                                $query=mysqli_query($conexion,$peticion4);
                                $datos = mysqli_fetch_assoc($query);
                                $json2=implode(", ",$datos);
                                echo $json2;
                            }else{
                                echo("VACIO");
                            }
                        }
                        if($_SESSION["Usuario"]=='Profesor'){
                            if (isset($_SESSION["RFC"])){
                                // echo("YES");
                                // echo $_SESSION["RFC"];
                                // BUSQUEDA NOMBREEEEEEEEEEEEEEEEE
                                $USUARIOCUENTA=$_SESSION["RFC"];
                                // $peticion="SELECT NombreCompleto FROM Profesor WHERE ID_NumRFC='$USUARIOCUENTA'";
                                // $query=mysqli_query($conexion,$peticion);
                                // $datos = mysqli_fetch_assoc($query);
                                // $NombreBusqueda=implode(", ",$datos);
                                // $PrimerNom = explode(" ", $NombreBusqueda);
                                echo("Mi perfil de profesor: ");
                                echo ("<br>");
                                echo ("Mi RFC: $USUARIOCUENTA");
                                echo ("<br>");
                                echo ("Mi nombre: ");
                                
                                // $peticion="SELECT NombreCompleto,Correo,Contacto,ID_Group FROM Alumno WHERE ID_NumeroDeCuenta='$busqueda'";
                                $peticion="SELECT NombreCompleto FROM Profesor WHERE ID_NumRFC='$USUARIOCUENTA'";
                                $query=mysqli_query($conexion,$peticion);
                                $datos = mysqli_fetch_assoc($query);
                                $json2=implode(", ",$datos);
                                echo $json2;
                                echo ("<br>");
                                echo ("Mi contacto: ");
                                $peticion2="SELECT Contacto FROM Profesor WHERE ID_NumRFC='$USUARIOCUENTA'";
                                $query=mysqli_query($conexion,$peticion2);
                                $datos = mysqli_fetch_assoc($query);
                                $json2=implode(", ",$datos);
                                echo $json2;
                                echo("<br>");
                                echo("Mi correo: ");
                                $peticion3="SELECT Correo FROM Profesor WHERE ID_NumRFC='$USUARIOCUENTA'";
                                $query=mysqli_query($conexion,$peticion3);
                                $datos = mysqli_fetch_assoc($query);
                                $json2=implode(", ",$datos);
                                echo $json2;
                                echo("<br>");
                            }else{
                                echo("VACIO");
                            }
                        }
                    }
                
                echo"
                        <form action='./tablon.php' method='post'>
                                <button type='submit'>Regresar al tablón principal </button>
                        </form>
                ";
        ?>
        
</body>
</html>