<?php
    session_name("SesionComprobarInicio");
    session_id("0000121");
    session_start();
    require("./config.php");

    $conexion=connect();
    
    //Recibe quien hace el anuncio
    $ID_Alumno = (isset($_POST["alumnoAnuncio"]) && $_POST["alumnoAnuncio"] != "") ?$_POST["alumnoAnuncio"] : false;
    $ID_Profesor = (isset($_POST["profesorAnuncio"]) && $_POST["profesorAnuncio"] != "") ?$_POST["profesorAnuncio"] : false;
    //Materia del anuncio
    $Materia = (isset($_POST["materia-Anuncio"]) && $_POST["materia-Anuncio"] != "") ?$_POST["materia-Anuncio"] : false;
    //Contenido
    $Descripcion = (isset($_POST["text-Anuncio"]) && $_POST["text-Anuncio"] != "") ?$_POST["text-Anuncio"] : false;

    //Revisa quien mando el anuncio
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


    $existe=0;
    //Revisa si se mando un archivo
    $archivo = $_FILES['file-anuncio']['name'];
    if($archivo!=''){
        $Archivo = $_FILES['file-anuncio']['name'];
        $existe =1;
    }
        
    $directorio = '../../statics/docsAnuncios/';//localidad donde se guardara
    if($existe==1){//si existe archivo
        $RutaTemporal = $_FILES['file-anuncio']['tmp_name'];//toma la localidad actual del archivo
        rename($RutaTemporal, $directorio.$Archivo);//sustituye la localidad
        $rutaArch=$directorio.$Archivo;//toma la ruta del archivo
        if($_SESSION["Usuario"]=='Alumno'){
            $peticion = "INSERT INTO TABLON VALUES(null, '$json3', '$Materia', '$Descripcion', '$rutaArch', null)";
            $query = mysqli_query($conexion, $peticion);
        }
        else{
            $peticion = "INSERT INTO TABLON VALUES(null, null, '$Materia', '$Descripcion', '$rutaArch', '$json2')";
            $query = mysqli_query($conexion, $peticion);
        }   
    }       
    else{
        // echo $ID_Alumno;
        if($_SESSION["Usuario"]=='Alumno'){
            $peticion = "INSERT INTO TABLON VALUES(null, '$json3', '$Materia', '$Descripcion', null, null)";
            $query = mysqli_query($conexion, $peticion);
        }
        else{
            $peticion = "INSERT INTO TABLON VALUES(null, null, '$Materia', '$Descripcion', null, '$json2')";
            $query = mysqli_query($conexion, $peticion);
            echo mysqli_error($conexion);
        }
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