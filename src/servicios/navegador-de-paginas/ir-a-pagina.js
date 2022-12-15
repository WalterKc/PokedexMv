import { obtengoPaginaDeLaPokedex } from "../cambio-pagina-pokedex.js";
import { selectorPagina } from "../../api/guardo-datos-api.js";
import { limiteSelector } from "../../api/guardo-datos-api.js";
export function irAPagina(numeroDePagina) {
  console.log(Number(numeroDePagina.value));
  obtengoPaginaDeLaPokedex(
    selectorPagina + 20 * Number(numeroDePagina.value - 1) + limiteSelector
  );
}
