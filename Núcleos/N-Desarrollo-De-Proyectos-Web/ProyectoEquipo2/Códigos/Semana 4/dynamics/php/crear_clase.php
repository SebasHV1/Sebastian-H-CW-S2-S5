<?php

    session_name("SesionComprobarInicio");
    session_id("0000121");
    session_start();
    require("./config.php");

    $conexion=connect();

    $NomClassroom = (isset($_POST["nombredelaclase"]) && $_POST["nombredelaclase"] != "") ?$_POST["nombredelaclase"] : false;
    $Descripcion = (isset($_POST["DescripcionClase"]) && $_POST["DescripcionClase"] != "") ?$_POST["DescripcionClase"] : false;
    $CodigoClase= (isset($_POST["codedelaclase"]) && $_POST["codedelaclase"] != "") ?$_POST["codedelaclase"] : false;
    
    if($_SESSION["Usuario"]=='Profesor'){
        if (isset($_SESSION["RFC"])){
            $USUARIOCUENTA=$_SESSION["RFC"];
            $peticion3="SELECT ID_Profesor FROM Profesor WHERE ID_NumRFC='$USUARIOCUENTA'";
            $query=mysqli_query($conexion,$peticion3);
            $datos = mysqli_fetch_assoc($query);
            $json2=implode(", ",$datos);
            // echo $json2;
            $peticion = "INSERT INTO CLASES VALUES(null, '$NomClassroom', '$CodigoClase', '$Descripcion')";
            $query = mysqli_query($conexion, $peticion);

            if($query==false){
                $respuesta = array("ok"=>false, "texto"=>"No se pudo ingresar a la base");
                echo mysqli_error($conexion);
                echo json_encode($respuesta);
            }
            else{
                $respuesta = array("ok"=>true, "texto"=>"Se pudo ingresar a la base");
                echo json_encode($respuesta);
            }
            $peticion2="SELECT ID_Clase FROM Clases WHERE CODIGO='$CodigoClase'";
            $query = mysqli_query($conexion, $peticion2);
            $datos2 = mysqli_fetch_assoc($query);
            $json3=implode(", ",$datos2);
            // echo $json3;
            $peticion4="INSERT INTO ProfesorHasClases VALUES(null,'$json2','$json3')";
            $query = mysqli_query($conexion, $peticion4);
        }
    }
?>