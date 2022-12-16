//import { botonSiguientePagina } from "../servicios/botones/boton-siguiente.js";
//import { botonAnteriorPagina } from "../servicios/botones/boton-anterior.js";
import { cantidadPaginasPokemons } from "./ui-de-la-pokedex.js";
//import { obtenerDatosDelPokemonSelecionado } from "../servicios/seleciono-pokemon/seleciono-un-pokemon.js";
//import { irAPagina } from "../servicios/navegador-de-paginas/ir-a-pagina.js";
import { contendenorPokemones } from "./ui-de-la-pokedex.js";
import { botonSiguientePagina } from "../servicios/servicio.js";
import { botonAnteriorPagina } from "../servicios/servicio.js";
import { obtenerDatosDelPokemonSelecionado } from "../servicios/servicio.js";
import { irAPagina } from "../servicios/servicio.js";

let paginaNumero = 1;
let selectorPagina = document.querySelector("#selectorPagina");
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
async function controlarUiAlSelecionarUnPokemon(valorAEnviar) {
  let pokemonActual = await obtenerDatosDelPokemonSelecionado(valorAEnviar);
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

function controlGeneralBotonSiguiente() {
  botonSiguientePagina();
  controlarVisibilidadBotonSiguiente();
}
function controlGeneralBotonAnterior() {
  botonAnteriorPagina();
  controlarVisibilidadBotonAnterior();
}
function controlarSelectorPagina() {
  irAPagina(selectorPagina.value);
  controlarVisibilidadBotonesAlUsarIrAPagina();
}

document.querySelector("#botonSiguiente").onclick =
  controlGeneralBotonSiguiente;
document.querySelector("#botonAnterior").onclick = controlGeneralBotonAnterior;
contendenorPokemones.onclick = seleccionarPokemon;
document.querySelector("#irAPagina").onclick = controlarSelectorPagina;
document.querySelector("#controlarVisibilidadBotonVolver").onclick =
  controlarVisibilidadBotonVolver;
