import { obtengoPaginaDeLaPokedex } from "./services-de-la-pokedex/cambio-pagina-pokedex.js";
//let primeraDireccion = "https://pokeapi.co/api/v2/pokemon";
import { primeraDireccion } from "./api/guardo-datos-api.js";

export async function inicializar() {
  await obtengoPaginaDeLaPokedex(primeraDireccion);
}
