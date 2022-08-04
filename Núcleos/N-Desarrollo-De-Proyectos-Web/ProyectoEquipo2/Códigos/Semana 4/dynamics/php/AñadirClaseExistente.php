<?php

    session_name("SesionComprobarInicio");
    session_id("0000121");
    session_start();
    require("./config.php");

    $conexion=connect();

    //Recibe nombre de la clase
    $NomClassroom = (isset($_POST["nombredelaclase"]) && $_POST["nombredelaclase"] != "") ?$_POST["nombredelaclase"] : false;
    //Recibe codigo de la clase
    $CodigoClase= (isset($_POST["codedelaclase"]) && $_POST["codedelaclase"] != "") ?$_POST["codedelaclase"] : false;
    
    //Verifica que sea cuenta de alumno
    if($_SESSION["Usuario"]=='Alumno'){
        if (isset($_SESSION["NumDeCuenta"])){
            $USUARIOCUENTA=$_SESSION["NumDeCuenta"];
            //obtiene ID usando de referencia numero de cuenta
            $peticion3="SELECT ID_Alumno FROM Alumno WHERE ID_NumeroDeCuenta='$USUARIOCUENTA'";
            $query=mysqli_query($conexion,$peticion3);
            $datos = mysqli_fetch_assoc($query);
            $json2=implode(", ",$datos); //ID ALUMNO VARIABLE
 
            //Busca el ID de la clase usando de referencia el codigo ingresado
            $peticion2="SELECT ID_Clase FROM Clases WHERE CODIGO='$CodigoClase'";
            $query = mysqli_query($conexion, $peticion2);
            $datos2 = mysqli_fetch_assoc($query);
            $json3=implode(", ",$datos2);//Variable de la ID DE CLASE
            
            //Revisa si el alumno ya esta en la clase
            $peticion6="SELECT AHC FROM ALUMNOHASCLASES WHERE ID_Alumno='$json2'AND ID_Clase='$json3'";
            $query13 = mysqli_query($conexion, $peticion6);
            $datos4 = mysqli_fetch_assoc($query13);
            if($datos4){
                //Revisa si existe la clase y no deja entrar de nuevo
                $json4=implode(", ",$datos4);
                $peticion7="SELECT * FROM ALUMNOHASCLASES WHERE ID_Alumno='$json2'AND ID_Clase='$json3' AND AHC='$json4'";
                $query14 = mysqli_query($conexion, $peticion7);
                if($query14){
                
                    $respuesta = array("ok"=>FALSE, "texto"=>"Existe la clase");
                    echo json_encode($respuesta);
                }else{
                    $peticion4="INSERT INTO AlumnoHasClases VALUES(null,'$json2','$json3')";
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
            }else{
                //no existe en la clase y lo registra
                $peticion4="INSERT INTO AlumnoHasClases VALUES(null,'$json2','$json3')";
                $query = mysqli_query($conexion, $peticion4);
                    
                if($query==false){
                    $respuesta = array("ok"=>false, "texto"=>"No se pudo ingresar a la base");
                    echo json_encode($respuesta);
                }
                else{
                    $respuesta = array("ok"=>true, "texto"=>"Se pudo ingresar a la base");
                    echo json_encode($respuesta);
                }
            }
        }
        
    }

?>