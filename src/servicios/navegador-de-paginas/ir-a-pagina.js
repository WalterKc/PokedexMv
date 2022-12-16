import { obtenerPaginaDeLaPokedex } from "../cambio-pagina-pokedex.js";
//import { selectorPagina } from "../../api/guardo-datos-api.js";
//import { limiteSelector } from "../../api/guardo-datos-api.js";
import { selectorPagina } from "../../api/api.js";
import { limiteSelector } from "../../api/api.js";
export function irAPagina(numeroDePagina) {
  console.log(Number(numeroDePagina));
  obtenerPaginaDeLaPokedex(
    selectorPagina + 20 * Number(numeroDePagina - 1) + limiteSelector
  );
}
