<?php

define("DBHOST", "localhost");
define("DBUSER", "root");
define("PASSWORD","");
define("DB", "aulavirtualp6");

function connect(){
    $conexion = mysqli_connect(DBHOST, DBUSER ,PASSWORD ,DB);
    // var_dump($conexion);
    if(!$conexion){
        mysqli_error();
        echo "No se puede conectar la base";
    }
    return $conexion;
}

?>