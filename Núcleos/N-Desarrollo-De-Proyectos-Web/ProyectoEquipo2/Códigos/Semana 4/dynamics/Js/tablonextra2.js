const BTNESTUDIANTEAGREGAR=document.getElementById("AÑADIRCLASE");
const BTNAGG=document.getElementById("aceptarCLASE");
const FORM=document.getElementById("AgregarClaseAlumno");
BTNESTUDIANTEAGREGAR.addEventListener("click",()=>{
    console.log("BTN-AGREGAR CLASE ALUMNOS");
});

function SD(){
  datos2Input=document.getElementsByName("codedelaclase")[0].value;
  datos1Input=document.getElementsByName("nombredelaclase")[0].value;
}

BTNAGG.addEventListener("click",(event)=>{
        console.log("Botón para agregar la clase");
        event.preventDefault();

        let AgregarInfo=new FormData(AgregarClaseAlumno);
        fetch("./AñadirClaseExistente.php", {
            method:"POST",
            body: AgregarInfo,
          }).then((response)=>{
            return response.json();
          }).then((datosJSON)=>{
            if(datosJSON.ok == true){
              alert("Se te añadió en la clase :) No olvides seguir las reglas.");
            }else{
              alert(datosJSON.texto);
            }
          }) 
    });

    FORM.addEventListener("change",()=>{
      console.log("Cambio");
      SD();
      console.log(datos1Input);
      console.log(datos2Input);

      console.log("Verificación del código:"+datos2Input);
      let otraRegex =/([0-9]{3})([A-Z]{4})/g;

      if(otraRegex.test(datos2Input)){
        console.log("Buen código");
      }else{//Si no falso
          alert("Tu código debe contar con los 3 dígitos del grupo + varios caracteres (4), en caso de no tenerlo consulta con tu profesor");
      }
  });