import { controlPaginasPokedex } from "./Cambio de pagina/CambioPaginaPokedex.js";
let primeraDireccion = "https://pokeapi.co/api/v2/pokemon";

export async function inicializar() {
  await controlPaginasPokedex(primeraDireccion);
}
