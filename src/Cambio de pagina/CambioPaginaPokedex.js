import { guardoDatosapi } from "../Api/GuardoDatosApi.js";
import { crearPokedex } from "./Logica de paginacion/CreoPokedex.js";
import { traerDatosDeLaApis } from "../Api/LlamoALaApi.js";
export async function controlPaginasPokedex(direccion) {
  await guardoDatosapi(await traerDatosDeLaApis(direccion));
  await crearPokedex(await traerDatosDeLaApis(direccion));
}
