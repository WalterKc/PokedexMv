import { siguienteLista } from "../../api/guardo-datos-api.js";
import { obtengoPaginaDeLaPokedex } from "../cambio-pagina-pokedex.js";
import { numeroPagina } from "../../ui/controlador-de-eventos-principal.js";
export function botonSiguientePagina() {
  obtengoPaginaDeLaPokedex(siguienteLista);
  numeroPagina(true);
}
