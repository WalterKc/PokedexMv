import { numeroPagina } from "./IrAPagina.js";
import { listaAnterior } from "../Api/GuardoDatosApi.js";
import { controlPaginasPokedex } from "../Cambio de pagina/CambioPaginaPokedex.js";
import { cantidadPaginasPokemons } from "../Cambio de pagina/Logica de paginacion/CreoPokedex.js";
export function botonAnteriorPagina() {
  let paginaMinima = document.querySelector("#selectorPagina");

  controlPaginasPokedex(listaAnterior);
  numeroPagina(false);
  if (Number(paginaMinima.value) === 1) {
    document.querySelector("#botonAnterior").hidden = true;
  } else {
    document.querySelector("#botonAnterior").hidden = false;
  }
  if (Number(paginaMinima.value) < cantidadPaginasPokemons) {
    document.querySelector("#botonSiguiente").hidden = false;
  }
}
