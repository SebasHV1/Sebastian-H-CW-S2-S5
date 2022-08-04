console.log("Conexión Tablon JS-PHP");

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

    /////////////////CREAR ANUNCIO/////////////////
    const btnAnuncio = document.getElementById("btn-anuncio");
    const contenedorAnuncios = document.getElementById("contenedorAnuncio");
    const aceptarAnuncio = document.getElementById("aceptar-anuncio");
    const cancelarAnuncio = document.getElementById("cancelar-anuncio");
    const textAnuncio = document.getElementById("text-Anuncio");
    const fileAnuncio = document.getElementById("file-anuncio");

    btnAnuncio.addEventListener("click", ()=>{
        //aparece o desaparece opcion para crear anuncio
        if(contenedorAnuncios.style.display=='none')
            contenedorAnuncios.style.display='block';
        else
            contenedorAnuncios.style.display='none';
    });

    cancelarAnuncio.addEventListener("click", ()=>{
        //desaparece crear anuncio y borra los datos ingresados
        textAnuncio.value='';
        fileAnuncio.value='';
        contenedorAnuncios.style.display='none';
    });

    aceptarAnuncio.addEventListener("click", (evento)=>{
        //manda la información del anuncio
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
        window.location.href=window.location.href;
        textAnuncio.value='';
        fileAnuncio.value='';
        contenedorAnuncios.style.display='none';
    });
    ///////////ELIMINAR ANUNCIO////////////
    const CONTENEDORANUNCIOS = document.getElementById("zonaanuncios"); 

    CONTENEDORANUNCIOS.addEventListener("click",(evento)=>{
        
        evento.preventDefault();
        
        if(evento.target.id!='EDIT' && evento.target.id!='editar'){//revisa que no se de click en otra opción
            let IDBORRAR=evento.target.parentElement;//toma el ID del anuncio requerido
            console.log(IDBORRAR);
            let AnuncioBorrar = new FormData(IDBORRAR);//crea form con el ID del anuncio
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
        if(evento.target.id=='editar'&& evento.target.className!='anuncio'){//revisa que se presiona el boton para cambiar
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
});
