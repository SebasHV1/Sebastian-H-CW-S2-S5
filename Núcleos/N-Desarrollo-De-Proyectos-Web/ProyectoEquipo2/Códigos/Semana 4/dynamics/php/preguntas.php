<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="../../statics/style/Diseño.css">
    <script src=" https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js "></script>
    <link href="../../statics/libs/bootstrap-5.2.0-beta1-dist/css/bootstrap.css" rel="stylesheet">
    <title>Preguntas</title>
</head>
<body>
    <?php
        session_name("SesionComprobarInicio");//Crea una sesion
        session_id("0000121");//asigna un id a la sesion
        session_start();//inicia la sesion
    
        include("./config.php");//incluye documento con conexion a la base de datos
        $conexion=connect();//crea variable con la revisión de conexion
        
        date_default_timezone_set("America/Mexico_City");
        $fecha=date('a');//si es am o pm
        $fecha2=date('h');//toma la hora en formato de 12 

        if (isset($_SESSION["Usuario"])){//revisa que este iniciada una sesion
            if($_SESSION["Usuario"]=='Alumno'){//revisa si el usuario es alumno
                if (isset($_SESSION["NumDeCuenta"])){//Revisa que este reibiendo Numero de cuenta
                    $USUARIOCUENTA=$_SESSION["NumDeCuenta"];//asigna numero de cuenta a variable
                    $peticion="SELECT NombreCompleto FROM Alumno WHERE ID_NumeroDeCuenta='$USUARIOCUENTA'";
                    //Toma el nombre del usuario tomando de referencia el numero de cuenta
                    $query=mysqli_query($conexion,$peticion);
                    //revisa que la conexion y peticion sean validos
                    $datos = mysqli_fetch_assoc($query);
                    //guarda la query correcta
                    $NombreBusqueda=implode(", ",$datos);
                    //toma el nombre
                    $PrimerNom = explode(" ", $NombreBusqueda);
                    //Separa el primer nombre

                }else{
                    echo("VACIO");
                }
            }
            if($_SESSION["Usuario"]=='Profesor'){//revisa si el usuario es profesor
                if (isset($_SESSION["RFC"])){//Revisa que este reibiendo un RFC
                    $USUARIOCUENTA=$_SESSION["RFC"];//asigna RFC a variable
                    $peticion="SELECT NombreCompleto FROM Profesor WHERE ID_NumRFC='$USUARIOCUENTA'";
                    //Toma el nombre del usuario tomando de referencia el RFC
                    $query=mysqli_query($conexion,$peticion);
                    //revisa que la conexion y peticion sean validos
                    $datos = mysqli_fetch_assoc($query);
                    //guarda la query correcta
                    $NombreBusqueda=implode(", ",$datos);
                    //toma el nombre
                    $PrimerNom = explode(" ", $NombreBusqueda);
                    //Separa el primer nombre
                }else{
                    echo("VACIO");
                }
            }
        }
        //Revisa el  horario
        if($fecha=='pm' && $fecha2<07){
            $buenos='¡Buenas Tardes!';
        }
        if($fecha=='pm' && $fecha2>=07){
            $buenos='¡Buenas Noches!';
        }
        if($fecha=='am'){
            $buenos='¡Buenos Días!';
        }
        echo"
        <nav class='navbar --bs-border-color-translucent: rgba(0, 0, 0, 0.175);'>
            <div class='container-fluid'>
                <img id='logo' src='../../statics/img/coyote.png' alt='logoENP6'>
                <span class='navbar-brand mb-0 h1'>Preguntas</span>
        ";
        if($_SESSION["Usuario"]!='Admin'){
            echo"    
                <span class='navbar-brand mb-0 h1 usuario' id='usuario'>- $buenos $PrimerNom[0] -</span> <!--Muestra mensaje del día y muestra primer nombre-->
            ";
        }
        else{
            echo"    
                <span class='navbar-brand mb-0 h1 usuario' id='usuario'>- Admin -</span> <!--Muestra mensaje del día y muestra primer nombre-->
            ";
        }
        echo"
            </div>
        </nav>
        <div id='zonas' style='display: none;'>
            <div class='redireccion' id='RedTablon'>Tablon de alumnos</div>
            <div class='redireccion' id='RedForo'>Foro de preguntas</div>
        </div>
        <div id='opcAlumno' style='display: none'>
            <form action='./Perfil.php' method='post' target='_self'>
                <button type='submit' id='Perfil' class='btn-usuario'> Mi perfil</button>
            </form>
            <form action='./companeros.php' method='post' target='_self'>
                <button type='submit' id='comaneros' class='btn-usuario'> Mis compañeros</button>
            </form>
            <form action='./cerrarsesion.php' method='post' target='_self'>
                <button type='submit' id='cerrarsesion' class='btn-usuario'> Cerrar Sesión</button>
            </form>
        </div>
        <div style='display: flex;'>
            <div id='asignaturas'>
            ";  
            if ($_SESSION["Usuario"]=='Profesor'){//REvisa si la sesion es de profesor
                echo"
                <div id='CREARCLASE' style='display: block'><!-- Zona de crear clase -->
                    <button data-bs-toggle='modal' data-bs-target='#exampleModal' name='tiempo' id='CREARCLASE2'> <id='ALERTACLASE' style='display:block'>Crear clase</BUTTON>
                </div>
                <div class='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                    <div class='modal-dialog'>
                        <div class='modal-content' style='text-align: center;'>
                            <div class='modal-header'>
                                <h5 class='modal-title' id='exampleModalLabel'>Ingrese los datos de su clase profesor/a: </h5>
                                <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                            </div>
                            <div class='modal-body'>
                                <form id='NuevaClaseeee'>
                                    <span>Nombre de la clase: </span>
                                    <input type='text' id='nombredelaclase' class='Tintro' name='nombredelaclase' required>
                                    <br><br>
                                    <span>Contraseña o código para su clase: </span>
                                    <input type='text' id='codedelaclase' class='Tintro' name='codedelaclase' required>
                                    <br><br>
                                    <span>Pequeña descripción de su clase: </span>
                                    <input type='text' id='DescripcionClase' class='Tintro' name='DescripcionClase' required>
                                    <br><br>
                                    <button id='aceptar' class='btn-asignar'>Enviar</button>
                                    <button id='cancelar' class='btn-asignar'>Cancelar</button>  
                            </div>    
                        </div>
                                </form>
                    </div>
                </div>
                <div id='Clases'>               
                    ";
                };
                if ($_SESSION["Usuario"]=='Alumno'){
                    echo"
                    <div id='CREARCLASE' style='display: block'>
                        <button data-bs-toggle='modal' data-bs-target='#exampleModal' name='tiempo' id='AÑADIRCLASE'> <id='ALERTAAÑADIRCLASE' style='display:block'>Añadir clase</BUTTON>
                    </div>
                    
                    <div class='modal fade' id='exampleModal' tabindex='-1' aria-labelledby='exampleModalLabel' aria-hidden='true'>
                        <div class='modal-dialog'>
                            <div class='modal-content' style='text-align: center;'>
                                <div class='modal-header'>
                                    <h5 class='modal-title' id='exampleModalLabel'>Ingrese los datos de su clase: </h5>
                                    <button type='button' class='btn-close' data-bs-dismiss='modal' aria-label='Close'></button>
                                </div>
                                <div class='modal-body'>
                                    <form id='AgregarClaseAlumno'>
                                        <span>Nombre de la clase: </span>
                                        <input type='text' id='nombredelaclase' class='Tintro' name='nombredelaclase' required>
                                        <br><br>
                                        <span>Contraseña o código para su clase: </span>
                                        <input type='text' id='codedelaclase' class='Tintro' name='codedelaclase' required>
                                        <br><br>
                                        <button id='aceptarCLASE' class='btn-asignar'>Enviar</button>
                                        <button id='cancelarCLASE' class='btn-asignar'>Cancelar</button>  
                                </div>    
                            </div>
                            </form>
                        </div>
                    </div>
                <div id='Clases'>
                                    
                    
                        ";
                };
                echo "
                
                ";
                if ($_SESSION["Usuario"]=='Profesor'){
                    if (isset($_SESSION["RFC"])){
                        $USUARIOCUENTA=$_SESSION["RFC"];
                        $peticion="SELECT ID_Profesor FROM Profesor WHERE ID_NumRFC='$USUARIOCUENTA'";//Toma el ID de profesor con su RFC
                        $query=mysqli_query($conexion,$peticion);
                        $datos = mysqli_fetch_assoc($query);
                        $ID_PROFESOR=implode(", ",$datos);
                        //Relacionar clases
                        $peticion="SELECT * FROM ProfesorHasClases WHERE ID_Profesor='$ID_PROFESOR'";
                        $query=mysqli_query($conexion,$peticion);
                        if($query){
                            while($row=$query->fetch_array()){
                                $nombre= $row['ID_Clase'];//Toma el ID de la calse
                                $peticion="SELECT * FROM Clases WHERE ID_Clase='$nombre'"; //Toma todo de la fila con referencia del ID de clase
                                $query2=mysqli_query($conexion,$peticion);
                                echo"
                                <div>
                                        ";
                                        if($query2){
                                            while($row=$query2->fetch_array()){
                                                $NombreDeLaClase=$row['NombreDClase'];  //Toma el nombre de la clase    
                                        }   
                                        echo"
                                            <div class='clases' id='MisclasesProfesor+$nombre'> <!-- Asigna Id de clase -->
                                                $NombreDeLaClase
                                                <br/>
                                            </div>
                                </div>
                                ";
                                }
                            }
                        }
                    }
                }
                if ($_SESSION["Usuario"]=='Alumno'){
                    if (isset($_SESSION["NumDeCuenta"])){
                        $USUARIOCUENTA=$_SESSION["NumDeCuenta"];
                        $peticion="SELECT ID_Alumno FROM Alumno WHERE ID_NumeroDeCuenta='$USUARIOCUENTA'";
                        $query=mysqli_query($conexion,$peticion);
                        $datos = mysqli_fetch_assoc($query);
                        $ID_Alumno=implode(", ",$datos);
                        // //Relacionar clases
                        $peticion="SELECT * FROM AlumnoHasClases WHERE ID_Alumno='$ID_Alumno'";
                        $query=mysqli_query($conexion,$peticion);
                        if($query){
                            while($row=$query->fetch_array()){
                                $nombre= $row['ID_Clase'];
                                $peticion="SELECT * FROM Clases WHERE ID_Clase='$nombre'";
                                $query2=mysqli_query($conexion,$peticion);
                                echo"
                                <div>
                                        ";
                                        if($query2){
                                            while($row=$query2->fetch_array()){
                                                $NombreDeLaClase=$row['NombreDClase'];
                                                $peticion="SELECT ID_PROFESOR FROM Profesorhasclases WHERE ID_Clase='$nombre'";
                                                $query3=mysqli_query($conexion,$peticion);
                                                if($query3){
                                                    while($row=$query3->fetch_array()){
                                                        $ID_PROFESOR=$row['ID_PROFESOR'];
                                                        $peticion="SELECT NombreCompleto FROM Profesor WHERE ID_Profesor='$ID_PROFESOR'";
                                                        $query4=mysqli_query($conexion,$peticion);
                                                        if($query4){
                                                            while($row=$query4->fetch_array()){
                                                                $NOMBREDELPROFESOR=$row['NombreCompleto'];
                                                        }
                                                    }
                                                }
                                            }   
                                            echo"
                                                <div class='clases' id='MisclasesAlumno+$nombre'>
                                                    $NombreDeLaClase
                                                    <br/>
                                                    Profesor: $NOMBREDELPROFESOR
                                                    <br/>
                                                </div>
                                    
                                    </div>
                                    
                                    ";
                                    }
                                }
                            }
                        }
                    }
                }
                echo"
                </div>
                </div>
                    <div id='tablon'>Tablos de preguntas
                        <div class='zona-pregunta'>
                            <button id='btn-preguntar'>Hacer una pregunta</button>
                            <div id='contenedorPreguntas' style='display: none;'>
                                    <form id='formPreguntas' enctype='multipart/form-data'>
                                        <input type='text' id='Pregunta-Anuncio' name='Pregunta-Anuncio' placeholder='Ingresa tu pregunta aquí: '>
                                        <br/>
                                        ";
                                        if ($_SESSION["Usuario"]=='Alumno'){
                                            echo"
                                                <input type='text' id='PreguntaAlumno' value='$ID_Alumno' style='display:none;'>
                                                <input type='text' id='profesorAnuncio' style='display:none;'>
                                            ";
                                        }
                                        if ($_SESSION["Usuario"]=='Profesor'){
                                            echo"
                                                <input type='text' id='alumnoAnuncio' style='display:none;'>
                                                <input type='text' id='profesorAnuncio' value='$ID_PROFESOR' style='display:none;'>
                                            ";
                                        }
                                echo"        
                                    </form>
                                    <button id='aceptar-pregunta'>Aceptar</button><button id='cancelar-pregunta'>Cancelar</button>
                                </div>
                                ";
                                $peticion="SELECT * FROM PREGUNTAS";
                                $querypreguntas=mysqli_query($conexion,$peticion);
                                if($querypreguntas){
                                    while($row=$querypreguntas->fetch_array()){
                                    $Preguntaaaa=$row['Pregunta'];
                                    $ID_Alumno2=$row['ID_Alumno'];
                                    $ID_Profesor2=$row['ID_Profesor'];
                                    $ID_Pregunta=$row['ID_PREGUNTA'];
                                    echo" <div class='anuncio'>#$ID_Pregunta
                                        <br> ¡Nueva pregunta! 
                                        <br> ¿$Preguntaaaa?
                                        <br> Realizada por
                                    ";
                                    if($ID_Alumno2==NULL){
                                        $peticionprofesorname="SELECT NombreCompleto FROM Profesor WHERE ID_Profesor='$ID_Profesor2'";
                                        $query=mysqli_query($conexion,$peticionprofesorname);
                                        $datos = mysqli_fetch_assoc($query);
                                        $NombreProfesor=implode(", ",$datos);
                                        echo("el Profesor: $NombreProfesor");
                                    }
                                    if($ID_Profesor2==NULL){
                                        $peticionalumnoname="SELECT NombreCompleto FROM Alumno WHERE ID_Alumno='$ID_Alumno2'";
                                        $query=mysqli_query($conexion,$peticionalumnoname);
                                        $datos = mysqli_fetch_assoc($query);
                                        $NombreProfesor=implode(", ",$datos);
                                        echo("el Alumno: $NombreProfesor");
                                    }
                                    echo "</div>";
                                    $peticionRespuesta="SELECT * FROM preguntahasrespuesta WHERE ID_PREGUNTA='$ID_Pregunta'";
                                    $queryRespuestas=mysqli_query($conexion, $peticionRespuesta);
                                    if($queryRespuestas){
                                        while($row=$queryRespuestas->fetch_array()){
                                            $respuesta=$row['Respuesta'];
                                            $PHR=$row['PHR'];
                                            $ID_Alumno3=$row['ID_ALUMNO'];
                                            $ID_Profesor3=$row['ID_Profesor'];
                                            echo"<div>
                                                <div class='respuesta' id='$PHR'>";
                                            if($ID_Alumno3==NULL){
                                                $peticionprofesorname="SELECT NombreCompleto FROM Profesor WHERE ID_Profesor='$ID_Profesor3'";
                                                $query=mysqli_query($conexion,$peticionprofesorname);
                                                $datos = mysqli_fetch_assoc($query);
                                                $NombreProfesor=implode(", ",$datos);
                                                echo("Respuesta del profesor $NombreProfesor.");
                                            }
                                            if($ID_Profesor3==NULL){
                                                $peticionalumnoname="SELECT NombreCompleto FROM Alumno WHERE ID_ALUMNO='$ID_Alumno3'";
                                                $query=mysqli_query($conexion,$peticionalumnoname);
                                                $datos = mysqli_fetch_assoc($query);
                                                $NombreAlumno=implode(", ",$datos);
                                                echo("Respuesta hecha por el compañer@ $NombreAlumno.");
                                            }
                                            echo "<br/>$respuesta</div>
                                            </div>";
                                        }
                                    }
                                    echo"
                                    
                                    
                                    <div id='responder' name='responder' class='responder'>
                                        <form id='responderpreguntas$ID_Pregunta'>
                                            <input type='text' id='Pregunta-Respuesta' name='Pregunta-Respuesta' placeholder='Ingresa tu respuesta aquí: '>
                                            <input type='number' id='Pregunta-Numero' name='Pregunta-Numero' style='display:none;' value='$ID_Pregunta' >
                                            <button id='aceptar-respuesta'class='aceptar-respuesta'>Aceptar</button>
                                            </form>
                                        </div>"; 
                                     }
                                }echo"
                            </div>
                        </div>
                        <div id='importantes'>Importantes
                            <div id='importante1'>
                                <br>
                                <div id='calendario'>
                                    <div id='mes-año'>
                                        <button id='mes-anterior'><-</button>
                                        <div id='mes'></div>
                                        <div id='año'></div>
                                        <button id='mes-posterior'>-></button>
                                    </div>
                            
                                    <div class='semana'>
                                        <div id='lunes'>
                                            Lun
                                        </div>
                                        <div id='martes'>
                                            Mar
                                        </div>
                                        <div id='miercoles'>
                                            Mier
                                        </div>
                                        <div id='jueves'>
                                            Jue
                                        </div>
                                        <div id='viernes'>
                                            Vier
                                        </div>
                                        <div id='sabado'>
                                            Sab
                                        </div>
                                        <div id='domingo'>
                                            Dom
                                        </div>
                                    </div>
                            
                                    <div id='fechas'></div>
                                    <button type='button' id='añadir-evento'>
                                    </button>
                                </div>
                            </div>
                            <br><br>
                            <div id='agregarRec'>
                            <div id='contenedorrecord'>
                                <div id='agregarRec'class='importante'>
                                    <div id='tabla' style='text-align:center'>
                                        Lista De Pendientes
                                        <div class='seleccion'>
                                        <br/>
                                        <form id='PendientesForm'>
                                            <input class='Peticion' id='tareaN' name='tareaN' type='text' style='display: line placeholder='Ingresa aquí tu pendiente';'>
                                        </form>
                                            <br>
                                        <button id='btn-aggR' class='RECORD'>Agregar</button
                                        <br>
                                        <div id='Padrelista'>
                                            <br>
                                            <div id='lista'>
                                            </div>
                                            <div id='Contenedor_recor'>
                                            ";
                                        if ($_SESSION["Usuario"]=='Alumno'){
                                            if (isset($_SESSION["NumDeCuenta"])){
                                                $USUARIOCUENTA=$_SESSION["NumDeCuenta"];
                                                $peticion="SELECT ID_Alumno FROM Alumno WHERE ID_NumeroDeCuenta='$USUARIOCUENTA'";
                                                $query=mysqli_query($conexion,$peticion);
                                                $datos = mysqli_fetch_assoc($query);
                                                $ID_Alumno=implode(", ",$datos);
                                                $peticion2="SELECT AHR,Recordatorio FROM alumnohasrecordatorio WHERE ID_Alumno='$ID_Alumno'";
                                                $query2=mysqli_query($conexion,$peticion2);
                                                if($query2){
                                                    while($row=$query2->fetch_array()){
                                                        $Recordatorio=$row['Recordatorio'];
                                                        $IDRECOR=$row['AHR'];
                                                        echo("<br>$Recordatorio <br><form id='BRREC$IDRECOR'><input type='number' name='NUMBOTEL' id='NUMBOTEL' value='$IDRECOR' style='display: none;'><button id='$IDRECOR'>Borrar</button></form>");

                                                    }
                                                }
                                            }
                                        }
                                        if ($_SESSION["Usuario"]=='Profesor'){
                                            if (isset($_SESSION["RFC"])){
                                                $USUARIOCUENTA=$_SESSION["RFC"];
                                                $peticion="SELECT ID_Profesor FROM Profesor WHERE ID_NumRFC='$USUARIOCUENTA'";
                                                $query=mysqli_query($conexion,$peticion);
                                                $datos = mysqli_fetch_assoc($query);
                                                $ID_Profesor=implode(", ",$datos);
                                                $peticion2="SELECT PHR,Recordatorio FROM profesorhasrecordatorios WHERE ID_Profesor='$ID_Profesor'";
                                                $query2=mysqli_query($conexion,$peticion2);
                                                if($query2){
                                                    while($row=$query2->fetch_array()){
                                                        $Recordatorio=$row['Recordatorio'];
                                                        $IDRECOR=$row['PHR'];
                                                        echo("<br>$Recordatorio <br><form id='BRREC$IDRECOR'><input type='number' name='NUMBOTEL' id='NUMBOTEL' value='$IDRECOR' style='display: none;'><button id='$IDRECOR'>Borrar</button></form>");

                                                    }
                                                }
                                            }
                                        }
                                        echo"
                                        </div>
                                        <div id='tareas'>
                                            <!--Aquí van las tareas terminadas y por hacer-->
                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>  
                </div>  
                <div class='container-fluid'>
                    <span class='navbar-brand mb-0 h1'>Aula virtual - Equipo2 | Curso Web 2022</span>
                </div>
                ";
    if ($_SESSION["Usuario"]=='Alumno'){
        echo"
        
        <div id='CREARCLASE' style='display: none'>
            <button id='CREARCLASE2'>Crear clase</button>
        </div>
        ";
    };
    if($_SESSION["Usuario"]=='Alumno'){
        echo"
        <script src='../js/tablonextra2.js'></script>
        ";
    }
    if($_SESSION["Usuario"]=='Profesor'){
        echo"
        <script src='../js/tablonextra1.js'></script>
        ";
    }
    ?>
    <script src="../js/preguntas.js"></script>
    <script src="../js/calendario.js"></script>
    <script src="../js/pendientes.js"></script>
</body>
</html>