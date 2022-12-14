import { guardoDatosapi } from "../api/guardo-datos-api.js";
import { creoLaUiDeLaPokedex } from "../ui/ui-de-la-pokedex.js";
import { obtengoDatosDeLaApi } from "../api/llamo-a-la-api.js";
export async function obtengoPaginaDeLaPokedex(direccion) {
  await guardoDatosapi(await obtengoDatosDeLaApi(direccion));
  await creoLaUiDeLaPokedex(await obtengoDatosDeLaApi(direccion));
}
