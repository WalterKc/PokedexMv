let filas = document.querySelectorAll("#fila");
let estaLaPrimeraListaCreada = false;
export let contendenorPokemones = document.querySelector(
  "#contendenorPokemones"
);
export let cantidadPaginasPokemons = 0;
import { crearLista } from "./esqueleto de la pokedex/CreoListas.js";
import { crearPaginasDePokemons } from "./esqueleto de la pokedex/CreoPaginasDePokemons.js";
import { ordenarPokemones } from "./esqueleto de la pokedex/OrdenoLosPokemons.js";
import { colocarImagenesDeLosPokemons } from "./esqueleto de la pokedex/ColocoImgenesDePokemons.js";
import { todosLosDatos } from "../../Api/GuardoDatosApi.js";
import { colocarPokemonEnLaLista } from "./esqueleto de la pokedex/colocoPokemonEnLasListas.js";

export async function crearPokedex(api) {
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
