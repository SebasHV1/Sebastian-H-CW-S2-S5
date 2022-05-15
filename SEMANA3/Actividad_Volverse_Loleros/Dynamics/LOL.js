class tanque{
    constructor(vida,ataque,mana,armadura,nombre,habilidades,tipo,esFuerteContra1,esFuerteContra2,nombrecontr){
        this.vida=vida;
        this.ataque=ataque;
        this.mana=mana;
        this.armadura=armadura;
        this.nombre=nombre;
        this.habilidades=habilidades;
        this.tipo=tipo;
        this.esFuerteContra1=esFuerteContra1;
        this.esFuerteContra2=esFuerteContra2;
        this.nombrecontr=nombrecontr;
    };


    presentarse(){
        console.log('Mi nombre es:'+this.nombre+', Soy un campeón de League of Legends');
        console.log('Mis grandiosas estadísticas son las siguientes: Vida:'+this.vida+', Maná:'+this.mana+', Ataque:'+this.ataque);
        console.log('Estás son mis habilidades:'+this.habilidades);
    };

    comparar(){
        console.log('Si te encuentras un '+this.esFuerteContra1+' o un '+this.esFuerteContra2+' ganaras fácilmente :)');
        console.log('Si te encuentras contra un Luchador o un Tirador puedes tener desventaja');
        console.log("Si te encuentras otro tanque es pura habilidad xD");
    };

}

class Asesino{
    constructor(vida2,ataque2,mana2,nombre2,habilidades2,tipo2,esFuerteContra12,esFuerteContra22){
        this.vida2=vida2;
        this.ataque2=ataque2;
        this.mana2=mana2;
        this.nombre2=nombre2;
        this.habilidades2=habilidades2;
        this.tipo2=tipo2;
        this.esFuerteContra12=esFuerteContra12;
        this.esFuerteContra22=esFuerteContra22;

    };

    presentarse(){
        console.log('Mi nombre es:'+this.nombre2+', Soy un campeón de League of Legends');
        console.log('Mis grandiosas estadísticas son las siguientes: Vida:'+this.vida2+', Maná:'+this.mana2+', Ataque:'+this.ataque2);
        console.log('Estás son mis habilidades:'+this.habilidades2);
    };

    comparar(){
        console.log('Si te encuentras un '+this.esFuerteContra12+' o un '+this.esFuerteContra22+' ganaras fácilmente :)');
        console.log('Si te encuentras contra un Luchador o un tanque puedes tener desventaja');
        console.log("Si te encuentras otro asesino es pura habilidad xD");
    };
}

class Luchador{
    constructor(vida3,ataque3,mana3,movilidad3,nombre3,habilidades3,tipo3,esFuerteContra13,esFuerteContra23){
        this.vida3=vida3;
        this.ataque3=ataque3;
        this.mana3=mana3;
        this.movilidad3=movilidad3;
        this.nombre3=nombre3;
        this.habilidades3=habilidades3;
        this.tipo3=tipo3;
        this.esFuerteContra13=esFuerteContra13;
        this.esFuerteContra23=esFuerteContra23;
        
    };
    
    presentarse(){
        console.log('Mi nombre es:'+this.nombre3+', Soy un campeón de League of Legends');
        console.log('Mis grandiosas estadísticas son las siguientes: Vida:'+this.vida3+', Maná:'+this.mana3+', Ataque:'+this.ataque3);
        console.log('Estás son mis habilidades:'+this.habilidades3);
    };

    comparar(){
        console.log('Si te encuentras un '+this.esFuerteContra13+' o un '+this.esFuerteContra23+' ganaras fácilmente :)');
        console.log('Si te encuentras contra un tirador o un mago puedes tener desventaja');
        console.log("Si te encuentras otro tirador es pura habilidad xD");
    };
}

class Tirador{

    constructor(vida4,ataque4,mana4,distancia4,nombre4,habilidades4,tipo4,esFuerteContra14,esFuerteContra24){

        this.vida4=vida4;
        this.ataque4=ataque4;
        this.mana4=mana4;
        this.distancia4=distancia4;
        this.nombre4=nombre4;
        this.habilidades4=habilidades4;
        this.tipo4=tipo4;
        this.esFuerteContra14=esFuerteContra14;
        this.esFuerteContra24=esFuerteContra24;
    }
    
    presentarse(){
        console.log('Mi nombre es:'+this.nombre4+', Soy un campeón de League of Legends');
        console.log('Mis grandiosas estadísticas son las siguientes: Vida:'+this.vida4+', Maná:'+this.mana4+', Ataque:'+this.ataque4);
        console.log('Estás son mis habilidades:'+this.habilidades4);
    };
    comparar(){
        console.log('Si te encuentras un '+this.esFuerteContra14+' o un '+this.esFuerteContra24+' ganaras fácilmente :)');
        console.log('Si te encuentras contra un asesino o un mago puedes tener desventaja');
        console.log("Si te encuentras otro tirador es pura habilidad xD");
    };
}

class Mago{

    constructor(vida5,ataque5,mana5,distancia5,nombre5,habilidades5,tipo5,esFuerteContra15,esFuerteContra25){

        this.vida5=vida5;
        this.ataque5=ataque5;
        this.mana5=mana5;
        this.distancia5=distancia5;
        this.nombre5=nombre5;
        this.habilidades5=habilidades5;
        this.tipo5=tipo5;
        this.esFuerteContra15=esFuerteContra15;
        this.esFuerteContra25=esFuerteContra25;
    }

    presentarse(){
        console.log('Mi nombre es:'+this.nombre5+', Soy un campeón de League of Legends');
        console.log('Mis grandiosas estadísticas son las siguientes: Vida:'+this.vida5+', Maná:'+this.mana5+', Ataque:'+this.ataque5);
        console.log('Estás son mis habilidades:'+this.habilidades5);
    };

    comparar(){
        console.log('Si te encuentras un '+this.esFuerteContra15+' o un '+this.esFuerteContra25+' ganaras fácilmente :)');
        console.log('Si te encuentras contra un asesino o un tanque puedes tener desventaja');
        console.log("Si te encuentras otro mago es pura habilidad xD");
    };
}



const Leono = new tanque(210.8,100,85,100,'Leono',['Proyecta una imagen solar de su espada','inflige daño mágico'],'Tanque','Asesino','Mago');
const LeeSi = new Luchador(172.5,132.25,100,10,'Lee-sin',['Canta,Baila,ETC','Estudia wrestling'],'Luchador','Asesino','Tanque');
const Jinx = new Tirador(90,173.6,100,50,'Jinx',['Canta','Tira con el arco'],'tirador','tanque','luchador');
const Lux = new Mago(85,130,136.4,40,'Lux',['Hace trucos con un conejo','Desaparece cosas'],'mago','tirador','luchador');
const Zed = new Asesino(95,182,80,'Zed',['Rushea el tryhard','Baila'],'Asesino','mago','tirador');

console.log(Leono);
console.log(LeeSi);
console.log(Jinx);
console.log(Lux);
console.log(Zed);




