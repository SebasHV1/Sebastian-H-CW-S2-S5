console.log("Conexión correcta Iniciar Sesion PHP")
Alumno=document.getElementById("Form-Alumno");
Profesor=document.getElementById("Form-Profesor");
Admin=document.getElementById("Form-Admin");
FORMPA=document.getElementById("FORM-PROFESOR-ALUMNO");
Rol2=document.getElementById("es");

Rol =document.getElementsByName("es")[0].value;

if(Rol=='Alumno'||Rol=='Profesor'){
    FORMPA.style.display="block";
    Admin.style.display="none";
}
if(Rol=='Alumno'){
    console.log("Formulario para alumno");
    Alumno.style.display="block";
    Profesor.style.display="none";
}

if(Rol=='Profesor'){
    console.log("Formulario para Profesor");
    Alumno.style.display="none";
    Profesor.style.display="block";
}
if(Rol=='Admin'){
    console.log("Formulario Para el admin");
    FORMPA.style.display="none";
}

Rol2.addEventListener("change",()=>{
    console.log("Cambio");
    Rol =document.getElementsByName("es")[0].value;
    if(Rol=='Alumno'||Rol=='Profesor'){
        FORMPA.style.display="block";
        Admin.style.display="none";
    }

    if(Rol=='Alumno'){
        console.log("Formulario para alumno");
        Alumno.style.display="block";
        Profesor.style.display="none";
    }
    
    if(Rol=='Profesor'){
        console.log("Formulario para Profesor");
        Alumno.style.display="none";
        Profesor.style.display="block";
    }
    if(Rol=='Admin'){
        console.log("Formulario Para el admin");
        FORMPA.style.display="none";
        Admin.style.display="block";
    }
});