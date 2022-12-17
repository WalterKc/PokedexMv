import { listaAnterior, siguienteLista } from "../api/api.js";
import { obtenerDatosDeLaApi } from "../api/api.js";
import { guardarDatosApi } from "../api/api.js";
import { arrayEstadisticasYSpritesPokemones } from "../api/api.js";
import { obtenerPokemon } from "../api/api.js";
import { EnviarUrlNueva } from "../api/api.js";

/**
 * ok ahora tengo que arreglar esto otra vez.........
 * aca vamos a poner lo que se tenga que hacer, otra vez......
 * OK, mis nombres ya estan en imperativo, pero hay que cambiarlos, pero como es algo que se puede hacer facil
 * se va a dejar para el final
 * ok, los servicios , no pueden importar nada de la ui, pero si le podes "pasar" parametros,
 * hay esta la clave
 * primero, vamos cambiar esto , de la siguiente manera, vamos a hacerlo, primero unipagina,
 * solo cargemos la primera pagina, y nada mas,olvidate de que se puede cambiar de pagina, y selecionar un poke
 * ahora , vamos a arreglar lo de selecionar un poke, LISTO
 * ahora , vamos a arreglar lo de del cambio de pagina, este hay que cambiar, y mucho LISTO
 * ahora vamos a arreglar la el selecotor de paginas LISTO
 * ahora borremos lo que ya no se usa Listo
 * ahora, vamos a arreglar los nombres
 *
 */

//////////////////////////////////////////////////////////////////////////////////////////////
/**
 * TESTS
 */
export async function entregarDatosApi(direccion) {
  await guardarDatosApi(await obtenerDatosDeLaApi(direccion));
  let datosApi = await obtenerDatosDeLaApi(direccion);

  return datosApi;
}
export async function entregarDatosPagina() {
  return arrayEstadisticasYSpritesPokemones;
}
export async function enviarPokemon(pokemon) {
  let pokemonDatos = obtenerPokemon(pokemon);
  return pokemonDatos;
}
export function enviarPagina(numeroDePagina) {
  console.log(Number(numeroDePagina));
  let nuevaUrl = EnviarUrlNueva(numeroDePagina);
  return nuevaUrl;
}
export function CambiarPagina(selector) {
  if (selector) {
    return siguienteLista;
  } else {
    return listaAnterior;
  }
}
