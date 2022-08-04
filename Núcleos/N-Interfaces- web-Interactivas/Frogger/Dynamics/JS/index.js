    console.log("Index.JS")
    let TECLAAVISTA=0;
    let TECLADVISTA=0;
    let TECLAWVISTA=0;
    let TECLASVISTA=0;
    //Rana2
    let TECLAA2VISTA=0;
    let TECLAD2VISTA=0;
    let TECLAW2VISTA=0;
    let TECLAS2VISTA=0;
    //Rana3
    let TECLAA3VISTA=0;
    let TECLAD3VISTA=0;
    let TECLAW3VISTA=0;
    let TECLAS3VISTA=0;

    //Rana4
    let TECLAA4VISTA=0;
    let TECLAD4VISTA=0;
    let TECLAW4VISTA=0;
    let TECLAS4VISTA=0;

    let casilla1=0;
    let casilla12=0;
    let casilla13=0;
    let casilla14=0;



class enemigo{
    constructor(posiciony){
        this.posicionx=0;
        this.posiciony=posiciony;
        // this.velocidad= setInterval(()=>{
        //     this.posicionx++;
        //     // if(this.posiciony+[tamaño]<=jugador.posiciony&&this.posiciony>=jugador.posiciony+[tamaño]){
        //     //     if(this.posicionx+[tamaño]<=jugador.posicionx&&this.posicionx>=jugador.posicionx+[tamaño]){
        //     //         //funcion terminar juego
        //     //     }
        //     // }
        //     dibujar();
        // }, intervalo)
        
    }
    const canvas = document.getElementById("canvas");
    const ctx = canvas.getContext("2d");

    ctx.fillRect(0,0,1000,450);
    
    const retro =new Image(200,200);
    const escenario = new Image(200, 200);
    escenario.src = "./Statics/img/escenario.png";
    retro.src="./Statics/img/rana-retro,png.png";
    escenario.addEventListener('load',()=>{
        console.log("Ya cargó el mapa :D");
        ctx.drawImage(retro, 0, 0, 1000, 450);
        x=510;
        y=430;
        ctx.drawImage(rana_w,x,y,22,17) //Spawn Inicial;
    });

    const casilla = new Image(200,200);
    casilla.src="./statics/img/RecuadroCompleto/recuadro-tache.png"
    const casilla2 = new Image(200,200);
    casilla2.src="./statics/img/RecuadroCompleto/recuadro-tache2.png"
    const casilla3 = new Image(200,200);
    casilla3.src="./statics/img/RecuadroCompleto/recuadro-tache3.png"
    const casilla4 = new Image(200,200);
    casilla4.src="./statics/img/RecuadroCompleto/recuadro-tache4.png"
    // ctx.drawImage(casilla,0,0,1000,450);


    const rana_w = new Image(22,17);
    const rana_s = new Image(22,17);
    const rana_a = new Image(17,22);
    const rana_d = new Image(17,22);

    //ARRIBA RANA1
    rana_w.src="./Statics/img/Ranas/3.png"
    rana_w.addEventListener('load',()=>{
        console.log("Ya cargó la rana :D");
        // ctx.drawImage(rana_w,0,0,22,17);
    });
    //ABAJO RANA1
    rana_s.src="./Statics/img/Ranas/4.png"
    rana_s.addEventListener('load',()=>{
        console.log("Ya cargó la rana :D");
        // ctx.drawImage(rana_w,0,0,22,17);
    });

    //IZQUIERDA RANA1
    rana_a.src="./Statics/img/Ranas/2.png"
    rana_a.addEventListener('load',()=>{
        console.log("Ya cargó la rana :D");
        // ctx.drawImage(rana_w,0,0,22,17);
    });

    //DERECHA RANA1
    rana_d.src="./Statics/img/Ranas/1.png"
    rana_d.addEventListener('load',()=>{
        console.log("Ya cargó la rana :D");
        // ctx.drawImage(rana_w,0,0,22,17);
    });

    ///////////////////////////////////////////////////////////////
    //////////////////////////////////////////////////////////////
    
    let x=0;
    let y=0;

    function Redibujar(){
        ctx.drawImage(escenario, 0, 0, 1000, 450);
        if(casilla1==1 && casilla12==1 && casilla13==1 && casilla14==1){
            ctx.drawImage(retro, 0, 0, 1000, 450);
        }
        if(casilla1==1){
            ctx.drawImage(casilla,0,0,1000,450);
        }
        if(casilla12==1){
            ctx.drawImage(casilla2,0,0,1000,450);
        }
        if(casilla13==1){
            ctx.drawImage(casilla3,0,0,1000,450);
        }
        if(casilla14==1){
            ctx.drawImage(casilla4,0,0,1000,450);
        }



        if(TECLAWVISTA==1){
            ctx.drawImage(rana_w,x,y,22,17);
        }
        if(TECLAAVISTA==1){
            ctx.drawImage(rana_a,x,y,17,22);
        }
        if(TECLASVISTA==1){
            ctx.drawImage(rana_s,x,y,22,17);
        }
        if(TECLADVISTA==1){
            ctx.drawImage(rana_d,x,y,17,22);
        }
        if(TECLAW2VISTA==1){
            ctx.drawImage(rana_w2,x,y,22,17);
        }
        if(TECLAA2VISTA==1){
            ctx.drawImage(rana_a2,x,y,17,22);
        }
        if(TECLAS2VISTA==1){
            ctx.drawImage(rana_s2,x,y,22,17);
        }
        if(TECLAD2VISTA==1){
            ctx.drawImage(rana_d2,x,y,17,22);
        }   
    }
    /////////////////////TIEMPO///////////////////////
    
    const btnIniciar = document.getElementById("Boton-INI-Pruba");
    const btnTerminar = document.getElementById("Boton-TERMI-Pruba");
    const btnPausa = document.getElementById("Boton-PAUSA-Pruba");
    const SegundosLugar=document.getElementById("segundos");
    const PuntuacionLugar=document.getElementById("puntuacion");
    const MejorPuntuacionLugar=document.getElementById("mejorpuntuacion");
    const ReiniciarJuego=document.getElementById("ReiniciarGame");

    let intervaloContador =null, intervaloActualizar=null;
    let tiempo=0, pausa=0, a=0, Puntuacion=null;
    let tiemporespaldo=0;
    let pausacounter=0;
    let reiniciar=0;
    console.log(intervaloContador);

    const Enemigos=[];
    const EnemigosImg= new Image(canvas.width/10, canvas.height/10);
    const Fondo = new Image(canvas.width, canvas.height);
    Fondo.src="./Statics/img/escenario.png";
    EnemigosImg.src="./Statics/img/Carros/1.png";

    // function dibujar(){
    //     ctx.drawImage(Fondo, 0, 0, canvas.width, canvas.height);
    //     for(let indice in Enemigos){
    //         ctx.drawImage(EnemigosImg, Enemigos[indice].posiciony, Enemigos[indice].posiciony);
    //         if(Enemigos[indice].posicionx>=canvas.width){
    //             //clearInterval(Enemigos[indice].velocidad);
    //             Enemigos.splice(indice, 1);
    //         }
    //     }
    //     // window.requestAnimationFrame(dibujar());
    //     // window.requestAnimationFrame(dibujar());
    // }

    function tiempoContador(){
        
        if(pausacounter==1){
            tiempo=tiemporespaldo;
        }else if (pausacounter==0 ||reiniciar==1){
            tiempo=0;
        }
        intervaloContador=setInterval(()=>{
        tiempo++;
            console.log("PausaCounter"+pausacounter)
            if(tiempo<10){
                SegundosLugar.innerHTML="Tiempo: "+"0"+tiempo+"s";
            }else{
                SegundosLugar.innerHTML="Tiempo: "+tiempo+"s";
            }
            console.log("Tiempo: ."+tiempo);
            console.log(intervaloContador);

        },1000)

    }

    function PuntuacionV(){
        intervaloActualizar=setInterval(()=>{
            a++;
            if(a==1){
                if(Puntuacion<10){
                    PuntuacionLugar.innerHTML="Puntuación: "+"0"+Puntuacion;
                }else{
                    PuntuacionLugar.innerHTML="Puntuación: "+Puntuacion;
                }
                console.log("Tiempo: ."+tiempo);
                a=2;
            }
            if(a==2){
                clearInterval(intervaloActualizar)
                console.log("Actualizada")
                a=0;
            }
            },1000)

    }
    function PuntuacionV2(){
        intervaloActualizar=setInterval(()=>{
            a++;
            if(a==1){
                if(Puntuacion<10){
                    PuntuacionLugar.innerHTML="Puntuación: "+"0"+Puntuacion2;
                }else{
                    PuntuacionLugar.innerHTML="Puntuación: "+Puntuacion2;
                }
                console.log("Tiempo: ."+tiempo);
                a=2;
            }
            if(a==2){
                clearInterval(intervaloActualizar)
                console.log("Actualizada")
                a=0;
            }
            },1000)

    }

    btnIniciar.addEventListener("click",()=>{
        tiempoContador();
        document.addEventListener('keydown', (event) => {
            const keyName = event.key;
            console.log(".");
            console.log("Se oprimio la tecla: "+keyName);
            console.log("X="+x);
            console.log("Y="+y);
            if(y<=110){
                if(x>=120 && x<=240){
                    console.log("Recuadro 1 Listo");
                    casilla1=1;
                    x=510;
                    y=430;
                    Redibujar();
                }
                if(x>=380 && x<=470){
                    console.log("Recuadro 2 Listo");
                    casilla12=1;
                    x=510;
                    y=430;
                    Redibujar();
                }
                if(x>=630 && x<=720){
                    console.log("Recuadro 3 Listo");
                    casilla13=1;
                    x=510;
                    y=430;
                    Redibujar();
                }
                if(x>=880 && x<=980){
                    console.log("Recuadro 4 Listo");
                    casilla14=1;
                    x=510;
                    y=430;
                    Redibujar();
                }
            }
            let consola=0;
        
            if(casilla1==1 && casilla12 ==1 && casilla13==1 && casilla14==1 && consola==0){
                console.log(intervaloContador);
                clearInterval(intervaloContador);
                reiniciar=1;
                if(Puntuacion==null){
                    console.log("Ingresar puntuación desde 0")
                    Puntuacion = tiempo + 0;
                    console.log("Puntuacion"+Puntuacion);
                    console.log("Puntuación final: "+Puntuacion)
                    PuntuacionV();
                }else{
                    console.log("Nuevo registro");
                    Puntuacion2=tiempo+0;
                    console.log("Puntuacion 2: "+Puntuacion2);
                    if(Puntuacion2<Puntuacion){
                        console.log("Nueva Cookie");
                    }
                    if(Puntuacion2>Puntuacion){
                        console.log("No hay cookie");
                    }
                    PuntuacionV2();
                }
                ReiniciarJuego.style.display="block";
                consola=1;
            }
            
            if(pausa==0){
                if(keyName=='a'|| keyName=='A'){
                    console.log("If de la tecla: A");
                    if(x!=0){
                        x=x-10;
                    }   
                    TECLAAVISTA=1;
                    TECLAWVISTA=0;
                    TECLADVISTA=0;
                    TECLASVISTA=0;
                    Redibujar();
                    
                }
                if(keyName=='s'|| keyName=='S'){
                    console.log("If de la tecla: S");
                    if(y!=430){
                        y=y+10;
                    }
                    
                    TECLAAVISTA=0;
                    TECLAWVISTA=0;
                    TECLADVISTA=0;
                    TECLASVISTA=1;
                    Redibujar();
                }
                if(keyName=='d'|| keyName=='D'){
                    console.log("If de la tecla: D");
                    if(x!=980){
                        x=x+10;
                    }
                    TECLAAVISTA=0;
                    TECLAWVISTA=0;
                    TECLADVISTA=1;
                    TECLASVISTA=0;
                    Redibujar();
                }
                if(keyName=='w'|| keyName=='W'){
                    console.log("If de la tecla: W");
                    if(y!=0){
                        y=y-10;
                    }
                    TECLAAVISTA=0;
                    TECLAWVISTA=1;
                    TECLADVISTA=0;
                    TECLASVISTA=0;
                    Redibujar();
                }
            }
            
            if(keyName=='Escape'){
                console.log("If de la tecla: Pausa");
                console.log("Funcion PAUSA: ");
                console.log(".-.-.-.-.-.-.-");
                console.log("Pausa");
                pausa++;
                pausacounter=1;
                if(pausa==1){
                    console.log("Se pauso el timer");
                    tiemporespaldo=tiempo;
                    console.log(tiemporespaldo)
                    clearInterval(intervaloContador)
                    ctx.fillStyle="#93DBD6";
                    ctx.fillRect(0,0,1000,450);
                    ctx.fillStyle="#000000";
                    ctx.fillText('JUEGO EN PAUSA',canvas.width/2,canvas.height/2);
                    console.log("PausaCounter"+pausacounter)
                }
                if(pausa==2){
                    console.log("Se reanudo el timer");
                    tiempoContador();
                    P=0;
                    console.log("PausaCounter"+pausacounter)
                    Redibujar();
                    pausa=0;
                }
            }
          });
    })

    btnTerminar.addEventListener("click",()=>{
        console.log(intervaloContador);
        clearInterval(intervaloContador);
        reiniciar=1;
        if(Puntuacion==null){
            console.log("Ingresar puntuación desde 0")
            Puntuacion = tiempo + 0;
            console.log("Puntuacion"+Puntuacion);
            console.log("Puntuación final: "+Puntuacion)
            PuntuacionV();
        }else{
            console.log("Nuevo registro");
            Puntuacion2=tiempo+0;
            console.log("Puntuacion 2: "+Puntuacion2);
            if(Puntuacion2<Puntuacion){
                console.log("Nueva Cookie");
            }
            if(Puntuacion2>Puntuacion){
                console.log("No hay cookie");
            }
            PuntuacionV2();
            
        }
        ReiniciarJuego.style.display="block";
        
        // Actualizar();
    })

    btnPausa.addEventListener("click",()=>{
        console.log("Pausa");
        pausa++;
        pausacounter=1;
        if(pausa==1){
            console.log("Se pauso el timer");
            tiemporespaldo=tiempo;
            console.log(tiemporespaldo)
            clearInterval(intervaloContador)
            ctx.fillStyle="#93DBD6";
            ctx.fillRect(0,0,1000,450);
            ctx.fillStyle="#000000";
            ctx.fillText('JUEGO EN PAUSA',canvas.width/2,canvas.height/2);
            console.log("PausaCounter"+pausacounter)
        }
        if(pausa==2){
            console.log("Se reanudo el timer");
            tiempoContador();
            P=0;
            console.log("PausaCounter"+pausacounter)
            Redibujar();
            pausa=0;
        }
    
    })

    ReiniciarJuego.addEventListener("click",()=>{
        console.log("Reiniciando juego");
        casilla1=0;
        casilla12=0;
        casilla13=0;
        casilla14=0;
        x=510;
        y=430;
        Redibujar();
        tiempoContador();
    });

//Canvaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaas
window.addEventListener("keydown", (event)=>{
    event.key
})

crearEnemigos =setInterval(()=>{
    let posiciony=Math.random()*100;
    posiciony=Math.round(posiciony)
    posiciony= posiciony%10;
    posiciony+=1;
    posiciony= canvas.height/posiciony;
    Enemigos.push(new enemigo(posiciony));
    console.log(Enemigos);
}, 4000);
movimientoenmigo= setInterval(()=>{
    for(let indice in Enemigos){
        Enemigos[indice].posicionx+=10;
    }
}, 700)
// Enemigos[0]=new enemigo(300,)
// let empezar_dibujado= setTimeout(dibujar(), 8000);

  
