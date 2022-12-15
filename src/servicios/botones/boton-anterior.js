import { listaAnterior } from "../../api/guardo-datos-api.js";
import { obtengoPaginaDeLaPokedex } from "../cambio-pagina-pokedex.js";
import { numeroPagina } from "../../ui/controlador-de-eventos-principal.js";
export function botonAnteriorPagina() {
  obtengoPaginaDeLaPokedex(listaAnterior);
  numeroPagina(false);
}
