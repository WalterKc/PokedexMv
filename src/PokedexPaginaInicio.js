//import { obtenerPaginaDeLaPokedex } from "./servicios/cambio-pagina-pokedex.js";
import { obtenerPaginaDeLaPokedex } from "./servicios/servicio.js";
//let primeraDireccion = "https://pokeapi.co/api/v2/pokemon";
//import { primeraDireccion } from "./api/guardo-datos-api.js";
import { primeraDireccion } from "./api/api.js";

export async function inicializar() {
  await obtenerPaginaDeLaPokedex(primeraDireccion);
}
