window.addEventListener("load",()=>{
let meses = ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 'Julio', 'Agosto', 'Septiembre','Octubre', 'Noviembre', 'Diciembre'];

    let contadorfechas = new Date();
    let contadordias = contadorfechas.getDate();
    let contadornumero = contadorfechas.getMonth();
    let contadoraño = contadorfechas.getFullYear();

    let fechas = document.getElementById('fechas');
    let mes = document.getElementById('mes');
    let año = document.getElementById('año');

    let mesprevio = document.getElementById('mes-anterior');
    let mesposterior = document.getElementById('mes-posterior');

    mes.textContent = meses[contadornumero];
    año.textContent = contadoraño.toString();

    mesprevio.addEventListener('click', ()=>retroceder());
    mesposterior.addEventListener('click', ()=>siguiente());

    const declararmes = (mes) => {

        for(let i = declarardia(); i>0;i--){
            fechas.innerHTML += ` <div class="fecha ultimosdias">
                ${totaldias(contadornumero-1)-(i-1)}
            </div>`;
        }

        for(let i=1; i<=totaldias(mes); i++){
            if(i===contadordias) {
                fechas.innerHTML += ` <div id="${i}_${mes+1}" class="fecha ultimosdias">${i}</div>`;
            }else{
                fechas.innerHTML += ` <div id="${i}_${mes+1}"  class="fecha">${i}</div>`;
            }
        }
    }

    const totaldias = mes => {
        if(mes === -1) mes = 11;

        if (mes == 0 || mes == 2 || mes == 4 || mes == 6 || mes == 7 || mes == 9 || mes == 11) {
            return  31;

        } else if (mes == 3 || mes == 5 || mes == 8 || mes == 10) {
            return 30;

        } else {

            return bisiesto() ? 29:28;
        }
    }

    const bisiesto = () => {
        return ((contadoraño % 100 !==0) && (contadoraño % 4 === 0) || (contadoraño % 400 === 0));
    }

    const declarardia = () => {
        let iniciardia = new Date(contadoraño, contadornumero, 1);
        return ((iniciardia.getDay()-1) === -1) ? 6 : iniciardia.getDay()-1;
    }

    const retroceder = () => {
        if(contadornumero !== 0){
            contadornumero--;
        }else{
            contadornumero = 11;
            contadoraño--;
        }

        unirfecha();
    }

    const siguiente = () => {
        if(contadornumero !== 11){
            contadornumero++;
        }else{
            contadornumero = 0;
            contadoraño++;
        }

        unirfecha();
    }

    const unirfecha = () => {
        contadorfechas.setFullYear(contadoraño,contadornumero,contadordias);
        mes.textContent = meses[contadornumero];
        año.textContent = contadoraño.toString();
        fechas.textContent = '';
        declararmes(contadornumero);
    }

    declararmes(contadornumero);
});