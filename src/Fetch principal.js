let arrayPokemons = [];
let arrayDatos = [];
export let todosLosDatos = [];
export let contendenorPokemones = document.querySelector(
  "#contendenorPokemones"
);
let filas = document.querySelectorAll("#fila");
let cantidadPaginasPokemons = 0;
let paginaNumero = 1;
let primeraDireccion = "https://pokeapi.co/api/v2/pokemon";
export let siguienteLista = "";
export let listaAnterior = "";
let estaLaPrimeraListaCreada = false;

import {
  crearLista,
  colocarPokemonEnLaLista,
  crearPaginasDePokemons,
  ordenarPokemones,
  obtenerTodosLosDatosDeLosPokemonsAMostrar,
} from "./organizadorDePokemons.js";
/*
Hay que importar
crear lista LISTO
colocarpokemonsenlalista LISTO
crearpaginasdepokemons LISTO
ordenarpokemones LISTO
obtenerTodosLosDatosDeLosPokemonsAMostrar LISTO

*/

export function llamarPokemones(direccion) {
  fetch(direccion)
    .then((respuesta) => respuesta.json())
    .then((respuesta) => {
      arrayPokemons = [];
      arrayDatos = [];
      todosLosDatos = [];

      for (let i = 0; i < 20; i++) {
        arrayPokemons.push(respuesta.results[i].name);
        arrayDatos.push(respuesta.results[i]);
      }
      if (!estaLaPrimeraListaCreada) {
        crearLista(contendenorPokemones, respuesta.results);
        colocarPokemonEnLaLista(respuesta.results);
        cantidadPaginasPokemons = Math.floor(respuesta.count / 20);
        crearPaginasDePokemons(cantidadPaginasPokemons);

        estaLaPrimeraListaCreada = true;
      } else {
        colocarPokemonEnLaLista(respuesta.results);
        document.querySelector("#botonAnterior").hidden = false;
      }
      siguienteLista = respuesta.next;
      listaAnterior = respuesta.previous;
      if (listaAnterior === null && estaLaPrimeraListaCreada) {
        document.querySelector("#botonAnterior").hidden = true;
      }
      if (
        siguienteLista ===
          "https://pokeapi.co/api/v2/pokemon?offset=1140&limit=14" &&
        estaLaPrimeraListaCreada
      ) {
        document.querySelector("#botonSiguiente").hidden = true;
      } else {
        document.querySelector("#botonSiguiente").hidden = false;
      }
      ordenarPokemones(filas);

      obtenerTodosLosDatosDeLosPokemonsAMostrar(arrayDatos);
    })

    .catch((error) => console.error("fallo ALGO", error));
}

llamarPokemones(primeraDireccion);
