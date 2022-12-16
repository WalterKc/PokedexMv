//import { siguienteLista } from "../../api/guardo-datos-api.js";
import { obtenerPaginaDeLaPokedex } from "../cambio-pagina-pokedex.js";
import { controlarPaginaNumero } from "../../ui/controlador-de-eventos-principal.js";
import { siguienteLista } from "../../api/api.js";
export function botonSiguientePagina() {
  obtenerPaginaDeLaPokedex(siguienteLista);
  controlarPaginaNumero(true);
}
