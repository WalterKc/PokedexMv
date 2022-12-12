export let arrayPokemons = [];
export let arrayDatos = [];
export let todosLosDatos = [];
export let siguienteLista = "";
export let listaAnterior = "";
import { obtenerTodosLosDatosDeLosPokemonsAMostrar } from "./ObtenerTodosLosDatosDeLosPokesActivos.js";

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
