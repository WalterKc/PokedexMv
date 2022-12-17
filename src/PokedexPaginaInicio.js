import { obtenerPaginaDeLaPokedex } from "./servicios/servicio.js";
import { obtenerDatosDeLaApi, primeraDireccion } from "./api/api.js";
import { entregarDatosDeLaApi } from "./servicios/servicio.js";
import { crearLaUiDeLaPokedex } from "./ui/ui.js";
export async function inicializar() {
  //await obtenerPaginaDeLaPokedex(primeraDireccion);
  //await entregarDatosDeLaApi(primeraDireccion);
  await crearLaUiDeLaPokedex(entregarDatosDeLaApi(primeraDireccion));
}
