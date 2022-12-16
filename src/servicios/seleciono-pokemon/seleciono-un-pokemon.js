//import { obtenerDatosDeLaApi } from "../../api/llamo-a-la-api.js";
//import { primeraDireccion } from "../../api/guardo-datos-api.js";
import { obtenerDatosDeLaApi } from "../../api/api.js";
import { primeraDireccion } from "../../api/api.js";

export async function obtenerDatosDelPokemonSelecionado(pokemonSelecionado) {
  let pokemonActual = await obtenerDatosDeLaApi(
    primeraDireccion + "/" + pokemonSelecionado + "/"
  );
  return pokemonActual;
}
