let filas = document.querySelectorAll("#fila");
let estaLaPrimeraListaCreada = false;
let contendenorPokemones = document.querySelector("#contendenorPokemones");
let cantidadPaginasPokemons = 0;
let paginaNumero = 1;
let selectorPagina = document.querySelector("#selectorPagina");
import { entregarDatosPagina } from "../servicios/servicio.js";
export async function crearUiPokedex(reciboDatosDeLaApi) {
  let api = await reciboDatosDeLaApi;

  if (!estaLaPrimeraListaCreada) {
    crearLista(contendenorPokemones, api.results);
    colocarPokemonEnLista(api.results);
    cantidadPaginasPokemons = Math.floor(api.count / 20);
    crearPaginasDePokemons(cantidadPaginasPokemons);
    document.querySelector("#botonAnterior").hidden = true;
    estaLaPrimeraListaCreada = true;
  } else {
    colocarPokemonEnLista(api.results);
  }
  ordenarPokemones(filas);
  colocarImagenesPokemons(await entregarDatosPagina());
}

function crearElementosDeLista(elementoPadre) {
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
    crearElementosDeLista(listaAReplicar);
  }
}
async function colocarPokemonEnLista(Nombres) {
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

async function colocarImagenesPokemons(listaDeDatosDePokemones) {
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
}
async function controlarVisibilidadBotonVolver() {
  contendenorPokemones.hidden = false;
  document.querySelector("#pokemonSelecionado").hidden = true;
  selectorPagina.value = paginaNumero;
  await controlarVisibilidadBotonAnterior();
  await controlarVisibilidadBotonSiguiente();
  document.querySelector("#botonVolver").hidden = true;
}
async function controlarVisibilidadBotonesCambioPagina() {
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
async function controlarPaginaNumero(avanzaORetrocede) {
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

  await controlarUiSelecionarPokemon(valorAEnviar);
}
import { enviarPokemon } from "../servicios/servicio.js";
async function controlarUiSelecionarPokemon(valorAEnviar) {
  let pokemonActual = await enviarPokemon(valorAEnviar);
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

import { enviarPagina } from "../servicios/servicio.js";
import { entregarDatosApi } from "../servicios/servicio.js";
async function controlarSelectorPagina() {
  await enviarPagina(selectorPagina.value);
  controlarVisibilidadBotonesCambioPagina();
  let dato = await entregarDatosApi(await enviarPagina(selectorPagina.value));

  crearUiPokedex(
    await entregarDatosApi(await enviarPagina(selectorPagina.value))
  );
}
import { CambiarPagina } from "../servicios/servicio.js";
async function cambiarPagina(event) {
  if (event.target.id === "botonSiguiente") {
    controlarPaginaNumero(true);
    controlarVisibilidadBotonSiguiente();
    let dato = CambiarPagina(true);
    crearUiPokedex(await entregarDatosApi(dato));
  } else if (event.target.id === "irAPagina") {
    controlarSelectorPagina();
  } else if (event.target.id === "botonVolver") {
    controlarVisibilidadBotonVolver();
  } else {
    controlarPaginaNumero(false);
    controlarVisibilidadBotonAnterior();
    let dato = CambiarPagina(false);
    crearUiPokedex(await entregarDatosApi(dato));
  }
}

contendenorPokemones.onclick = seleccionarPokemon;
document.querySelector("#botonSiguiente").onclick = cambiarPagina;
document.querySelector("#botonAnterior").onclick = cambiarPagina;
document.querySelector("#irAPagina").onclick = cambiarPagina;
document.querySelector("#botonVolver").onclick = cambiarPagina;
