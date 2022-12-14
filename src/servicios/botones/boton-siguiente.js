import { numeroPagina } from "../navegador-de-paginas/ir-a-pagina.js";

import { siguienteLista } from "../../api/guardo-datos-api.js";

import { obtengoPaginaDeLaPokedex } from "../cambio-pagina-pokedex.js";
import { cantidadPaginasPokemons } from "../../ui/ui-de-la-pokedex.js";

export function botonSiguientePagina() {
  let paginaMaxima = document.querySelector("#selectorPagina");
  obtengoPaginaDeLaPokedex(siguienteLista);
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
