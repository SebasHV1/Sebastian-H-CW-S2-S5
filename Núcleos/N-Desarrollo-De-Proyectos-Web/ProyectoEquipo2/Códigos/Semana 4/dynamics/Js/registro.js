console.log("Conexión correcta-registro");

Alumno=document.getElementById("Form-Alumno");
Profesor=document.getElementById("Form-Profesor");
Grupos=document.getElementById("Grupos-Alumno");
Rol2=document.getElementById("es");
Formulario=document.getElementById("formulariodesp");
Formulario2=document.getElementById("registro");
NUMERODECUENTA=document.getElementById("NumDeCuenta");
NUMERODERFC=document.getElementById("NumDeRFC");
BTNENVIARREG=document.getElementById("BTNENVIARREG");
Rol =document.getElementsByName("es")[0].value;


function SD(){ //Sacar datos del forms PAL JS
    nombre =document.getElementsByName("nombre")[0].value;
    // console.log(nombre);
    apellidos =document.getElementsByName("apellidos")[0].value;
    // console.log("Apellidos:"+apellidos);
    NumDeContacto =document.getElementsByName("NumDeContacto")[0].value;
    // console.log("Numero de Contacto:"+NumDeContacto);
    if(Rol=='Alumno'){
        NumDeCuenta =document.getElementsByName("NumDeCuenta")[0].value;
        GRUPO =document.getElementsByName("Grupo")[0].value;
        // console.log("Número de Cuenta: "+NumDeCuenta);
        // console.log("Número de Grupo: "+GRUPO);
    }
    if(Rol=='Profesor'){
        NumDeRFC =document.getElementsByName("NumDeRFC")[0].value;
        // console.log(NumDeRFC);
    }
    correoo =document.getElementsByName("correo")[0].value;
    // console.log("Correo:"+correoo);
    contraseña =document.getElementsByName("contra")[0].value;
    // console.log("Contraseña:"+contraseña);
    contraseña2 =document.getElementsByName("comprobar")[0].value;
    // console.log("Respaldo contraseña:"+contraseña2);

    if(Rol=='Alumno'){
        if(nombre==="" &&apellidos==="" && NumDeContacto==="" && NumDeCuenta==="" && GRUPO!=="" && correoo==="" && contraseña==="" && contraseña2===""){
            console.log("SE DESACTIVA BOTON");
            BTNENVIARREG.style.display="none";
        }
        if(nombre!=="" &&apellidos!=="" && NumDeContacto!=="" && NumDeCuenta!=="" && GRUPO!=="" && correoo!=="" && contraseña!=="" && contraseña2!==""){
            console.log("SE ACTIVA EL BOTON");
            console.log("Verificación del Número de Cuenta:"+NumDeCuenta);
            let otraRegex =/(321){1}[0-9]{6}/g;

            if(otraRegex.test(NumDeCuenta)){
                console.log("NDC=VALID1");
                BTNENVIARREG.style.display="BLOCK";
            }else{//Si no falso
                alert("¡ESE NÚMERO DE CUENTA NO ES VÁLIDO!");
            }
        }
    }
    if(Rol=='Profesor'){
        if(nombre==="" &&apellidos==="" && NumDeContacto==="" && NumDeRFC==="" && correoo==="" && contraseña==="" && contraseña2===""){
            console.log("SE DESACTIVA BOTON");
            BTNENVIARREG.style.display="none";
        }
        if(nombre!=="" &&apellidos!=="" && NumDeContacto!=="" && NumDeRFC!=="" && correoo!=="" && contraseña!=="" && contraseña2!==""){
            console.log("SE ACTIVA EL BOTON");
            console.log("Verificación Número de RFC:"+NumDeRFC);
            let otraRegex =/[A-Z]{4}[0-9]{6}[A-Z]{2}[0-9]{1}/g;
            if(otraRegex.test(NumDeRFC)){
                console.log("RFC=VALID1");
                BTNENVIARREG.style.display="BLOCK";
            }else{//Si no falso
                alert("¡ESE RFC NO ES VÁLIDO!");
            }
        }
    }
    
}

Formulario2.addEventListener("change",()=>{
    SD();
});


if(Rol=='Alumno'){
    console.log("Formulario para alumno");
    Alumno.style.display="block";
    Profesor.style.display="none";
    Grupos.style.display="block";
}

if(Rol=='Profesor'){
    console.log("Formulario para Profesor");
    Alumno.style.display="none";
    Profesor.style.display="block";
    Grupos.style.display="none";
}

Rol2.addEventListener("change",()=>{
    console.log("Cambio");
    Rol =document.getElementsByName("es")[0].value;
    if(Rol=='Alumno'){
        console.log("Formulario para alumno");
        Alumno.style.display="block";
        Profesor.style.display="none";
        Grupos.style.display="block";
    }
    
    if(Rol=='Profesor'){
        console.log("Formulario para Profesor");
        Alumno.style.display="none";
        Profesor.style.display="block";
        Grupos.style.display="none";
    }
});



