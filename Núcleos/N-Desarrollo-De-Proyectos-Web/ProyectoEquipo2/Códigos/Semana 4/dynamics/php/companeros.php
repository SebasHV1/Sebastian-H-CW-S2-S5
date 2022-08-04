<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Mis compañeros :)</title>
    <link rel="stylesheet" href="../../statics/style/Diseño.css">
    <script src=" https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js "></script>
    <link href="../../statics/libs/bootstrap-5.2.0-beta1-dist/css/bootstrap.css" rel="stylesheet">
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
                            $peticion="SELECT NombreCompleto FROM Alumno WHERE ID_NumeroDeCuenta='$USUARIOCUENTA'";
                            $query=mysqli_query($conexion,$peticion);
                            $datos = mysqli_fetch_assoc($query);
                            $NombreBusqueda=implode(", ",$datos);
                            $PrimerNom = explode(" ", $NombreBusqueda);
        
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
                            $peticion="SELECT NombreCompleto FROM Profesor WHERE ID_NumRFC='$USUARIOCUENTA'";
                            $query=mysqli_query($conexion,$peticion);
                            $datos = mysqli_fetch_assoc($query);
                            $NombreBusqueda=implode(", ",$datos);
                            $PrimerNom = explode(" ", $NombreBusqueda);
                        }else{
                            echo("VACIO");
                        }
                    }
                    if($_SESSION["Usuario"]=='Admin'){
                        if (isset($_SESSION["USUARIOADMIN"])){
                            // echo("YES");
                            // echo $_SESSION["RFC"];
                            // BUSQUEDA NOMBREEEEEEEEEEEEEEEEE
                            $USUARIOCUENTA=$_SESSION["USUARIOADMIN"];
                            $PrimerNom = explode(" ", $USUARIOCUENTA);
                        }else{
                            echo("VACIO");
                        }
                    }
                }
                
                // $NombreBusqueda
                echo"
                <nav class='navbar bg-light'>
                    <div class='container-fluid'>
                        <img id='logo' src='../../statics/img/coyote.png' alt='logoENP6'>
                        <span class='navbar-brand mb-0 h1'>Mis compañeros</span>
                        <span class='navbar-brand mb-0 h1 usuario' id='usuario'>- $PrimerNom[0] -</span>
                    </div>
                </nav>
                ";
                


        $contador=0;
        $contadortablas=0;
        // echo $contador;
            
                $conexion=connect();
                // $peticion="SELECT NombreCompleto,Correo,Contacto,ID_Group FROM Alumno WHERE ID_NumeroDeCuenta='$busqueda'";
                if (isset($_SESSION["Usuario"])){
                    // echo("Tipo de sesión:");
                    // echo($_SESSION["Usuario"]);
        
                    if($_SESSION["Usuario"]=='Alumno'){
                        if (isset($_SESSION["NumDeCuenta"])){
                            echo "
                            
                            ";
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
                            <div id='MiInformacion2'>
                            <table border=1 cellpadding=30px>
                            <thead>
                                <tr>
                                    <th colspan='5'><h1>Mis compañer@s:</h1></th>
                                </tr>
                            </thead>
                            <tbody>
                            ";
                            while($row=$resultado->fetch_array()){
                                $nombre= $row['NombreCompleto'];
                                $contacto=$row['Contacto'];
                                $correo=$row['Correo'];
                                $contador++;
                                $contadortablas++;
                                if($contadortablas==0){
                                    echo"<tr class='tablon456'>";

                                }
                                echo"
                                    <td class='vacio'>
                                        <td class='tablon123'>Nombre: $nombre<br>
                                        Contacto: $contacto<br>
                                        Correo: $correo<br>
                                        </td>
                                    </td>
                                        
                                ";
                                if($contadortablas==5){
                                    echo("<br>");
                                    echo("<td class='vacio'>");
                                    echo("</td>");
                                    echo("<tr>");
                                    echo ("<td>");
                                        echo("<br>");
                                    echo ("</td");
                                    echo("</tr>");
                                    echo"</tr>";
                                    $contadortablas=0;
                                }
                    }
                    echo("</tbody>");
                    echo("</table>");
                    echo("<br><br>");
                    
                    echo ("Número total de compañer@s: $contador <form action='./tablon.php' method='post'>
                    <button type='submit'>Regresar al tablón principal </button>
                    </form> </Div>");
                }
                // $datos2 = mysqli_fetch_assoc($query);
                // $grupo=implode(",",$datos2);
                // echo $grupo;
                echo"
                        
                ";
        
                        }else{
                            echo("VACIO");
                        }
                    }
                    if($_SESSION["Usuario"]=='Profesor' ||$_SESSION["Usuario"]=='Admin' ){
                        if (isset($_SESSION["Usuario"])){
                            // echo("YES");
                            // echo $_SESSION["RFC"];
                            // BUSQUEDA NOMBREEEEEEEEEEEEEEEEE
                            echo "
                            <div id='MiInformacion'>
                            ";
                            echo("Opción solamente para los alumnos");
                            echo("<br>");
                            echo ("<img src='../../statics/img/Admins2.jpg' width='300' height='300'></div>");
                            echo"
                                <form action='./tablon.php' method='post'>
                                    <button type='submit'><img src='../../statics/img/Admins3.jpg' width='290' height='290'></button>
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