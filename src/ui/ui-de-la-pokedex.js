let filas = document.querySelectorAll("#fila");
let estaLaPrimeraListaCreada = false;
export let contendenorPokemones = document.querySelector(
  "#contendenorPokemones"
);
export let cantidadPaginasPokemons = 0;
import { crearLista } from "./elementos-de-la-ui/creo-listas.js";
import { crearPaginasDePokemons } from "./elementos-de-la-ui/creo-paginas-de-pokemons.js";
import { ordenarPokemones } from "./elementos-de-la-ui/ordeno-los-pokemons.js";
import { colocarImagenesDeLosPokemons } from "./elementos-de-la-ui/coloco-imgenes-de-pokemons.js";
//import { todosLosDatos } from "../api/guardo-datos-api.js";
import { todosLosDatos } from "../api/api.js";
import { colocarPokemonEnLaLista } from "./elementos-de-la-ui/coloco-pokemon-en-las-listas.js";

export async function crearLaUiDeLaPokedex(api) {
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
