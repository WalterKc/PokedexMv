import { contendenorPokemones } from "../../ui/ui-de-la-pokedex.js";
export function botonVolver() {
  contendenorPokemones.hidden = false;
  document.querySelector("#pokemonSelecionado").hidden = true;

  document.querySelector("#botonAnterior").hidden = false;
  document.querySelector("#botonSiguiente").hidden = false;
  document.querySelector("#botonVolver").hidden = true;
}
