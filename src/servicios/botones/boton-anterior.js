import { numeroPagina } from "../navegador-de-paginas/ir-a-pagina.js";
import { listaAnterior } from "../../api/guardo-datos-api.js";
import { obtengoPaginaDeLaPokedex } from "../cambio-pagina-pokedex.js";
import { cantidadPaginasPokemons } from "../../ui/ui-de-la-pokedex.js";

export function botonAnteriorPagina() {
  let paginaMinima = document.querySelector("#selectorPagina");

  obtengoPaginaDeLaPokedex(listaAnterior);
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
