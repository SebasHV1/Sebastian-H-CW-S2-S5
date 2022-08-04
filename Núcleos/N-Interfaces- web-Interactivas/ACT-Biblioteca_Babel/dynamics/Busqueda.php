<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Busqueda Libro</title>
</head>
<body>
    <?php
        $buscar = (isset($_POST["Buscar"]) && $_POST["Buscar"] != "")? $_POST['Buscar'] : "";
        $zona = (isset($_POST['Zona']) && $_POST["Zona"] != "")? $_POST['Zona'] : "no especifico";
        $modo = (isset($_POST['MODO']) && $_POST["MODO"] != "")? $_POST['MODO'] : "no especifico";
        
        if($modo=='value4')
        {
            echo 'Modo: Oración';
        }
        if($modo=='value5')
        {
            echo 'Modo: Normal';
        }
        if($modo=='value6')
        {
            echo 'Modo: Palabras';
        }
        echo '<br><br>';
                
        echo "
            <table border='1' align='center' cellpadding='30px'>                    <!--Poner formato agradable a la tabla-->
                <thead>
                    <tr>
                        <th>";   
                            $long_identificador=rand(1, 5);                                 
                            for($i = 0; $i<$long_identificador; $i++)                            
                                $array_1numrand[$i] = '0';                                                        
                            for($i=0; $i<$long_identificador; $i++)
                            {
                                $array_1numrand[$i] = rand(0,9);                                
                            }
                            $long_identificador=rand(1,5);
                            for($i = 0; $i<$long_identificador; $i++)                            
                                $array_charrand[$i] = '0';           
                            for($i=0; $i<$long_identificador; $i++)
                            {                                
                                $ascii=rand(97, 122); 
                                $letra= chr($ascii);                                 
                                $array_charrand[$i] = $letra;
                            }
                            $long_identificador=rand(1, 7);            
                            for($i = 0; $i<$long_identificador; $i++)                            
                                $array_2numrand[$i] = '0';           
                            for($i=0; $i<$long_identificador; $i++)
                            {
                                $array_2numrand[$i] = rand(0,9);                                
                            }
                            $titulo1 = array_merge($array_1numrand, $array_charrand);
                            $titulo2 = array_merge($titulo1, $array_2numrand);
                            $titulo_string = implode("", $titulo2);  
                            echo "<br>Libro $titulo_string <br><br>";
                    echo "</th>
                    </tr>
                </thead>
                <tbody>                                                                                                                                    
                    <tr>                    
                        <td>";
                            if($modo!='Palabras')
                            {                                                                
                                $long_texto=rand(300,500);                                 
                                //$cadena= "Hola soy un aguacate"; 
                                $insertar = rand(0, $long_texto);

                                for($i=0; $i<$long_texto; $i++)
                                {
                                    $long_palabra=rand(4,10);
                                    
                                    for($p=0; $p<$long_palabra; $p++)
                                    {
                                        $ascii=rand(97, 122); 
                                        $letra= chr($ascii); 
                                        echo "$letra"; 
                                    }
                                    echo " "; 
                                    if($modo == 'Normal' && $i==$insertar)
                                    {
                                        echo "<strong><em>$buscar </em></strong>";
                                    }
                                    //INSERTAR FRASE "No se ha introducido una búsqueda, la torre de babel no puede dar respuestas a quien no hace preguntas"
                                    if($i==$insertar && $buscar== '')
                                    {
                                        echo "<strong><em>No se ha introducido una búsqueda, la torre de babel no puede dar respuestas a quien no hace preguntas</em></strong>";
                                    }

                                    if($modo == 'Orden' && $i==$insertar)
                                    {
                                        /*$minus_arreglo= strtolower($buscar);
                                        $arreglo_cad = explode(" ", $minus_arreglo);
                                        */
                                        $arreglo_cad = explode(" ", $buscar);
                                        sort($arreglo_cad);
                                        $cadenaordenada = implode(" ", $arreglo_cad);
                                        echo "<strong><em>$cadenaordenada </em></strong>";
                                    }
                                }            
                            }                            
                            else
                            {                                                                                                                                                    
                                $long_texto=rand(300,500);                                                                       
                                $arreglo_string = explode(" ", $buscar);
                                $num_localidades = count($arreglo_string);                                
                                for($i=0; $i < $num_localidades; $i++)
                                {
                                    $rand_posis[$i] = 0;
                                }
                                $i = 0;                                 
                                while($i < $num_localidades)
                                {
                                    $insertar = rand(0, $long_texto);
                                    for($y=0; $y < $num_localidades; $y++)
                                    {
                                        if($insertar != $rand_posis[$y])
                                        {                                            
                                            $verif_inc=1;
                                        }              
                                        else
                                            $verif_inc = 0;                          
                                    }    
                                    if($verif_inc == 1)
                                    {
                                        array_push($rand_posis, $insertar);
                                        array_shift($rand_posis);
                                        $i++;
                                    }                                                                                
                                }                                        
                                for($i=0; $i<$long_texto; $i++)
                                {
                                    $long_palabra=rand(4,10);                                    
                                    for($p=0; $p<$long_palabra; $p++)
                                    {
                                        $ascii=rand(97, 122); 
                                        $letra= chr($ascii); 
                                        echo "$letra"; 
                                    }
                                    echo " "; 
                                    for($y = 0; $y<$num_localidades; $y++)
                                    {
                                        if($i == $rand_posis[$y])
                                        {
                                            echo "<strong><em>$arreglo_string[$y] </em></strong>";
                                        }
                                        if($i==$insertar && $buscar== '')
                                        {
                                            echo "<strong><em>No se ha introducido una búsqueda, la torre de babel no puede dar respuestas a quien no hace preguntas</em></strong>";
                                        }  
                                    }
                                }                                                                                                            
                            }                            
                        echo"
                        </td>
                    </tr>
                </tbody>
                </table>
                ";        
                echo "<br>";
                echo "<b>La fecha de la consulta de este libro fue: </b>";            
                //Config Zona Horaria
                if($zona=='value1')
                {
                    date_default_timezone_set("America/New_York");                    
                }
                if($zona=='value2')
                {
                    date_default_timezone_set("America/Mexico_City");                    
                }
                if($zona=='value3')
                {
                    date_default_timezone_set("Europe/Berlin");                    
                }
                $lugar = date_default_timezone_get();
                $fecha=date('d');
                $fecha2=date('m');
                $fecha3=date('Y');
                $hora=date('h:i a'); 
    
                echo $fecha;
                echo "/";
                //Config de Meses XD
                if($fecha2==1)
                {
                    echo"Enero";
                }
                if($fecha2==2)
                {
                    echo"Febrero";
                }
                if($fecha2==3)
                {
                    echo"Marzo";
                }
                if($fecha2==4)
                {
                    echo"Abril";
                }
                if($fecha2==5)
                {
                    echo"Mayo";
                }
                if($fecha2==6)
                {
                    echo"Junio";
                }
                if($fecha2==7)
                {
                    echo"Julio";
                }
                if($fecha2==8)
                {
                    echo"Agosto";
                }
                if($fecha2==9)
                {
                    echo"Septiembre";
                }
                if($fecha2==10)
                {
                    echo"Octubre";
                }
                if($fecha2==11)
                {
                    echo"Noviembre";
                }
                if($fecha2==12)
                {
                    echo"Diciembre";
                }
                echo "/";
                echo $fecha3;
                echo " <b>a las: </b>";
                echo $hora;
                echo "<b> en </b>";
                echo $lugar;
                echo '<br><br>';                                
                //
                $dia=rand(1,31);
                $mes=rand(1,12);
                $ano=rand(1000,2022);
                $existe_fecha =checkdate($dia,$mes,$ano);

                if($existe_fecha==1)
                {
                    echo "Fecha de creación de este libro: ";
                    echo $dia;
                    echo " de ";
                    //Config de Meses de la creación del libro
                    if($mes==1)
                    {
                        echo"Enero";
                    }
                    if($mes==2)
                    {
                        echo"Febrero";
                    }
                    if($mes==3)
                    {
                        echo"Marzo";
                    }
                    if($mes==4)
                    {
                        echo"Abril";
                    }
                    if($mes==5)
                    {
                        echo"Mayo";
                    }
                    if($mes==6)
                    {
                        echo"Junio";
                    }
                    if($mes==7)
                    {
                        echo"Julio";
                    }
                    if($mes==8)
                    {
                        echo"Agosto";
                    }
                    if($mes==9)
                    {
                        echo"Septiembre";
                    }
                    if($mes==10)
                    {
                        echo"Octubre";
                    }
                    if($mes==11)
                    {
                        echo"Noviembre";
                    }
                    if($mes==12)
                    {
                        echo"Diciembre";
                    }
                    echo " de ";
                    echo $ano;
                }
                while($existe_fecha==0)
                {
                    $dia=rand(1,31);
                    $mes=rand(1,12);
                    $ano=rand(1000,2022);
                    $existe_fecha =checkdate($dia,$mes,$ano);
                    if($existe_fecha==1)
                    {
                        echo "Fecha de creación de este libro: ";
                        echo $dia;
                        echo " de ";
                        if($mes==1)
                        {
                            echo"Enero";
                        }
                        if($mes==2)
                        {
                            echo"Febrero";
                        }
                        if($mes==3)
                        {
                            echo"Marzo";
                        }
                        if($mes==4)
                        {
                            echo"Abril";
                        }
                        if($mes==5)
                        {
                            echo"Mayo";
                        }
                        if($mes==6)
                        {
                            echo"Junio";
                        }
                        if($mes==7)
                        {
                            echo"Julio";
                        }
                        if($mes==8)
                        {
                            echo"Agosto";
                        }
                        if($mes==9)
                        {
                            echo"Septiembre";
                        }
                        if($mes==10)
                        {
                            echo"Octubre";
                        }
                        if($mes==11)
                        {
                            echo"Noviembre";
                        }
                        if($mes==12)
                        {
                            echo"Diciembre";
                        }
                        echo " de ";
                        echo $ano;
                        $existe_fecha+=1;
                    }                    
                }
                echo "<br>";
    ?>
</body>
</html>
