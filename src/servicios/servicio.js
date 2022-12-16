import { controlarPaginaNumero } from "../ui/ui.js";
import { listaAnterior } from "../api/api.js";
import { selectorPagina } from "../api/api.js";
import { limiteSelector } from "../api/api.js";
import { obtenerDatosDeLaApi } from "../api/api.js";
import { primeraDireccion } from "../api/api.js";
import { guardarDatosApi } from "../api/api.js";
import { crearLaUiDeLaPokedex } from "../ui/ui.js";

export function cambiarPaginaSiguienteAnterior(selector) {
  if (selector) {
    obtenerPaginaDeLaPokedex(siguienteLista);
    controlarPaginaNumero(true);
  } else {
    obtenerPaginaDeLaPokedex(listaAnterior);
    controlarPaginaNumero(false);
  }
}

export function irAPagina(numeroDePagina) {
  console.log(Number(numeroDePagina));
  obtenerPaginaDeLaPokedex(
    selectorPagina + 20 * Number(numeroDePagina - 1) + limiteSelector
  );
}

export async function obtenerDatosDelPokemonSelecionado(pokemonSelecionado) {
  let pokemonActual = await obtenerDatosDeLaApi(
    primeraDireccion + "/" + pokemonSelecionado + "/"
  );
  return pokemonActual;
}

export async function obtenerPaginaDeLaPokedex(direccion) {
  await guardarDatosApi(await obtenerDatosDeLaApi(direccion));
  await crearLaUiDeLaPokedex(await obtenerDatosDeLaApi(direccion));
}
