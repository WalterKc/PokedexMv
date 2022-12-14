export let arrayPokemons = [];
export let arrayDatos = [];
export let todosLosDatos = [];
export let siguienteLista = "";
export let listaAnterior = "";
export let primeraDireccion = "https://pokeapi.co/api/v2/pokemon";
export let selectorPagina = "https://pokeapi.co/api/v2/pokemon?offset=";
export let limiteSelector = "&limit=20";
import { obtenerTodosLosDatosDeLosPokemonsAMostrar } from "./obtener-todos-los-datos-de-los-pokes-activos.js";

export async function guardoDatosapi(api) {
  arrayPokemons = [];
  arrayDatos = [];
  todosLosDatos = [];
  for (let i = 0; i < 20; i++) {
    arrayPokemons.push(api.results[i].name);
    arrayDatos.push(api.results[i]);
  }
  siguienteLista = api.next;
  listaAnterior = api.previous;

  await obtenerTodosLosDatosDeLosPokemonsAMostrar(arrayDatos);
}
