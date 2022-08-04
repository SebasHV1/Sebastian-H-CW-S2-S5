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


    /////////////////CREAR preguntas/////////////////
    const btnpreguntar = document.getElementById("btn-preguntar");
    const contenedorPreguntas = document.getElementById("contenedorPreguntas");
    const aceptarPregunta = document.getElementById("aceptar-pregunta");
    const cancelarPregunta = document.getElementById("cancelar-pregunta");
    const PreguntaAnuncio = document.getElementById("Pregunta-Anuncio");

    btnpreguntar.addEventListener("click", ()=>{
        //aparece o desaparece el form de pregunta
        if(contenedorPreguntas.style.display=='none')
            contenedorPreguntas.style.display='block';
        else
            contenedorPreguntas.style.display='none';
    });

    cancelarPregunta.addEventListener("click", ()=>{
        //desaparece y borra el contenido del formulario de pregunta
        PreguntaAnuncio.value='';
        contenedorPreguntas.style.display='none';
    });

    aceptarPregunta.addEventListener("click", (evento)=>{
        //manda el formulario con la pregunta
        evento.preventDefault();//previene algun error
        let crearPreg = new FormData(formPreguntas);//crea un formulario para evitar redirección
        fetch("./añadirpreguntas.php", {//archivo donde se mandara la información
            method:"POST",//metodo con el que se manda la pregunta
            body: crearPreg,//formulario que se mandara
        }).then((response)=>{
            return response.json();//convierte los datos en formato JSON
        }).then((datosJSON)=>{
            if(datosJSON.ok == true){//Regresa si la petición se logro
                alert("Se realizó tu pregunta ¡esperemos que pronto la contesten!");
            }else{
                alert(datosJSON.texto);//Regresa si la petición no se logro
            }
        });
        PreguntaAnuncio.value='';//Borra contenido de form
        contenedorPreguntas.style.display='none';//Desaparece form
    });

    
    const DIVRESPUESTAS=document.getElementsByClassName("responder");//SE AGREGA LA CLASE DE LAS RESPUESTAS
    for(var i=0; i<DIVRESPUESTAS.length; i++){//SE HACE UN FOR POR LA CANTIDAD DE PREGUNTAS QUE HAY
        DIVRESPUESTAS[i].addEventListener("click",(evento)=>{//SE PONE DIVRESPUESTAS[i] PARA TENER DISTINTOS EVENTOS CON MISMA ESTRUCTURA
            if(evento.target.id!='Pregunta-Respuesta'){
                evento.preventDefault();//previene algun error
                let IDPREGUNTA=evento.target.parentElement;//Se crea como objeto del formulario
                let FormRespuesta=new FormData(IDPREGUNTA);//Se manda el objeto de formulario
                console.log(evento.target.parentElement);
                fetch("./Guardarrespuestas.php",{//archivo donde se mandara la información
                    method:"POST",//metodo con el que se manda la pregunta
                    body:FormRespuesta,//formulario que se mandara
                }).then((response)=>{
                    return response.json();//convierte los datos en formato JSON
                }).then((datosJSON)=>{
                    if(datosJSON.ok == true){//Regresa si la petición se logro
                        alert("Se respondió la pregunta :)");
                        window.location.href=window.location.href;//redirige a la misma pagina para mostrar los cambios
                    }
                    else{
                        alert(datosJSON.texto);//Regresa si la petición no se logro
                    }
                });
            }
        });
    }
});
