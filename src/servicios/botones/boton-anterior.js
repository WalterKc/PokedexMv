//import { listaAnterior } from "../../api/guardo-datos-api.js";
import { obtenerPaginaDeLaPokedex } from "../cambio-pagina-pokedex.js";
import { controlarPaginaNumero } from "../../ui/controlador-de-eventos-principal.js";
import { listaAnterior } from "../../api/api.js";
export function botonAnteriorPagina() {
  obtenerPaginaDeLaPokedex(listaAnterior);
  controlarPaginaNumero(false);
}
