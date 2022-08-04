window.addEventListener("load", ()=>{
  const logo = document.getElementById("logo");
  const zonas = document.getElementById("zonas");
  const foro = document.getElementById("RedForo");
  const Redtablon = document.getElementById("RedTablon");
  const usuario = document.getElementById("usuario");
  const opcAlumno = document.getElementById("opcAlumno");
  //const BTNRECORDAR=document.getElementById("btn-aggR");
  const MisCLASES=document.getElementById("Clases");

  logo.addEventListener("click", ()=>{
      if(zonas.style.display=="none")
          zonas.style.display="block";
      else
          zonas.style.display="none";
  });

  zonas.addEventListener("click", (evento)=>{
      if(evento.target.id == "RedForo"){
          console.log("foro");
          window.location.href="./preguntas.php";
      }
          
          
      if(evento.target.id == "RedTablon"){
          console.log("tablon");
          window.location.href="./tablon.php";
      }
          
  });
  usuario.addEventListener("click", ()=>{
      if(opcAlumno.style.display=="none")
        opcAlumno.style.display="block";
      else
        opcAlumno.style.display="none"; 
  });

//   BTNRECORDAR.addEventListener("click", ()=>{
//     console.log("Boton recordatorio");
//   });

  MisCLASES.addEventListener("click", (evento)=>{
    let redirigir=evento.target.id;
    let idClase = redirigir.split('+');
    if(idClase[1]!=undefined){
        window.location.href='./aula.php?id='+idClase[1];
    }
  });


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
      contenedorAsignar.style.display="block";
      console.log("tarea");
  });

  aceptar2.addEventListener("click", (evento)=>{
      console.log("Sirvo");
      evento.preventDefault();
      
      contenedorAsignar.style.display="none";
      tareasPuestas.innerHTML+="<div class='anuncio'>"+NomTarea.value+"<br/>Descripción: "+describe.value+"<br/>"+Apoyo.value+"<br/>Fecha de entreaga: "+FechaEntrega.value+"</div>";
      // tareasPuestas.innerHTML+=;
      // if(Apoyo!='')
      //     tareasPuestas.innerHTML+=;
      // tareasPuestas.innerHTML+=;
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
      // document.getElementById('tarea').reset();
  });

  cancelar.addEventListener("click", (evento)=>{
      evento.preventDefault();
      contenedorAsignar.style.display="none";
      describe.value="";
  });

  // //////////////////CARGAR TAREAS///////////////////
  // let urlPag=window.location.href;
  // let idClase= urlPag.split('=');
  // //console.log(urlPag);
  // console.log(idClase[1]);
  // // const tarea = 'Tarea1';
  // fetch("./mostrarTareas.php?id="+idClase[1])
  //     .then((response)=>{
  //         return response.json();
  //     })
  //     .then((datosJSON)=>{
  //         if(datosJSON.ok == true){
  //             tareasPuestas.innerHTML+="<div class='anuncio'>"+datosJSON.datos.Tarea+"<br/>Descripción: "+datosJSON.datos.Descripcion+"<br/>Pendiente XD<br/>Fecha de entrega: "+datosJSON.datos.Fecha+"</div>";
  //         }
  //     });



  /////////////////////////////////
  ////////////////////////////////
  ///////////CALENDARIO/////////
  ///////////////////////////////
  ///////////////////////////////
  let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];

  let contadorfechas = new Date();
  let contadordias = contadorfechas.getDate();
  let contadornumero = contadorfechas.getMonth();
  let contadoraño = contadorfechas.getFullYear();

  let fechas = document.getElementById('fechas');
  let mes = document.getElementById('mes');
  let año = document.getElementById('año');

  let mesprevio = document.getElementById('mes-anterior');
  let mesposterior = document.getElementById('mes-posterior');

  mes.textContent = meses[contadornumero];
  año.textContent = contadoraño.toString();

  mesprevio.addEventListener('click', ()=>retroceder());
  mesposterior.addEventListener('click', ()=>siguiente());

  const declararmes = (mes) => {

      for(let i = declarardia(); i>0;i--){
          fechas.innerHTML += ` <div class="fecha ultimosdias">
              ${totaldias(contadornumero-1)-(i-1)}
          </div>`;
      }

      for(let i=1; i<=totaldias(mes); i++){
          if(i===contadordias) {
              fechas.innerHTML += ` <div id="${i}_${mes+1}" class="fecha ultimosdias">${i}</div>`;
          }else{
              fechas.innerHTML += ` <div id="${i}_${mes+1}"  class="fecha">${i}</div>`;
          }
      }
  }

  const totaldias = mes => {
      if(mes === -1) mes = 11;

      if (mes == 0 || mes == 2 || mes == 4 || mes == 6 || mes == 7 || mes == 9 || mes == 11) {
          return  31;

      } else if (mes == 3 || mes == 5 || mes == 8 || mes == 10) {
          return 30;

      } else {

          return bisiesto() ? 29:28;
      }
  }

  const bisiesto = () => {
      return ((contadoraño % 100 !==0) && (contadoraño % 4 === 0) || (contadoraño % 400 === 0));
  }

  const declarardia = () => {
      let iniciardia = new Date(contadoraño, contadornumero, 1);
      return ((iniciardia.getDay()-1) === -1) ? 6 : iniciardia.getDay()-1;
  }

  const retroceder = () => {
      if(contadornumero !== 0){
          contadornumero--;
      }else{
          contadornumero = 11;
          contadoraño--;
      }

      unirfecha();
  }

  const siguiente = () => {
      if(contadornumero !== 11){
          contadornumero++;
      }else{
          contadornumero = 0;
          contadoraño++;
      }

      unirfecha();
  }

  const unirfecha = () => {
      contadorfechas.setFullYear(contadoraño,contadornumero,contadordias);
      mes.textContent = meses[contadornumero];
      año.textContent = contadoraño.toString();
      fechas.textContent = '';
      declararmes(contadornumero);
  }

  declararmes(contadornumero);

  // FUNCIONAMIENTO DE LA LISTA DE PENDIENTES
  const agregar = document.getElementById("btn-aggR");
  const input = document.getElementById("tareaN");
  const lista = document.getElementById("lista");
  const borrar = document.getElementsByClassName("borrar");
  const hecha = document.getElementsByClassName("hecha");
  const tareas = document.getElementById("tareas");
  const terminada = document.getElementsByClassName("termianda")
  const asignacion = document.getElementsByClassName("asignacion");
  const CONTENEDORRECORBASE=document.getElementById("Contenedor_recor");

  var faltan=0;
  var terminadas=0;

  agregar.addEventListener("click", (evento) => {
      if(input.value != ''){
          let num=0;
          let existe=0;
          let RecordatorioInfo = new FormData(PendientesForm);
          fetch("./crearrecord.php",{
              method:"POST",
              body:RecordatorioInfo,
          }).then((response)=>{
              return response.json();
          }).then((datosJSON)=>{
              if(datosJSON.ok == true){
                  alert("Se creó tu pendiente :D ... ¡Cuidado de no hacerla! :I");
                  // lista.innerHTML += '<div class="asignacion">'+'<br>' + tareaN.value + '<button class="hecha">Hecha</button><button class="borrar">Borrar</button></div>'; 
              }else{
                  alert(datosJSON.texto);
              }
          });
          lista.innerHTML += '<div class="asignacion">'+'<br>' + tareaN.value + '<br><button class="hecha">Hecha</button><button class="borrar">Borrar</button></div>'; 
          }
      else{
          alert("Agrega una tarea");
      }
      //tareaN.value='';
  });

  lista.addEventListener("click", (evento) => {
      if(evento.target.className === 'borrar'){
          evento.target.parentElement.innerHTML = '';  
      }
      if(evento.target.className === 'hecha' || evento.target.className === 'falta'){
          if(evento.target.className == 'hecha'){
      
              evento.target.outerHTML = '<button class="falta">Por hacer</button>';
          }
          else{
              evento.target.outerHTML = '<button class="hecha">Hecha</button>'
          }
      }
  });

  CONTENEDORRECORBASE.addEventListener("click",(evento)=>{
      evento.preventDefault();
      let IDBORRAR=evento.target.parentElement;
      console.log(IDBORRAR);
      
      
      // FORMULARIO.ID=FORMSSSS;
      // var formData = new FormData($(FORMSSSS));

      // console.log(FORMSSSS);
      let RecordatorioInfoBorrar = new FormData(IDBORRAR);
      console.log(RecordatorioInfoBorrar);
      // let RecordatorioInfoBorrar = IDBORRAR;
      fetch("./borrarrecord.php",{
          method:"POST",
          body:RecordatorioInfoBorrar,
      }).then((response)=>{
          return response.json();
      }).then((datosJSON)=>{
          if(datosJSON.ok == true){
              alert("Se borró tu pendiente :)");
              window.location.href = window.location.href;
          }else{
              alert(datosJSON.texto);
          }
      });
      


  });

});
