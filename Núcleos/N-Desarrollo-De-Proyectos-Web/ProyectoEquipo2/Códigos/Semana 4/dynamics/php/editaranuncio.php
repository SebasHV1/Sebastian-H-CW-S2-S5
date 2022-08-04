<?php

    session_name("SesionComprobarInicio");
    session_id("0000121");
    session_start();
    require("./config.php");

    $conexion=connect();
    
    $NumBoton = (isset($_POST["NUMEDIT"]) && $_POST["NUMEDIT"] != "") ?$_POST["NUMEDIT"] : false;
    $Edit = (isset($_POST["EDIT"]) && $_POST["EDIT"] != "") ?$_POST["EDIT"] : false;
    if($_SESSION["Usuario"]=='Admin'){
        
        $peticion = "UPDATE tablon SET Descripcion='$Edit' WHERE ID_TABLON ='$NumBoton'";
        $query = mysqli_query($conexion, $peticion);

        if($query==false){
            $respuesta = array("ok"=>false, "texto"=>"No se pudo ingresar a la base");
            echo mysqli_error($conexion);
            echo json_encode($respuesta);
        }
        else{
            $respuesta = array("ok"=>true, "texto"=>"Se pudo ingresar a la base $NumBoton");
            echo json_encode($respuesta);
        }
    }
?>