import { primeraDireccion } from "./api/api.js";
import { entregarDatosApi } from "./servicios/servicio.js";
import { crearUiPokedex } from "./ui/ui.js";
export async function inicializar() {
  await crearUiPokedex(entregarDatosApi(primeraDireccion));
}
