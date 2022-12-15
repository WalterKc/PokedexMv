import { botonSiguientePagina } from "../servicios/botones/boton-siguiente.js";
import { botonAnteriorPagina } from "../servicios/botones/boton-anterior.js";
import { seleccionoPokemon } from "../servicios/seleciono-pokemon/seleciono-un-pokemon.js";
import { irAPagina } from "../servicios/navegador-de-paginas/ir-a-pagina.js";
//import { paginaNumero } from "../servicios/navegador-de-paginas/ir-a-pagina.js";
import { cantidadPaginasPokemons } from "./ui-de-la-pokedex.js";
import { datosDelPokemonSelecionado } from "../servicios/seleciono-pokemon/seleciono-un-pokemon.js";
import { irAPagina2 } from "../servicios/navegador-de-paginas/ir-a-pagina.js";
//import { botonVolver } from "../servicios/botones/boton-volver.js";
import { contendenorPokemones } from "./ui-de-la-pokedex.js";
let paginaNumero = 1;
/**
 * espacio para eventos extra
 * guia: primero, probemos los botones siguiente, atras, y volver, asi no nos complicamos
 * LISTO LO DE ARRIBA, solo hay que ponerle un nombre mas kawaii
 * ahora, vamos a modificar el seleciono a un pokemon desuyo
 * LISTO LO DE ARRIBA
 * ahora vamos a modificar el ir a pagina
 * LISTO TODO; AHORA A LOS NOMBRES
 */
//Uno a estos 2, por que son el mismo
let paginaMaxima = document.querySelector("#selectorPagina");
let paginaMinima = document.querySelector("#selectorPagina");
let selectorPagina = document.querySelector("#selectorPagina");

async function controlBotonAnterior() {
  if (Number(selectorPagina.value) === 1) {
    document.querySelector("#botonAnterior").hidden = true;
  } else {
    document.querySelector("#botonAnterior").hidden = false;
  }
  if (Number(selectorPagina.value) < cantidadPaginasPokemons) {
    document.querySelector("#botonSiguiente").hidden = false;
  }
}
async function controlBotonSiguiente() {
  //console.log(Number(selectorPagina.value));
  if (Number(selectorPagina.value) === cantidadPaginasPokemons) {
    document.querySelector("#botonSiguiente").hidden = true;
  } else {
    document.querySelector("#botonSiguiente").hidden = false;
  }
  if (Number(selectorPagina.value) > 1) {
    document.querySelector("#botonAnterior").hidden = false;
  }
}

//este no nesesita nada, asi que lo dejo igual, y lo borro del otro lado
async function botonVolver() {
  contendenorPokemones.hidden = false;
  //aca tengo que meter lo que controla el numero de la pagina
  document.querySelector("#pokemonSelecionado").hidden = true;
  selectorPagina.value = paginaNumero;
  await controlBotonAnterior();
  //document.querySelector("#botonAnterior").hidden = false;
  await controlBotonSiguiente();
  //document.querySelector("#botonSiguiente").hidden = false;
  document.querySelector("#botonVolver").hidden = true;
}

function test() {
  console.log(Number(selectorPagina.value));
}

//este lo voy a dejar para el final , pro ser mas complejo

async function controloIrAPagina() {
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
export async function numeroPagina(avanzaORetrocede) {
  if (!avanzaORetrocede && paginaNumero > 1) {
    paginaNumero -= 1;

    selectorPagina.value = paginaNumero;
  } else {
    paginaNumero += 1;

    selectorPagina.value = paginaNumero;
  }
}

async function seleccionoPokemonNuevo(event) {
  let valorAEnviar = "";

  if (event.target.innerText === "") {
    console.log(event.target.parentElement.innerText);
    valorAEnviar = event.target.parentElement.innerText;
  } else {
    console.log(event.target.innerText);
    valorAEnviar = event.target.innerText;
  }

  //obtengoDatosDelPokemonSelecionado(valorAEnviar);
  //datosDelPokemonSelecionado(valorAEnviar)
  await controloSelector(valorAEnviar);
}
async function controloSelector(valorAEnviar) {
  let pokemonActual = await datosDelPokemonSelecionado(valorAEnviar);
  contendenorPokemones.hidden = true;

  document.querySelector("#pokemonSelecionado").hidden = false;
  document.querySelector("#nombrePoke").innerText = pokemonActual.name;
  document.querySelector("#imagenSelecionada").src =
    pokemonActual.sprites.front_default;
  document.querySelector("#botonAnterior").hidden = true;
  document.querySelector("#botonSiguiente").hidden = true;
  document.querySelector("#botonVolver").hidden = false;

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

function controlGeneralBotonSiguiente() {
  botonSiguientePagina();
  controlBotonSiguiente();
  test();
}
function controlGeneralBotonAnterior() {
  botonAnteriorPagina();
  controlBotonAnterior();
  test();
}
function controlGeneralSelectorPagina() {
  irAPagina2(selectorPagina);
  controloIrAPagina();
}
document.querySelector("#botonSiguiente").onclick =
  controlGeneralBotonSiguiente;
//document.querySelector("#botonSiguiente").onclick = test;

document.querySelector("#botonAnterior").onclick = controlGeneralBotonAnterior;

//contendenorPokemones.onclick = seleccionoPokemon;
contendenorPokemones.onclick = seleccionoPokemonNuevo;
//document.querySelector("#irAPagina").onclick = irAPagina;

document.querySelector("#irAPagina").onclick = controlGeneralSelectorPagina;

document.querySelector("#botonVolver").onclick = botonVolver;
