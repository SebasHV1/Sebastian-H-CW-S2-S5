<?php
    session_name("SesionComprobarInicio");
    session_id("0000121");
    session_start();
    require("./config.php");

    $conexion=connect();
    
    $ID_Alumno = (isset($_POST["alumnoAnuncio"]) && $_POST["alumnoAnuncio"] != "") ?$_POST["alumnoAnuncio"] : false;
    $Respuestaaaa = (isset($_POST["Pregunta-Respuesta"]) && $_POST["Pregunta-Respuesta"] != "") ?$_POST["Pregunta-Respuesta"] : false;
    $ID_Pregunta = (isset($_POST["Pregunta-Numero"]) && $_POST["Pregunta-Numero"] != "") ?$_POST["Pregunta-Numero"] : false;
    $ID_Profesor = (isset($_POST["profesorAnuncio"]) && $_POST["profesorAnuncio"] != "") ?$_POST["profesorAnuncio"] : false;

    if($_SESSION["Usuario"]=='Profesor'){
        if (isset($_SESSION["RFC"])){
            $USUARIOCUENTAPROFESOR=$_SESSION["RFC"];
            $peticion3="SELECT ID_Profesor FROM Profesor WHERE ID_NumRFC='$USUARIOCUENTAPROFESOR'";
            $query=mysqli_query($conexion,$peticion3);
            $datos = mysqli_fetch_assoc($query);
            $json2=implode(", ",$datos);
        }else{
            $json2=NULL;
        }
    }

    if($_SESSION["Usuario"]=='Alumno'){
        if (isset($_SESSION["NumDeCuenta"])){
            $USUARIOCUENTALUMNO=$_SESSION["NumDeCuenta"];
            $peticion3="SELECT ID_Alumno FROM Alumno WHERE ID_NumeroDeCuenta='$USUARIOCUENTALUMNO'";
            $query=mysqli_query($conexion,$peticion3);
            $datos = mysqli_fetch_assoc($query);
            $json3=implode(", ",$datos);
        }else{
            $json3=NULL;
        }
    }


    if($_SESSION["Usuario"]=='Alumno'){
        $peticion = "INSERT INTO preguntahasrespuesta VALUES(null, '$ID_Pregunta','$json3', '$Respuestaaaa', null)";
        $query = mysqli_query($conexion, $peticion);
    }
    else{
        $peticion = "INSERT INTO preguntahasrespuesta VALUES(null, '$ID_Pregunta', null,'$Respuestaaaa', '$json2')";
        $query = mysqli_query($conexion, $peticion);
    }   
    
    if($query==false){
        $respuesta = array("ok"=>false, "texto"=>"No se pudo ingresar a la base");
        echo json_encode($respuesta);
            //echo mysqli_error($conexion);
    }
    else{
        $respuesta = array("ok"=>true, "texto"=>"Se pudo ingresar a la base");
        echo json_encode($respuesta);
    }
    //echo json_encode($respuesta);
?>