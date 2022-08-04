<?php
    session_name("SesionComprobarInicio");
    session_id("0000121");
    session_start();
    require("./config.php");

    $conexion=connect();
    
    //Recibe quien mando la pregunta
    $ID_Alumno = (isset($_POST["alumnoAnuncio"]) && $_POST["alumnoAnuncio"] != "") ?$_POST["alumnoAnuncio"] : false;
    $ID_Profesor = (isset($_POST["profesorAnuncio"]) && $_POST["profesorAnuncio"] != "") ?$_POST["profesorAnuncio"] : false;
    //REcibe la pregunta
    $Pregunta = (isset($_POST["Pregunta-Anuncio"]) && $_POST["Pregunta-Anuncio"] != "") ?$_POST["Pregunta-Anuncio"] : false;
    
    //Revisa quien mando la pregunta
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


    if($_SESSION["Usuario"]=='Alumno'){//Si el usuario es alumno ingresa pregunta y ID alumno
        $peticion = "INSERT INTO PREGUNTAS VALUES(null, '$json3', '$Pregunta', null)";
        $query = mysqli_query($conexion, $peticion);
    }
    else{//Si el usuario es profesor ingresa pregunta y ID profesor
        $peticion = "INSERT INTO PREGUNTAS VALUES(null, null, '$Pregunta', '$json2')";
        $query = mysqli_query($conexion, $peticion);
    }   
    
    if($query==false){
        $respuesta = array("ok"=>false, "texto"=>"No se pudo ingresar a la base");
        echo json_encode($respuesta);
    }
    else{
        $respuesta = array("ok"=>true, "texto"=>"Se pudo ingresar a la base");
        echo json_encode($respuesta);
    }
?>