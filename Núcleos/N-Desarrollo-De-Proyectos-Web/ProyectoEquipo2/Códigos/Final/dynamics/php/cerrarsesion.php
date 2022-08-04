<?php    
    session_name("SesionComprobarInicio");
    session_id("0000121");
    session_start();

    if(isset($_SESSION["NumDeCuenta"])){
        session_unset();
        session_destroy();
        echo"Cerrar Sesión";    
        header("location: ../../Index.php");
    }
    else{
        header("location:../../Index.php");
    }
?>