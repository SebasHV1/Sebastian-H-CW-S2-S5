<?php

    session_name("SesionComprobarInicio");
    session_id("0000121");
    session_start();
    require("./config.php");

    $conexion=connect();
    
    // $NumBoton = (isset($_POST["RecordatorioInfoBorrar"]) ?$_POST["RecordatorioInfoBorrar"] : false);
    $NumBoton = (isset($_POST["NUMBOTEL"]) && $_POST["NUMBOTEL"] != "") ?$_POST["NUMBOTEL"] : false;
    // var_dump ($_POST);
    // echo ($NumBoton);
    if($_SESSION["Usuario"]=='Alumno'){
        if (isset($_SESSION["NumDeCuenta"])){
            $USUARIOCUENTA=$_SESSION["NumDeCuenta"];

            //Delete FROM WHERE ID
            $peticion4="DELETE FROM alumnohasrecordatorio WHERE AHR='$NumBoton'";
            $query = mysqli_query($conexion, $peticion4);
            
            
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
    }

    if ($_SESSION["Usuario"]=='Profesor'){
        if (isset($_SESSION["RFC"])){
            $USUARIOCUENTA=$_SESSION["RFC"];

            $peticion4="DELETE FROM profesorhasrecordatorios WHERE PHR='$NumBoton'";
            $query = mysqli_query($conexion, $peticion4);
            
            
            if($query==false){
                $respuesta = array("ok"=>false, "texto"=>"No se pudo ingresar a la base");
                echo json_encode($respuesta);
            }
            else{
                $respuesta = array("ok"=>true, "texto"=>"Se pudo ingresar a la base $NumBoton");
                echo json_encode($respuesta);
            }
        }
    }
?>