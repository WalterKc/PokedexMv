import { urlPaginaAnterior, urlPaginaSiguiente } from "../api/api.js";
import { obtenerDatosDeLaApi } from "../api/api.js";
import { guardarDatosApi } from "../api/api.js";
import { arrayEstadisticasYSpritesPokemones } from "../api/api.js";
import { obtenerPokemon } from "../api/api.js";
import { EnviarUrlNueva } from "../api/api.js";

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
  let nuevaUrl = EnviarUrlNueva(numeroDePagina);
  return nuevaUrl;
}
export function CambiarPagina(selector) {
  if (selector) {
    return urlPaginaSiguiente;
  } else {
    return urlPaginaAnterior;
  }
}
