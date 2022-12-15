import { numeroPagina } from "../navegador-de-paginas/ir-a-pagina.js";
import { listaAnterior } from "../../api/guardo-datos-api.js";
import { obtengoPaginaDeLaPokedex } from "../cambio-pagina-pokedex.js";
import { cantidadPaginasPokemons } from "../../ui/ui-de-la-pokedex.js";
import { numeroPaginav2 } from "../../ui/controlador-de-eventos-principal.js";

export function botonAnteriorPagina() {
  //let paginaMinima = document.querySelector("#selectorPagina");

  obtengoPaginaDeLaPokedex(listaAnterior);
  numeroPagina(false);
  numeroPaginav2(false);
  /*
  if (Number(paginaMinima.value) === 1) {
    document.querySelector("#botonAnterior").hidden = true;
  } else {
    document.querySelector("#botonAnterior").hidden = false;
  }
  if (Number(paginaMinima.value) < cantidadPaginasPokemons) {
    document.querySelector("#botonSiguiente").hidden = false;
  }
  */
}

/**
 * ok,lo que teneoms que hacer,es partir en 2 esta funcion, la parte que oculta los botones es una funcion,
 * y la que llama al cambio de pagina es otra, solo eso tengo que hacer, con todos
 * tengo que quitar CUALQUIER cosa que toque el dom, y ponerlo en la ui
 */
