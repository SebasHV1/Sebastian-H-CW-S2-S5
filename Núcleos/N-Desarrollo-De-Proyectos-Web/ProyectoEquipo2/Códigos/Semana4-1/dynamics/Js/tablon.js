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

    /////////////////CREAR ANUNCIO/////////////////
    const btnAnuncio = document.getElementById("btn-anuncio");
    const contenedorAnuncios = document.getElementById("contenedorAnuncio");
    const aceptarAnuncio = document.getElementById("aceptar-anuncio");
    const cancelarAnuncio = document.getElementById("cancelar-anuncio");
    const textAnuncio = document.getElementById("text-Anuncio");
    const fileAnuncio = document.getElementById("file-anuncio");

    btnAnuncio.addEventListener("click", ()=>{
        if(contenedorAnuncios.style.display=='none')
            contenedorAnuncios.style.display='block';
        else
            contenedorAnuncios.style.display='none';
    });

    cancelarAnuncio.addEventListener("click", ()=>{
        textAnuncio.value='';
        fileAnuncio.value='';
        contenedorAnuncios.style.display='none';
    });

    aceptarAnuncio.addEventListener("click", (evento)=>{
        evento.preventDefault();
        let crearAnun = new FormData(formAnuncio);
        fetch("./crear_anuncio.php", {
            method:"POST",
            body: crearAnun,
        }).then((response)=>{
            return response.json();
        }).then((datosJSON)=>{
            if(datosJSON.ok == true){
                alert("Todo bien");
            }else{
                alert(datosJSON.texto);
            }
        });
        textAnuncio.value='';
        fileAnuncio.value='';
        contenedorAnuncios.style.display='none';
    });
    ///////////ELIMINAR ANUNCIO////////////
    const CONTENEDORANUNCIOS = document.getElementById("zonaanuncios"); 

    CONTENEDORANUNCIOS.addEventListener("click",(evento)=>{
        
        evento.preventDefault();
        
        if(evento.target.id!='EDIT' && evento.target.id!='editar'){
            let IDBORRAR=evento.target.parentElement;
            console.log(IDBORRAR);
            let AnuncioBorrar = new FormData(IDBORRAR);
            console.log(AnuncioBorrar);
            fetch("./borraranuncio.php",{
                method:"POST",
                body:AnuncioBorrar,
            }).then((response)=>{
                return response.json();
            }).then((datosJSON)=>{
                if(datosJSON.ok == true){
                    alert("Se elimino el anuncio");
                    window.location.href = window.location.href;
                }else{
                    alert(datosJSON.texto);
                }
            });
        }
        ///////////EDITAR ANUNCIO////////////
        if(evento.target.id=='editar'&& evento.target.className!='anuncio'){
            evento.preventDefault();
            let IDEDITAR=evento.target.parentElement;
            console.log(IDEDITAR);
            
            let AnuncioEditar = new FormData(IDEDITAR);
            console.log(AnuncioEditar);
            fetch("./editaranuncio.php",{
                method:"POST",
                body:AnuncioEditar,
            }).then((response)=>{
                return response.json();
            }).then((datosJSON)=>{
                if(datosJSON.ok == true){
                    alert("Se edito correctamente :D");
                    window.location.href = window.location.href;
                }else{
                    alert(datosJSON.texto);
                }
            });
        }
        
    });

    ///////////////EDITAR ANUNCIOS//////////

    CONTENEDORANUNCIOS.addEventListener("click",(evento)=>{
        
    });


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
    var CONTENEDORRECORBASE=document.getElementById("Contenedor_recor");

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
