<?php

require "config.php";
$con = mysqli_connect($db_host, $db_user, $db_pass, $db_schema);

if(!$con)
{
    echo "No se pudo conectar a la base de datos";
}
else
{
  $sql = "SELECT * FROM types";  //Crear variable para seleccionar datos (Asignar cadena)
  $res = mysqli_query($con, $sql); //Hace una consulta y asigna la cadena a la variable
  echo mysqli_error($con);
  // Error dew Pokemon TYPES NUnca existio
  $resultados = [];
  while($row = mysqli_fetch_assoc($res))
  {
    $resultados[] = array("id" => $row["type_id"], "nombre" => $row["type_name"]);
  }//Utiliza el dato y compara con la variable row

  echo json_encode($resultados); //JSon encode -> Convertir arreglo en anotación jason
}