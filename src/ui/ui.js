let filas = document.querySelectorAll("#fila");
let estaLaPrimeraListaCreada = false;
export let contendenorPokemones = document.querySelector(
  "#contendenorPokemones"
);
export let cantidadPaginasPokemons = 0;
//ESTE IMPORT DE LA API, ESTA MAL
import { todosLosDatos } from "../api/api.js";
import { obtenerDatosDelPokemonSelecionado } from "../servicios/servicio.js";
import { irAPagina } from "../servicios/servicio.js";
let paginaNumero = 1;
let selectorPagina = document.querySelector("#selectorPagina");
//este export de crear.... esta mal
export async function crearLaUiDeLaPokedex(reciboDatosDeLaApi) {
  let api = await reciboDatosDeLaApi;
  //guarda con los await
  console.log(api);

  if (!estaLaPrimeraListaCreada) {
    crearLista(contendenorPokemones, api.results);
    colocarPokemonEnLaLista(api.results);
    cantidadPaginasPokemons = Math.floor(api.count / 20);
    crearPaginasDePokemons(cantidadPaginasPokemons);
    document.querySelector("#botonAnterior").hidden = true;
    estaLaPrimeraListaCreada = true;
  } else {
    colocarPokemonEnLaLista(api.results);
  }
  ordenarPokemones(filas);
  colocarImagenesDeLosPokemons(todosLosDatos);
}

function crearElementosDeLaLista(elementoPadre) {
  let div = document.createElement("div");
  let id = document.createAttribute("id");
  let clase = document.createAttribute("class");
  clase.value = "col";
  id.value = "pokemon";
  div.setAttributeNode(id);
  div.setAttributeNode(clase);
  elementoPadre.appendChild(div);
}
function crearLista(listaAReplicar, vecesAReplicar) {
  for (let i = 0; i < vecesAReplicar.length; i++) {
    crearElementosDeLaLista(listaAReplicar);
  }
}
async function colocarPokemonEnLaLista(Nombres) {
  let listaPokemonesActivos = document.querySelectorAll(
    "#contendenorPokemones #pokemon"
  );
  for (let i = 0; i < Nombres.length; i++) {
    listaPokemonesActivos[i].innerText = Nombres[i].name;
  }
}
function crearPaginasDePokemons(cantidadDePaginas) {
  let paginas = document.querySelector("#selectorPagina");
  for (let i = 0; i < cantidadDePaginas; i++) {
    let option = document.createElement("option");
    let id = document.createAttribute("id");
    id.value = i + 1;
    option.innerText = i + 1;
    option.setAttributeNode(id);
    paginas.appendChild(option);
  }
}
function ordenarPokemones(filasOrdenadas) {
  let listaPokemonesActivos = document.querySelectorAll(
    "#contendenorPokemones #pokemon"
  );
  let contador = 0;
  for (let ia = 0; ia < filasOrdenadas.length; ia++) {
    for (let ib = 0; ib < 4; ib++) {
      filasOrdenadas[ia].appendChild(listaPokemonesActivos[ib + contador]);

      if (ib === 3) {
        contador += ib;
      }
    }
    contador += 1;
  }
}

async function colocarImagenesDeLosPokemons(listaDeDatosDePokemones) {
  let listaPokemonesActivos = document.querySelectorAll(
    "#contendenorPokemones #pokemon"
  );
  for (let i = 0; i < listaDeDatosDePokemones.length; i++) {
    let img = document.createElement("img");
    let id = document.createAttribute("id");
    id.value = "imagenPokemon";
    let src = document.createAttribute("src");
    src.value = listaDeDatosDePokemones[i].sprites.front_default;
    img.setAttributeNode(id);
    img.setAttributeNode(src);
    listaPokemonesActivos[i].appendChild(img);
  }
}

async function controlarVisibilidadBotonAnterior() {
  if (Number(selectorPagina.value) === 1) {
    document.querySelector("#botonAnterior").hidden = true;
  } else {
    document.querySelector("#botonAnterior").hidden = false;
  }
  if (Number(selectorPagina.value) < cantidadPaginasPokemons) {
    document.querySelector("#botonSiguiente").hidden = false;
  }
}
async function controlarVisibilidadBotonSiguiente() {
  if (Number(selectorPagina.value) === cantidadPaginasPokemons) {
    document.querySelector("#botonSiguiente").hidden = true;
  } else {
    document.querySelector("#botonSiguiente").hidden = false;
  }
  if (Number(selectorPagina.value) > 1) {
    document.querySelector("#botonAnterior").hidden = false;
  }
  console.log(Number(selectorPagina.value));
}
async function controlarVisibilidadBotonVolver() {
  contendenorPokemones.hidden = false;
  document.querySelector("#pokemonSelecionado").hidden = true;
  selectorPagina.value = paginaNumero;
  await controlarVisibilidadBotonAnterior();
  await controlarVisibilidadBotonSiguiente();
  document.querySelector("#controlarVisibilidadBotonVolver").hidden = true;
}
async function controlarVisibilidadBotonesAlUsarIrAPagina() {
  paginaNumero = Number(selectorPagina.value);
  if (Number(selectorPagina.value) === cantidadPaginasPokemons) {
    document.querySelector("#botonSiguiente").hidden = true;
  } else {
    document.querySelector("#botonSiguiente").hidden = false;
  }
  if (Number(selectorPagina.value) > 1) {
    document.querySelector("#botonAnterior").hidden = false;
  }
  if (Number(selectorPagina.value) === 1) {
    document.querySelector("#botonAnterior").hidden = true;
  } else {
    document.querySelector("#botonAnterior").hidden = false;
  }
  if (Number(selectorPagina.value) < cantidadPaginasPokemons) {
    document.querySelector("#botonSiguiente").hidden = false;
  }
}
export async function controlarPaginaNumero(avanzaORetrocede) {
  if (!avanzaORetrocede && paginaNumero > 1) {
    paginaNumero -= 1;

    selectorPagina.value = paginaNumero;
  } else {
    paginaNumero += 1;

    selectorPagina.value = paginaNumero;
  }
}
async function seleccionarPokemon(event) {
  let valorAEnviar = "";

  if (event.target.innerText === "") {
    console.log(event.target.parentElement.innerText);
    valorAEnviar = event.target.parentElement.innerText;
  } else {
    console.log(event.target.innerText);
    valorAEnviar = event.target.innerText;
  }

  await controlarUiAlSelecionarUnPokemon(valorAEnviar);
}
///tengo que cambiar este tambien
import { obtenerPokemonSelecionadoV2 } from "../servicios/servicio.js";
async function controlarUiAlSelecionarUnPokemon(valorAEnviar) {
  //let pokemonActual = await obtenerDatosDelPokemonSelecionado(valorAEnviar);

  let pokemonActual = await obtenerPokemonSelecionadoV2(valorAEnviar);
  contendenorPokemones.hidden = true;

  document.querySelector("#pokemonSelecionado").hidden = false;
  document.querySelector("#nombrePoke").innerText = pokemonActual.name;
  document.querySelector("#imagenSelecionada").src =
    pokemonActual.sprites.front_default;
  document.querySelector("#botonAnterior").hidden = true;
  document.querySelector("#botonSiguiente").hidden = true;
  document.querySelector("#controlarVisibilidadBotonVolver").hidden = false;

  if (pokemonActual.types.length > 1) {
    document.querySelector("#tipo").innerText =
      pokemonActual.types[0].type.name + "/" + pokemonActual.types[1].type.name;
  } else {
    document.querySelector("#tipo").innerText =
      pokemonActual.types[0].type.name;
  }

  document.querySelector("#habilidad").innerText =
    pokemonActual.abilities[0].ability.name +
    "/" +
    pokemonActual.abilities[1].ability.name;
  document.querySelector("#pesoPoke").innerText =
    pokemonActual.weight / 10 + " Kg";
  document.querySelector("#alturaPoke").innerText =
    pokemonActual.height / 10 + " Mts";
}

import { cambiarPaginaSiguienteAnterior } from "../servicios/servicio.js";
//a este tambien lo tengo que cambiar
import { irAPaginaV2 } from "../servicios/servicio.js";
import { entregarDatosDeLaApi } from "../servicios/servicio.js";
async function controlarSelectorPagina() {
  //irAPagina(selectorPagina.value);
  //await crearLaUiDeLaPokedex(irAPaginaV2(selectorPagina.value));
  await irAPaginaV2(selectorPagina.value);
  console.log(await irAPaginaV2(selectorPagina.value));
  controlarVisibilidadBotonesAlUsarIrAPagina();
  let dato = await entregarDatosDeLaApi(
    await irAPaginaV2(selectorPagina.value)
  );
  console.log(dato.next);
  /*
  crearLaUiDeLaPokedex(
    await entregarDatosDeLaApi(await irAPaginaV2(selectorPagina.value))
  );
  */
}
import { cambiarPaginaSiguienteAnterior2 } from "../servicios/servicio.js";
async function cambiarPagina(event) {
  if (event.target.id === "botonSiguiente") {
    //cambiarPaginaSiguienteAnterior(true);
    controlarPaginaNumero(true);
    controlarVisibilidadBotonSiguiente();

    let dato = cambiarPaginaSiguienteAnterior2(true);
    console.log(dato);

    crearLaUiDeLaPokedex(await entregarDatosDeLaApi(dato));
  } else if (event.target.id === "irAPagina") {
    controlarSelectorPagina();
  } else if (event.target.id === "controlarVisibilidadBotonVolver") {
    controlarVisibilidadBotonVolver();
  } else {
    //cambiarPaginaSiguienteAnterior(false);
    controlarPaginaNumero(false);
    controlarVisibilidadBotonAnterior();

    let dato = cambiarPaginaSiguienteAnterior2(false);
    console.log(dato);
  }
}

contendenorPokemones.onclick = seleccionarPokemon;
document.querySelector("#botonSiguiente").onclick = cambiarPagina;
document.querySelector("#botonAnterior").onclick = cambiarPagina;
document.querySelector("#irAPagina").onclick = cambiarPagina;
document.querySelector("#controlarVisibilidadBotonVolver").onclick =
  cambiarPagina;
/*
import { enviosArraysApi } from "../servicios/servicio.js";

async function test() {
  console.log(await enviosArraysApi());
}
document.querySelector("#datos").onclick = test;
*/
