import { obtenerPaginaDeLaPokedex } from "./servicios/servicio.js";
import { primeraDireccion } from "./api/api.js";

export async function inicializar() {
  await obtenerPaginaDeLaPokedex(primeraDireccion);
}
