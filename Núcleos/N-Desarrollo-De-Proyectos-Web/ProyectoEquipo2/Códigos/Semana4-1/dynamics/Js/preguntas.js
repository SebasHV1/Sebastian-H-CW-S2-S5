console.log("Conexión Tablon JS-PHP");

const btnCerrar = document.getElementById("cerrarsesion");

btnCerrar.addEventListener("click",()=>{
    console.log("Cerrar sesión")
    alert("Se cerró la sesión correctamente");
});

window.addEventListener("load", ()=>{
    const logo = document.getElementById("logo");
    const zonas = document.getElementById("zonas");
    const foro = document.getElementById("RedForo");
    const tablon = document.getElementById("RedTablon");
    const usuario = document.getElementById("usuario");
    const opcAlumno = document.getElementById("opcAlumno");
    const BTNRECORDAR=document.getElementById("btn-aggR");
    // const BTNAGREGARCLASE=document.getElementById("CREARCLASE2");
    // const Descripcion = document.getElementById("DescripcionClase");
    // const NomClassroom = document.getElementById("nombredelaclase");
    // const CodigoClase=document.getElementById("codedelaclase");
    // const BTNGUARDARCLS=document.getElementById("aceptar");
    const MisCLASES=document.getElementById("Clases");
    // const BTNESTUDIANTEAGREGAR=document.getElementById("AÑADIRCLASE");
    // const BTNAGG=document.getElementById("aceptarCLASE");


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

    /////////////////CREAR preguntas/////////////////
    const btnpreguntar = document.getElementById("btn-preguntar");
    const contenedorPreguntas = document.getElementById("contenedorPreguntas");
    const aceptarPregunta = document.getElementById("aceptar-pregunta");
    const cancelarPregunta = document.getElementById("cancelar-pregunta");
    const PreguntaAnuncio = document.getElementById("Pregunta-Anuncio");

    btnpreguntar.addEventListener("click", ()=>{
        if(contenedorPreguntas.style.display=='none')
            contenedorPreguntas.style.display='block';
        else
            contenedorPreguntas.style.display='none';
    });

    cancelarPregunta.addEventListener("click", ()=>{
        PreguntaAnuncio.value='';
        contenedorPreguntas.style.display='none';
    });

    aceptarPregunta.addEventListener("click", (evento)=>{
        evento.preventDefault();
        let crearAnun = new FormData(formPreguntas);
        fetch("./añadirpreguntas.php", {
            method:"POST",
            body: crearAnun,
        }).then((response)=>{
            return response.json();
        }).then((datosJSON)=>{
            if(datosJSON.ok == true){
                alert("Se realizó tu pregunta ¡esperemos que pronto la contesten!");
            }else{
                alert(datosJSON.texto);
            }
        });
        PreguntaAnuncio.value='';
        contenedorPreguntas.style.display='none';
    });

    let FormRespuesta;
    let a;
    // const ACEPTARRESPUESTA=document.getElementsByClassName("aceptar-respuesta");
    const DIVRESPUESTAS=document.getElementById("responder");
    DIVRESPUESTAS.addEventListener("click",(evento)=>{
        if(evento.target.id!='Pregunta-Respuesta'){
            evento.preventDefault();
            let IDBORRAR=evento.target.parentElement;
            FormRespuesta=new FormData(IDBORRAR);
            console.log(evento.target.parentElement);
            fetch("./Guardarrespuestas.php",{
                method:"POST",
                body:FormRespuesta,
            }).then((response)=>{
                return response.json();
            }).then((datosJSON)=>{
                if(datosJSON.ok == true){
                    alert("Se respondió la pregunta :)");
                    window.location.href=window.location.href;
                }
                else{
                    alert(datosJSON.texto);
                }
            });
        }
        });

        // DIVRESPUESTAS.addEventListener("click",(evento)=>{
        //     evento.preventDefault();
        //     let IDBORRAR=evento.target.id;
        //     console.log(IDBORRAR);
        //     FormRespuesta=new FormData(evento.target.parentElement);
        //     console.log(evento.target.parentElement);
        

    // const DIVRESPUESTAS=document.getElementById("responder");
    // DIVRESPUESTAS.addEventListener("click",(evento)=>{
    //     evento.preventDefault();
    //     let Caracteristicas=evento.target.id;
    //     console.log(Caracteristicas);
    //     console.log(CARAC);
    //     let ContestarPreguntas=new FormData(responderpreguntas);
    //     let Contestar=evento.target.parentElement;
    //     console.log(ContestarPreguntas+Contestar);
    //     fetch("./borrarrecord.php",{
    //         method:"POST",
    //         body:RecordatorioInfoBorrar,
    //     }).then((response)=>{
    //         return response.json();
    //     }).then((datosJSON)=>{
    //         if(datosJSON.ok == true){
    //             alert("Se borró tu pendiente :)");
    //             window.location.href=window.location.href;
    //         }
    //         else{
    //             alert(datosJSON.texto);
    //         }
    //     });
    // });
    


    usuario.addEventListener("click", ()=>{
        if(opcAlumno.style.display=="none")
            opcAlumno.style.display="block";
        else
            opcAlumno.style.display="none";
    });

    BTNRECORDAR.addEventListener("click",()=>{
        console.log("Botón agregar recordatorio");
    });

    MisCLASES.addEventListener("click", (evento)=>{
        let redirigir = evento.target.id;
        let idClase= redirigir.split('+');
        if(idClase[1]!=undefined){
            window.location.href='./aula.php?id='+idClase[1];
        }
    });

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
                    // tareas.innerHTML += '<p>Tareas terminadas: ' + terminadas + '.<p>';
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

    CONTENEDORRECORBASE.addEventListener("click", (evento)=>{
        evento.preventDefault();
        let IDBORRAR=evento.target.parentElement;
        console.log(IDBORRAR);

        let RecordatorioInfoBorrar=new FormData(IDBORRAR);
        console.log(RecordatorioInfoBorrar);
        fetch("./borrarrecord.php",{
            method:"POST",
            body:RecordatorioInfoBorrar,
        }).then((response)=>{
            return response.json();
        }).then((datosJSON)=>{
            if(datosJSON.ok == true){
                alert("Se borró tu pendiente :)");
                window.location.href=window.location.href;
            }
            else{
                alert(datosJSON.texto);
            }
        });
    });
        // BTNAGREGARCLASE.addEventListener("click",()=>{
            //     console.log("BTN-AGREGAR CLASE PROFESORES");
            // });

            // BTNESTUDIANTEAGREGAR.addEventListener("click",()=>{
            //     console.log("BTN-AGREGAR CLASE ALUMNOS");
            // });

            // BTNGUARDARCLS.addEventListener("click",(evento)=>{
            //     console.log("Botón guardar clase");
            //     evento.preventDefault();

            //     MisCLASES.innerHTML+="<div class='clasesNueva'>"+"NuevaClase<br>"+"Nombre de la clase:"+NomClassroom.value+"<br/>Descripción de la clase: "+Descripcion.value+"<br/> Código de la clase:"+CodigoClase.value+"</div><br>";
                
            //     let ClaseInfo = new FormData(NuevaClaseeee);
            //     fetch("./crear_clase.php", {
            //         method:"POST",
            //         body: ClaseInfo,
            //       }).then((response)=>{
            //         return response.json();
            //       }).then((datosJSON)=>{
            //         if(datosJSON.ok == true){
            //           alert("Se creó la clase :D ... Recarga la página para poder utilizarla");
            //         }else{
            //           alert(datosJSON.texto);
            //         }
            //       })
            //       NomClassroom.value="";
            //       Descripcion.value="";
            //       CodigoClase.value="";    
            // });

            // BTNAGG.addEventListener("click",(event)=>{
            //     console.log("Botón para agregar la clase");
            //     event.preventDefault();

            //     let AgregarInfo=new FormData(AgregarClaseAlumno);
            //     fetch("./AñadirClaseExistente.php", {
            //         method:"POST",
            //         body: AgregarInfo,
            //       }).then((response)=>{
            //         return response.json();
            //       }).then((datosJSON)=>{
            //         if(datosJSON.ok == true){
            //           alert("Se te añadió en la clase :) No olvides seguir las reglas.");
            //         }else{
            //           alert(datosJSON.texto);
            //         }
            //       }) 
            // });

});
