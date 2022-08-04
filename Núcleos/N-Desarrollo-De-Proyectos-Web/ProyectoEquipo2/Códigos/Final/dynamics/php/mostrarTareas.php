<?php

require "config.php";

$conexion = connect();

if(!$conexion){
    echo "No se pudo conectar";
}
else{
    if(isset($_GET['q'])){
        $query = $_GET['q'];
        $sql = "SELECT NombreTarea, Indicaciones_De_La_Tarea, Ruta_Archivo, Fecha_De_Entrega
        FROM claseshastareas
        WHERE ID_clase LIKE '%".$query."%'";
        $resultados=[];
        while($row = mysqli_fetch_assoc($res)){
          $resultados[]=$row;
        }
        echo json_encode($resultados);
        
    }
    else if(isset($_GET['id'])){
        $query = $_GET['id'];
        $sql = "SELECT CHT, NombreTarea, Indicaciones_De_La_Tarea, Ruta_Archivo, Fecha_De_Entrega
        FROM claseshastareas
        WHERE ID_clase = '$query'";

        $res = mysqli_query($conexion, $sql);
        $row = mysqli_fetch_assoc($res);//error

        $datos = array("CHT"=>$row['CHT'], "Tarea"=>$row['NombreTarea'], "Descripcion"=>$row['Indicaciones_De_La_Tarea'], "Ruta"=>$row['Ruta_Archivo'], "Fecha"=>$row['Fecha_De_Entrega']);//error

        $respuesta = array("ok"=>true, "datos"=>$datos);
        echo mysqli_error($conexion);
        echo json_encode($respuesta);
    }
}

?>