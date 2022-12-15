import { obtengoDatosDeLaApi } from "../../api/llamo-a-la-api.js";
import { primeraDireccion } from "../../api/guardo-datos-api.js";
export async function datosDelPokemonSelecionado(pokemonSelecionado) {
  let pokemonActual = await obtengoDatosDeLaApi(
    primeraDireccion + "/" + pokemonSelecionado + "/"
  );
  return pokemonActual;
}
