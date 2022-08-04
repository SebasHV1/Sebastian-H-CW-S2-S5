<?php
    session_name("SesionComprobarInicio");
    session_id("0000121");
    session_start();
    require("./config.php");

    $conexion=connect();

    $Pendiente = (isset($_POST["tareaN"]) && $_POST["tareaN"] != "") ?$_POST["tareaN"] : false;
    

    if($_SESSION["Usuario"]=='Alumno'){
        if (isset($_SESSION["NumDeCuenta"])){
            $USUARIOCUENTA=$_SESSION["NumDeCuenta"];

            $peticion3="SELECT ID_Alumno FROM Alumno WHERE ID_NumeroDeCuenta='$USUARIOCUENTA'";
            $query=mysqli_query($conexion,$peticion3);
            $datos = mysqli_fetch_assoc($query);
            $json2=implode(", ",$datos); //ID ALUMNO VARIABLE
            // echo $json2;
 

            $peticion4="INSERT INTO alumnohasrecordatorio VALUES(null,'$json2','$Pendiente')";
            $query = mysqli_query($conexion, $peticion4);
            
            if($query==false){
                $respuesta = array("ok"=>false, "texto"=>"No se pudo ingresar a la base");
                // echo mysqli_error($conexion);
                echo json_encode($respuesta);
            }
            else{
                $respuesta = array("ok"=>true, "texto"=>"Se pudo ingresar a la base");
                echo json_encode($respuesta);
            }
        }
    }
    if($_SESSION["Usuario"]=='Profesor'){
        if (isset($_SESSION["RFC"])){
            $USUARIOCUENTA=$_SESSION["RFC"];

            $peticion3="SELECT ID_Profesor FROM Profesor WHERE ID_NumRFC='$USUARIOCUENTA'";
            $query=mysqli_query($conexion,$peticion3);
            $datos = mysqli_fetch_assoc($query);
            $json2=implode(", ",$datos); //ID ALUMNO VARIABLE
            // echo $json2;
 

            $peticion4="INSERT INTO profesorhasrecordatorios VALUES(null,'$json2','$Pendiente')";
            $query = mysqli_query($conexion, $peticion4);
            
            if($query==false){
                $respuesta = array("ok"=>false, "texto"=>"No se pudo ingresar a la base");
                // echo mysqli_error($conexion);
                echo json_encode($respuesta);
            }
            else{
                $respuesta = array("ok"=>true, "texto"=>"Se pudo ingresar a la base");
                echo json_encode($respuesta);
            }
        }
    }

?>