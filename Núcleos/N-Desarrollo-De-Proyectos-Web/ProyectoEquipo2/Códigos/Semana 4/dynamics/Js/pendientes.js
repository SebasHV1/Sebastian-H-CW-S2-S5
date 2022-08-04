window.addEventListener("load", ()=>{
    const agregar = document.getElementById("btn-aggR");
    const input = document.getElementById("tareaN");
    const lista = document.getElementById("lista");
    const CONTENEDORRECORBASE=document.getElementById("Contenedor_recor");

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
                }else{
                    alert(datosJSON.texto);
                }
            });
            lista.innerHTML += '<div class="asignacion">'+'<br>' + tareaN.value + '</div>'; 
            }
        else{
            alert("Agrega una tarea");
        }
    });

    lista.addEventListener("click", (evento) => {
        if(evento.target.className === 'borrar'){
            evento.target.parentElement.innerHTML = '';  
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
});