const canvas=document.getElementById("MICANVAS");
const ctx= canvas.getContext("2d");

// //Interavlo actualizar desactivado (Activar al acabar codigo)
var intervalID = window.setInterval(SD, 3000);
// AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA

const DATOS=document.getElementById("padre");
const Picos =document.getElementById("Picos");
const Picudo =document.getElementById("picudo");
const CESTRELLA =document.getElementById("CESTRELLA");
const CFONDO=document.getElementById("CFONDO");
const relleno = document.getElementById("Relleno");
const contorno = document.getElementById("contorno");
let r=relleno.value;

    relleno.addEventListener("click",() =>{
        if(r==0){
                console.log("Activo el relleno");
                r=1;
        }else{
                console.log("Desactivo el relleno");
                r=0;
        }

    });

DATOS.addEventListener("change",DrawEstrella);

function SD(){ //Sacar datos del forms PAL JS
    Picos1 =document.getElementsByName("Picos")[0].value;
    Picudo1 =document.getElementsByName("picudo")[0].value;
    contorno1 =document.getElementsByName("contorno")[0].value;
    CESTRELLA1 =document.getElementsByName("CESTRELLA")[0].value;
    CFONDO1=document.getElementsByName("CFONDO")[0].value;
    relleno1 = document.getElementById("Relleno");
    console.log("----------------");
    console.log("¡Nueva actualización!");
    console.log("----------------");
    console.log(" ");
    console.log("Numero de Picos:"+Picos1);
    console.log("Numero de Picudo:"+Picudo1);
    console.log("Numero de contorno:"+contorno1);
    console.log("Color de estrella:"+CESTRELLA1);
    console.log("Color del fondo:"+CFONDO1);
    console.log(relleno1);
    console.log(" ");

}

let CENTROCANVASX = canvas.width/2;
let CENTROCANVASY = canvas.height/2;
let RADIOG = 180, alt = false;
let radio, ANG;
let X,Y;
ctx.fillStyle = CFONDO.value;
ctx.fillRect(0,0,canvas.width,canvas.height);

function DrawEstrella(){
        
    let NP = Picos.value;
    if(NP == ""){
        alert("No ingresaste un número del rango (4-30) en *Número de Picos*");
    } else if (NP < 4 || NP > 30){
        alert("Ingresaste el número de picos fuera del rango (0,40) en *Número de Picos*");
    } else {
        ctx.fillStyle = CFONDO.value;
        ctx.fillRect(0,0,canvas.width,canvas.height);
        //RespaldoVariables
        ctx.lineWidth = contorno.value;
        let PicudoVaNCHO = Picudo.value;
        let COLORESTRELLA = CESTRELLA.value;
        let RELLENOOPTION = relleno.checked;
        let RADIOMENOR = PicudoVaNCHO;
        let PUNTITOS = NP*2;
        //RespaldoVariables
        let FRACCIONANG = (Math.PI*2)/PUNTITOS;
        ctx.beginPath();
        for(let i=0; i<PUNTITOS; i++){
            if(alt === true){
                radio = RADIOMENOR;
                alt = false;
            } else {
                radio = RADIOG;
                alt = true;
            }
            ANG = i * FRACCIONANG;
            X = radio * Math.cos(ANG) + CENTROCANVASX;
            Y = radio * Math.sin(ANG) + CENTROCANVASY;
            ctx.lineTo(X,Y);
        }
        ctx.closePath();
        ctx.fillStyle = CFONDO.value;
        if(RELLENOOPTION == true){
            ctx.fillStyle = COLORESTRELLA;
        }
        ctx.fill();
        ctx.strokeStyle = COLORESTRELLA;
        ctx.stroke();
    }
}
