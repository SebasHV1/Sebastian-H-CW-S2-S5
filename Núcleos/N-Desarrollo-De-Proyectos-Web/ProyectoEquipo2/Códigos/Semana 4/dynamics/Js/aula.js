window.addEventListener("load", ()=>{
  //OPCIONES DE USUARIO
  const logo = document.getElementById("logo");
  const zonas = document.getElementById("zonas");
  const usuario = document.getElementById("usuario");
  const opcAlumno = document.getElementById("opcAlumno");
  const MisCLASES=document.getElementById("Clases");
  const btnCerrar = document.getElementById("cerrarsesion");

  logo.addEventListener("click", ()=>{
      //aparece o desaparece zona para redirigir
      if(zonas.style.display=="none")
          zonas.style.display="block";
      else
          zonas.style.display="none";
  });

  zonas.addEventListener("click", (evento)=>{
      //al dar click a una opción te redirige
      if(evento.target.id == "RedForo"){
          window.location.href="./preguntas.php";
      }

      if(evento.target.id == "RedTablon"){
          window.location.href="./tablon.php";
      }    
  });

  usuario.addEventListener("click", ()=>{
      //aparece o desaparece zona para ver opciones de alumno
      if(opcAlumno.style.display=="none")
          opcAlumno.style.display="block";
      else
          opcAlumno.style.display="none";
  });

  btnCerrar.addEventListener("click",()=>{
      //avisa que la sesión se cerro 
      console.log("Cerrar sesión")
      alert("Se cerró la sesión correctamente");
  });

  MisCLASES.addEventListener("click", (evento)=>{
      //redirige a una clase
      let idCompleto = evento.target.id;//toma el id completo del objeto
      let idClase= idCompleto.split('+');//rompe la cadena
      if(idClase[1]!=undefined){//revisa el arreglo donde debe ir el id de la clase
          window.location.href='./aula.php?id='+idClase[1];//redirecciona a la clase mandando su id
      }
  });

  //CREAR TAREA PARA PROFESOR
  const botonTarea = document.getElementById("agregarTarea");
  const contenedorAsignar = document.getElementById("contenedor-asignar");
  const tareasPuestas = document.getElementById("tareasPuestas");
  const aceptar2 = document.getElementById("aceptar2");
  const cancelar = document.getElementById("cancelar");
  const describe = document.getElementById("describe");
  const NomTarea = document.getElementById("NomTarea");
  const Apoyo = document.getElementById("Apoyo");
  const FechaEntrega = document.getElementById("FechaEntrega");
  const tablon = document.getElementById("tablon");

  botonTarea.addEventListener("click", (evento)=>{
    //muestra contenedor para asignar tarea  
    contenedorAsignar.style.display="block";
    console.log("tarea");
  });

  aceptar2.addEventListener("click", (evento)=>{
      evento.preventDefault();
      
      contenedorAsignar.style.display="none";//desaparece contenedor
      tareasPuestas.innerHTML+="<div class='anuncio'>"+NomTarea.value+"<br/>Descripción: "+describe.value+"<br/>"+Apoyo.value+"<br/>Fecha de entreaga: "+FechaEntrega.value+"</div>";
      //muestrra la tarea en la tabla
      let tarea = new FormData(asignar);
      let urlPag=window.location.href;
      let idClase= urlPag.split('=');
      console.log(idClase[1]);
      fetch("./crear_tarea.php", {
          method:"POST",
          body: tarea,
        }).then((response)=>{
          return response.json();
        }).then((datosJSON)=>{
          if(datosJSON.ok == true){
            alert("Todo bien");
          }else{
            alert(datosJSON.texto);
          }
        });
        NomTarea.value="";
        describe.value="";
        Apoyo.value="";
        FechaEntrega.value="";
  });

  cancelar.addEventListener("click", (evento)=>{
      evento.preventDefault();
      contenedorAsignar.style.display="none";
      describe.value="";
  });

});
