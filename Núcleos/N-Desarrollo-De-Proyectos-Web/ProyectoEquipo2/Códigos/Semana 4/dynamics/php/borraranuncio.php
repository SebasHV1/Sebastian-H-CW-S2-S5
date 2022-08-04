<?php

    session_name("SesionComprobarInicio");
    session_id("0000121");
    session_start();
    require("./config.php");

    $conexion=connect();
    
    $NumBoton = (isset($_POST["NUMBORR"]) && $_POST["NUMBORR"] != "") ?$_POST["NUMBORR"] : false;//manda ID de anuncio a borrar
    if($_SESSION["Usuario"]=='Admin'){//REvisa que el ususario sea admin
        
        $peticion = "DELETE FROM tablon WHERE ID_TABLON ='$NumBoton'";
        $query = mysqli_query($conexion, $peticion);

        if($query==false){
            $respuesta = array("ok"=>false, "texto"=>"No se pudo ingresar a la base");
            // echo mysqli_error($conexion);
            echo json_encode($respuesta);
        }
        else{
            $respuesta = array("ok"=>true, "texto"=>"Se pudo ingresar a la base $NumBoton");
            echo json_encode($respuesta);
        }
    }
?>