import { numeroPagina } from "./IrAPagina.js";
import { siguienteLista } from "../Api/GuardoDatosApi.js";
import { controlPaginasPokedex } from "../Cambio de pagina/CambioPaginaPokedex.js";
import { cantidadPaginasPokemons } from "../Cambio de pagina/Logica de paginacion/CreoPokedex.js";

export function botonSiguientePagina() {
  let paginaMaxima = document.querySelector("#selectorPagina");
  controlPaginasPokedex(siguienteLista);
  numeroPagina(true);
  if (Number(paginaMaxima.value) === cantidadPaginasPokemons) {
    document.querySelector("#botonSiguiente").hidden = true;
  } else {
    document.querySelector("#botonSiguiente").hidden = false;
  }
  if (Number(paginaMaxima.value) > 1) {
    document.querySelector("#botonAnterior").hidden = false;
  }
}
