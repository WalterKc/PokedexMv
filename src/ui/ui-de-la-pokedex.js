let filas = document.querySelectorAll("#fila");
let estaLaPrimeraListaCreada = false;
export let contendenorPokemones = document.querySelector(
  "#contendenorPokemones"
);
export let cantidadPaginasPokemons = 0;
import { creoLista } from "./elementos-de-la-ui/creo-listas.js";
import { creoPaginasDePokemons } from "./elementos-de-la-ui/creo-paginas-de-pokemons.js";
import { ordenoPokemones } from "./elementos-de-la-ui/ordeno-los-pokemons.js";
import { colocoImagenesDeLosPokemons } from "./elementos-de-la-ui/coloco-imgenes-de-pokemons.js";
import { todosLosDatos } from "../api/guardo-datos-api.js";
import { colocoPokemonEnLaLista } from "./elementos-de-la-ui/coloco-pokemon-en-las-listas.js";

export async function creoLaUiDeLaPokedex(api) {
  if (!estaLaPrimeraListaCreada) {
    creoLista(contendenorPokemones, api.results);
    colocoPokemonEnLaLista(api.results);
    cantidadPaginasPokemons = Math.floor(api.count / 20);
    creoPaginasDePokemons(cantidadPaginasPokemons);
    document.querySelector("#botonAnterior").hidden = true;

    estaLaPrimeraListaCreada = true;
  } else {
    colocoPokemonEnLaLista(api.results);
  }
  ordenoPokemones(filas);
  colocoImagenesDeLosPokemons(todosLosDatos);
}
