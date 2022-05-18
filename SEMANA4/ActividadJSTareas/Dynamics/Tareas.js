const input= document.getElementById("input");
const agregar= document.getElementById("agregar");
const materia=document.getElementById("materia");
const lista=document.getElementById("TareasRestantes");
const materia1= document.getElementById("materia1");
const materia2= document.getElementById("materia2");
const materia3= document.getElementById("materia3");
const materia4= document.getElementById("materia4");
const materia5= document.getElementById("materia5");
const materia6= document.getElementById("materia6");
const padre2=document.getElementById("padre2");
const form=document.getElementById("formulariootra");
const input2=document.getElementById("input2");

n=0;
m=0;
agregar.addEventListener("click",(evento)=>{
    
    console.log("Añadir tarea");
    n=n+1;
    console.log(n);
    console.log(m);
    if(materia.value===materia6.value){
        console.log("Se habilita barra texto 2");
        lista.innerHTML+='<br><li><button class="boton">Arriba</button><button class="boton">Abajo</button><button id="acado"class="boton'+n+'">Marcar como acabada</button><button class="botonborrar">Borrar</button>   Materia Personalizada:'+input2.value+"<br>Indicaciones de la tarea: "+input.value+'</li><hr>';
        
    }
    if(materia.value != materia6.value){
        lista.innerHTML+='<br><li><button class="boton">Arriba</button><button class="boton">Abajo</button><button id="acado"class="boton'+n+'">Marcar como acabada</button><button class="botonborrar">Borrar</button>   Materia: '+materia.value+"<br>Indicaciones de la tarea: "+input.value+'</li><hr>';
        lista.innerHTML+='<br>'
        
    }
    document.getElementById("padre2").style.background = "white";
    padre2.style.display="block";
    // padre2.innerHTML+=m+' de '+n;
    
});

lista.addEventListener("click",(evento)=>{
    console.log(evento.target);
    if(evento.target.className==='botonborrar'){
        evento.target.parentElement.outerHTML='';
        evento.target.parentElement.outerHTML='<br>';
    }
});
lista.addEventListener("click",(evento)=>{
    console.log(evento.target);
    if(evento.target.className==='boton"+n+"'){
        acado.style.background=green;
    }
});

n=0;

input.addEventListener("click",(evento)=>{
    console.log("Input");
    form.style.display="none";
    n=0;
});

materia1.addEventListener("click",(evento)=>{
    console.log("Materia de Matemáticas");
    form.style.display="none";
    n=0;
});
materia2.addEventListener("click",(evento)=>{
    console.log("Materia de Literatura");
    form.style.display="none";
    n=0;
});
materia3.addEventListener("click",(evento)=>{
    console.log("Materia de Biología");
    form.style.display="none";
    n=0;
});
materia4.addEventListener("click",(evento)=>{
    console.log("Materia de Química");
    form.style.display="none";
    n=0;
});
materia5.addEventListener("click",(evento)=>{
    console.log("Materia de Física");
    form.style.display="none";
    n=0;
});


console.log(n);
materia6.addEventListener("click",(evento)=>{
    console.log("Materia Otra");
    n=n+1;
    if(n==1){
        form.style.display="block";
    }
    if(n==2){
        form.style.display="none";
        n=n-2;
    }
});

