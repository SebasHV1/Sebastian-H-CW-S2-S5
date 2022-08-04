<?php
    
    session_name("SesionComprobarInicio");
    session_id("0000121");
    session_start();
    if(isset($_SESSION["NumDeCuenta"])){
        header("location: ./dynamics/php/tablon.php");
    }    
?>

<!DOCTYPE html>
<html lang="es">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./statics/style/Diseño.css">
    <script src=" https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js "></script>
    <link href="./statics/libs/bootstrap-5.2.0-beta1-dist/css/bootstrap.css" rel="stylesheet">
    <title>Iniciar sesion</title>
</head>

<body>
    <nav class="navbar bg-light">
      <div class="container-fluid">
          <img id="logo" src="./statics/img/coyote.png" alt="logoENP6">
          <span class="navbar-brand mb-0 h1">Iniciar Sesion</span>
      </div>
    </nav>
    <div class="cuerpo">
      <p class="consejo">
          <br/>
          <br/>
          <br/>
          Inicie sesion, de no tener cuenta cree una.
          <br/>
          <br/>
          <a id="redireccion" href="./templates/FormularioRegistro.html">Registrase</a>
      </p>
      <form id="iniciar" action="./dynamics/php/ComprobarInicio.php" method="post">
          <br>
          <label for="es">Seleccione su rol: </label>
            <select name="es" id="es">
                <option value="Alumno">Alumno</option>
                <option value="Profesor">Profesor</option>
                <option value="Admin">Admin</option>
            </select>
            <BR><BR>
        <div id="FORM-PROFESOR-ALUMNO" style="display:none">
          <div id="Form-Alumno" style="display:none">
            <label for="NumDeCuenta">Numero de cuenta: </label>
                <input class="caja" type="number" id="NumDeCuenta" name="NumDeCuenta" >
        </div>
        <div id="Form-Profesor" style="display:none">
            <label for="NumDeRFC">Numero de RFC: </label>
                <input class="caja" type="text" id="NumDeRFC" name="NumDeRFC">
        </div>
          <br>
          <label for="correo">Dirección de correo: </label>
          <input class="caja" type="email" id="correo" name="correo" >
          <br><br>
        </div>
          <div id="Form-Admin" style="display:none">
              <label for="USERADMIN">User: </label>
                  <input class="caja" type="text" id="USERADMIN" name="USERADMIN">
          </div>
          <label for="contra">Contraseña: </label>
          <input class="caja" type="password" id="contra" name="contra" required>
          <br/>
          <br/>
          <button type="submit">Enviar</button>
          <button type="reset">Eliminar</button>
      </form>
    </div>
    <div class="container-fluid">
      <span class="navbar-brand mb-0 h1">Aula virtual - Equipo2 | Curso Web 2022</span>
    </div>
    <script src="./Dynamics/Js/IniciarSesion.js"></script>
</body>
</html>