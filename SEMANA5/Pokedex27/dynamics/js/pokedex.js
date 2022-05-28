window.addEventListener("load", ()=>{
  const btnAgregar = document.getElementById("btn-agregar");
  const divAgregar = document.getElementById("contenedor-agregar");
  const btnEnviar = document.getElementById("btn-enviar");
  const buscador = document.getElementById("buscador");
  const divDatos = document.getElementById("contenedor-mostrar");
  const divResultados = document.getElementById("contenedor-resultados");
  const formNuevo = document.getElementById("form-nuevo");

  btnAgregar.addEventListener("click", (evento)=>{
    divAgregar.style.display = "block";
    divDatos.style.display = "none";
  });



  btnEnviar.addEventListener("click", (evento)=>{
    divAgregar.style.display = "none";

    evento.preventDefault(); // Detener botón del formulario
    let datosForm= new FormData(formNuevo); //Objeto datos del formulario 
    fetch("dynamics/php/crearpokemon.php",{
      method:"POST",  //Si mando algo por post se manda en el cuerpo
      body: datosForm, //Llegar bien al php

    }).then((response)=>{
      return response.json();
    }).then((datosJSON)=>{ //Php devuelve un JSON ("OK")
      if(datosJSON.ok==true){
        alert("Todo bien");
        document.getElementById("form-nuevo").reset(); //Limpiar formulario
      }else{
        alert(datosJSON.texto); //Texto php
      }
    })

  });


  fetch("dynamics/php/tipos.php")
  .then((response)=>{
    return response.json();
  })
  .then((datosJSON)=>{
    console.log(datosJSON);
    let selectTipos = document.getElementById("select-tipos");
    for(tipo of datosJSON){
      selectTipos.innerHTML+="<option value='"+tipo.id+"'>"+tipo.nombre+"</option>";
    }
  });




  buscador.addEventListener("keyup", (evento)=>{
    let termino = buscador.value;
    divResultados.innerHTML = "";
    if(termino.length >= 3){
      fetch("dynamics/php/pokemon.php?q="+termino)
        .then((response)=>{
          return response.json();
        })
        .then((datosJSON)=>{
          //Mostrar resultados
          console.log(datosJSON);
          console.log("1,2,3,4")
          for(pokemon of datosJSON)
          {
            let div = document.createElement("div");
            div.innerHTML = pokemon.pok_name;
            div.dataset.id = pokemon.pok_id; //Ver ID vista y consultar
            div.classList.add("coincidencia");
            divResultados.appendChild(div);
          }
          if(datosJSON==0){
            console.log("No se encuentra el pokemon");
            let div = document.createElement("div");
            div.innerHTML = "No hay coincidencias :(";
            div.classList.add("coincidencia");
            divResultados.appendChild(div);

          }
        });
    }
  });

  divResultados.addEventListener("click", (evento)=>{
    if(evento.target.classList.contains("coincidencia")){ //Cuadros coincidencia - dekegación de eventos
      let id = evento.target.dataset.id; //ID CONTENEDOR POKEMON

      fetch("dynamics/php/pokemon.php?id="+id) //Metodo get ?=
        .then((response)=>{
          return response.json();
        })
        .then((datosJSON)=>{
          if(datosJSON.ok == true){
            divDatos.innerHTML="<div class='dato'><strong>Nombre</strong>"+datosJSON.datos.nombre+"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Altura</strong>"+datosJSON.datos.altura+"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Peso</strong>"+datosJSON.datos.peso+"</div>";
            divDatos.innerHTML+="<div class='dato'><strong>Tipo</strong>"+datosJSON.datos.tipo+"</div>";
            divDatos.innerHTML+="<button data-id="+id+" id='btn-eliminar'>Eliminar Pokemon</button>";
            divDatos.style.display = "flex";
          }
        });
    }
  });

  //Escuchador de eventos pa borrar
  divDatos.addEventListener("click",(evento)=>{
    if(evento.target.id =="btn-eliminar"){
      console.log("Boton para eliminar");
      let datosForm = new FormData();
      datosForm.append("id", evento.target.dataset.id);

      fetch("dynamics/php/borrarpokemon.php",{
        method:"POST",
        body: datosForm,
      }).then((response)=>{
        return response.json();
      }).then((datosJSON)=>{
        if(datosJSON.ok==true)
          alert("Se elimino el pokemon");
        else
          alert("No se pudo eliminar");
      });
    }
  });
});