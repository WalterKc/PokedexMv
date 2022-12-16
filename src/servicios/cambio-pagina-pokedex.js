//import { guardarDatosApi } from "../api/guardo-datos-api.js";
import { guardarDatosApi } from "../api/api.js";
import { crearLaUiDeLaPokedex } from "../ui/ui-de-la-pokedex.js";
//import { obtenerDatosDeLaApi } from "../api/llamo-a-la-api.js";
import { obtenerDatosDeLaApi } from "../api/api.js";
export async function obtenerPaginaDeLaPokedex(direccion) {
  await guardarDatosApi(await obtenerDatosDeLaApi(direccion));
  await crearLaUiDeLaPokedex(await obtenerDatosDeLaApi(direccion));
}
