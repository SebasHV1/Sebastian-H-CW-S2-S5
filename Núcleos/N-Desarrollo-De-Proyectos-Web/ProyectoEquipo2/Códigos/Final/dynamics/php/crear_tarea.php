<?php

    require "config.php";

    $conexion=connect();

    $NomTarea = (isset($_POST["NomTarea"]) && $_POST["NomTarea"] != "") ?$_POST["NomTarea"] : false;
    $Descripcion = (isset($_POST["describe"]) && $_POST["describe"] != "") ?$_POST["describe"] : false;
    $Fecha = (isset($_POST["FechaEntrega"]) && $_POST["FechaEntrega"] != "") ?$_POST["FechaEntrega"] : false;
    $Clase = (isset($_POST["idPag"]) && $_POST["idPag"] != "") ?$_POST["idPag"] : false;
    $Archivo = $_FILES['Apoyo']['name'];
    $directorio = '../../statics/docsTareas/';

    if($Archivo!=''){
        
        $RutaTemporal = $_FILES['Apoyo']['tmp_name'];
        rename($RutaTemporal, $directorio.$Archivo);
        $rutaArch=$directorio.$Archivo;

        $peticion = "INSERT INTO claseshastareas VALUES(null, $Clase, '$NomTarea', '$Descripcion', '$rutaArch', '$Fecha')";
    }
    else{
        $peticion = "INSERT INTO claseshastareas VALUES(null, $Clase, '$NomTarea', '$Descripcion', null, '$Fecha')";
    }
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
?>