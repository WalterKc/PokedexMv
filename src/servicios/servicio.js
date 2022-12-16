/**
 * vamos a hacer lo mismo con este, vamos a traer todos los servicios, vamos a simplificarlos/modificar
 * lo que sean necesarios, y vamos a exportarla aver si funca
 * vamos a juntar los botones/evento de cambio de pagina, en uno solo, aunque sea un poco mas complejo
 *LISTO, falta
 */

//import { obtenerPaginaDeLaPokedex } from "../cambio-pagina-pokedex.js";
//import { controlarPaginaNumero } from "../../ui/controlador-de-eventos-principal.js";
//import { controlarPaginaNumero } from "../ui/controlador-de-eventos-principal.js";
import { controlarPaginaNumero } from "../ui/ui.js";
//import { listaAnterior } from "../../api/api.js";
import { listaAnterior } from "../api/api.js";
export function botonAnteriorPagina() {
  obtenerPaginaDeLaPokedex(listaAnterior);
  controlarPaginaNumero(false);
}
//import { obtenerPaginaDeLaPokedex } from "../cambio-pagina-pokedex.js";
//import { controlarPaginaNumero } from "../../ui/controlador-de-eventos-principal.js";
//import { siguienteLista } from "../../api/api.js";
import { siguienteLista } from "../api/api.js";
export function botonSiguientePagina() {
  obtenerPaginaDeLaPokedex(siguienteLista);
  controlarPaginaNumero(true);
}
//// UNION de los 2 de arriba
export function cambiarPaginaSiguienteAnterior(selector, numeroDePagina) {
  if (selector) {
    obtenerPaginaDeLaPokedex(siguienteLista);
    controlarPaginaNumero(true);
  } else {
    obtenerPaginaDeLaPokedex(listaAnterior);
    controlarPaginaNumero(false);
  }
}
//import { obtenerPaginaDeLaPokedex } from "../cambio-pagina-pokedex.js";
//import { selectorPagina } from "../../api/api.js";
import { selectorPagina } from "../api/api.js";
//import { limiteSelector } from "../../api/api.js";
import { limiteSelector } from "../api/api.js";
export function irAPagina(numeroDePagina) {
  console.log(Number(numeroDePagina));
  obtenerPaginaDeLaPokedex(
    selectorPagina + 20 * Number(numeroDePagina - 1) + limiteSelector
  );
}
//import { obtenerDatosDeLaApi } from "../../api/api.js";
import { obtenerDatosDeLaApi } from "../api/api.js";
//import { primeraDireccion } from "../../api/api.js";
import { primeraDireccion } from "../api/api.js";

export async function obtenerDatosDelPokemonSelecionado(pokemonSelecionado) {
  let pokemonActual = await obtenerDatosDeLaApi(
    primeraDireccion + "/" + pokemonSelecionado + "/"
  );
  return pokemonActual;
}
import { guardarDatosApi } from "../api/api.js";
//import { crearLaUiDeLaPokedex } from "../ui/ui-de-la-pokedex.js";
import { crearLaUiDeLaPokedex } from "../ui/ui.js";
//import { obtenerDatosDeLaApi } from "../api/api.js";
export async function obtenerPaginaDeLaPokedex(direccion) {
  await guardarDatosApi(await obtenerDatosDeLaApi(direccion));
  await crearLaUiDeLaPokedex(await obtenerDatosDeLaApi(direccion));
}
