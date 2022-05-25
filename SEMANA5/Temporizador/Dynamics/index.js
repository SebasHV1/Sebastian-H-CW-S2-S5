

const Click=document.getElementById("ola");
const Form=document.getElementById("form");
const Enviar=document.getElementById("Enviar");
const Cerrar=document.getElementById("Cerrar");
const Iniciar=document.getElementById("start");
const Reiniciar=document.getElementById("restart");
const timerrrr=document.getElementById("timerrrr");
const MinutosLugar=document.getElementById("minutos");
const SegundosLugar=document.getElementById("segundos");
const REINICIARRR=document.getElementById("Reiniciar");
const audioJi=new Audio("./Alarma.mp3");
const contenedorrojo=document.getElementById("abuelo");
const relojes=document.getElementById("reloj");
const botones=document.getElementById("botones");

let Minutos;
let Segundos;
let MinutosGuardados=0;
let SegundosGuardados=0;
let MinutosCalculo=0;
let SegundosCalculo=0;
let MinutosRespaldo=0;
let intervalo=null;
let SegundosAlmacenadosEnMinutosRespaldo=0;
let TS=0;

function SD(){ //Sacar datos del forms
    Minutos =document.getElementsByName("minutos")[0].value;
    Segundos =document.getElementsByName("segundos")[0].value;
    
    console.log("SD Numero de minutos:"+Minutos);
    console.log("SD Numero de segundos:"+Segundos);

    MinutosGuardados=Minutos;
    SegundosGuardados=Segundos;
    SegundosRespaldo=Segundos;
    MinutosRespaldo=Minutos;

    if(MinutosGuardados>59){
        MinutosGuardados=59;
        MinutosRespaldo=59;
    }
    if(SegundosGuardados>59){
        SegundosGuardados=59;
        SegundosRespaldo=59;
    }

    if(MinutosGuardados<0){
        MinutosGuardados=0;
        MinutosRespaldo=0;
    }
    if(SegundosGuardados<0){
        SegundosGuardados=0;
        SegundosRespaldo=0;
    }

}

Click.addEventListener("click",()=>{
    Form.style.display="block";
    contenedorrojo.style.height="690px";
});

Enviar.addEventListener("click",()=>{
    Form.style.display="none";
    console.log("Se colocaron los números en el timer");
    SD();
    console.log();
    console.log("Enviar :  ."+MinutosGuardados);
    console.log("Enviar :  ."+SegundosGuardados);
    if(MinutosGuardados != NaN){
        Form.style.display="block";
    }
    if(SegundosGuardados != NaN){
        Form.style.display="block";
    }
    if(MinutosGuardados == 0){
        Form.style.display="block";
    }
    if(SegundosGuardados == 0){
        Form.style.display="block";
    }
    timerrrr.style.display="none";
    Form.style.display="none";
    holaaa.style="display:block"
    contenedorrojo.style.height="630px";
    botones.style.display="block";

    //Operaciones para saber los segundos totales y después ponerlas en las variables para evitar el Tempo
    console.log(".");
    console.log("Operaciones Respaldo + Horas Guardadas almacen");

    console.log(MinutosRespaldo+" Minutos en el Respaldo");


    SegundosAlmacenadosEnMinutosRespaldo=MinutosRespaldo*60;
    TS=SegundosRespaldo*1;
    console.log("Segundos AENMR: "+SegundosAlmacenadosEnMinutosRespaldo);
    console.log("Segundos TS: (Etapa1)"+TS);
    console.log(".");
    console.log(".");
    console.log(".");
    console.log(".");
    TS=SegundosAlmacenadosEnMinutosRespaldo+TS+1;
    console.log("Segundos TotaleS (Etapa2): "+TS);
});
Cerrar.addEventListener("click",()=>{
    Form.style.display="none";
    console.log("Se cerro el timer");
});

   
Iniciar.addEventListener("click",()=>{
    console.log("Iniciar timer");
    intervalo=setInterval(Segundossss,1000);
    
    
});

Reiniciar.addEventListener("click",()=>{
    console.log("Se pauso el timer");
    clearInterval(intervalo)
});

REINICIARRR.addEventListener("click",()=>{
    console.log("Se reinicio el timer");
    clearInterval(intervalo)
    MinutosGuardados=MinutosRespaldo;
    SegundosGuardados=SegundosRespaldo;
    intervalo=setInterval(Segundossss,1000);
    
});

let SegundosGuardados2=0;

function Segundossss(){

    if(SegundosCalculo<0&&MinutosGuardados<0){
        clearInterval(intervalo);
        audioJi.volume=.2;
        audioJi.play();
        
    }else{
        if(SegundosGuardados<0){
        SegundosGuardados=59;
    }
    if(SegundosGuardados<10){
        SegundosCalculo =`0${SegundosGuardados}`;
    }else{
        SegundosCalculo=SegundosGuardados;
    }
    SegundosLugar.innerHTML=SegundosCalculo;
    
    SegundosGuardados --;
    SegundosGuardados2 ++;
    Minutosss(SegundosGuardados);
    }
    
    
    if(TS==SegundosGuardados2){
        clearInterval(intervalo);
        audioJi.volume=.2;
        audioJi.play();
        console.log("Termino el timer");
    }


    // Activar para verificar en la consola
    console.log(SegundosGuardados+".  SegundosGuardados");
    console.log(SegundosGuardados2+".  SegundosGuardadosAlmacenados");
    console.log(MinutosGuardados+".  MinutosGuardados");
}

if(MinutosGuardados==-1){
    clearInterval(intervalo);
    audioJi.volume=.2;
    audioJi.play();
    console.log("Termino el timer");
}

function Minutosss(){
    
    if(SegundosGuardados==-1&& MinutosGuardados!==0){
        setTimeout(()=>{
            MinutosGuardados--;
        },500)
    }else if(SegundosGuardados==-1&& MinutosGuardados!==0){
        setTimeout(()=>{
            MinutosGuardados=59;
        },500)
    }
    if(MinutosGuardados<10){
        MinutosCalculo=`0${MinutosGuardados}`;
    }else{
        MinutosCalculo=MinutosGuardados;
    }
    MinutosLugar.innerHTML=MinutosCalculo;
}

console.log(MinutosCalculo);
console.log(SegundosCalculo);

function STOP(){
    if(MinutosGuardados<0){
        clearInterval(intervalo);
    }
}