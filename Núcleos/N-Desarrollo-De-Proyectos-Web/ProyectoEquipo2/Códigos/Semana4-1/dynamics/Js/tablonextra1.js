    const BTNAGREGARCLASE=document.getElementById("CREARCLASE2");
    const Descripcion = document.getElementById("DescripcionClase");
    const NomClassroom = document.getElementById("nombredelaclase");
    const CodigoClase=document.getElementById("codedelaclase");
    const BTNGUARDARCLS=document.getElementById("aceptar");
    const MisCLASES=document.getElementById("Clases");
    const FORM=document.getElementById("NuevaClaseeee"); 


    function SD(){
      datos2Input=document.getElementsByName("codedelaclase")[0].value;
      datos1Input=document.getElementsByName("nombredelaclase")[0].value;
      datos3Input=document.getElementsByName("DescripcionClase")[0].value;
    }

    FORM.addEventListener("change",()=>{
      console.log("Cambio");
      SD();
      console.log(datos1Input);
      console.log(datos2Input);
      console.log(datos3Input);

      console.log("Verificación del código:"+datos2Input);
      let otraRegex =/([0-9]{3})([A-Z]{4})/g;

      if(datos2Input===""){
        console.log("Agregando datos");
      }else{
        if(otraRegex.test(datos2Input)){
          console.log("Buen código");
          BTNGUARDARCLS.style.display="block";
        }else{//Si no falso
            alert("Profesor: Cree su código de la siguiente manera:   Se tiene que agregar el Número del Grupo(3) y luego 4 caracteres. Ejemplo: 401MATE");
            BTNGUARDARCLS.style.display="none";
        }
      }
    });


    BTNAGREGARCLASE.addEventListener("click",()=>{
        console.log("BTN-AGREGAR CLASE PROFESORES");
    });


    BTNGUARDARCLS.addEventListener("click",(evento)=>{
            console.log("Botón guardar clase");
            evento.preventDefault();
    
            MisCLASES.innerHTML+="<div class='clasesNueva'>"+"NuevaClase<br>"+"Nombre de la clase:"+NomClassroom.value+"<br/>Descripción de la clase: "+Descripcion.value+"<br/> Código de la clase:"+CodigoClase.value+"</div><br>";
            console.log(NuevaClaseeee);
            let ClaseInfo = new FormData(NuevaClaseeee);
            
            fetch("./crear_clase.php", {
                method:"POST",
                body: ClaseInfo,
              }).then((response)=>{
                return response.json();
              }).then((datosJSON)=>{
                if(datosJSON.ok == true){
                  alert("Se creó la clase :D ... Recarga la página para poder utilizarla");
                }else{
                  alert(datosJSON.texto);
                }
              })
              NomClassroom.value="";
              Descripcion.value="";
              CodigoClase.value="";    
        });