import { contendenorPokemones } from "../Cambio de pagina/Logica de paginacion/CreoPokedex.js";
export function botonVolver() {
  contendenorPokemones.hidden = false;
  document.querySelector("#pokemonSelecionado").hidden = true;

  document.querySelector("#botonAnterior").hidden = false;
  document.querySelector("#botonSiguiente").hidden = false;
  document.querySelector("#botonVolver").hidden = true;
}
