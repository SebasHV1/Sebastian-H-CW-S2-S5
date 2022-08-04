console.log("Conexion");

fetch("../PHP/perfil.php")
.then((Response)=>{
    return Response.json();
})
.then((datosJSON)=>{
    console.log(datosJSON);
});