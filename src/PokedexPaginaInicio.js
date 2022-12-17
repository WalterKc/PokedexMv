import { primeraDireccion } from "./api/api.js";
import { entregarDatosApi } from "./servicios/servicio.js";
import { crearLaUiDeLaPokedex } from "./ui/ui.js";
export async function inicializar() {
  await crearLaUiDeLaPokedex(entregarDatosApi(primeraDireccion));
}
