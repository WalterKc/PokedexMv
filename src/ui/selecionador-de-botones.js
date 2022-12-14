import { botonSiguientePagina } from "../servicios/botones/boton-siguiente.js";
import { botonAnteriorPagina } from "../servicios/botones/boton-anterior.js";
import { seleccionoPokemon } from "../servicios/seleciono-pokemon/seleciono-un-pokemon.js";
import { irAPagina } from "../servicios/navegador-de-paginas/ir-a-pagina.js";
import { botonVolver } from "../servicios/botones/boton-volver.js";
import { contendenorPokemones } from "./ui-de-la-pokedex.js";
document.querySelector("#botonSiguiente").onclick = botonSiguientePagina;
document.querySelector("#botonAnterior").onclick = botonAnteriorPagina;
contendenorPokemones.onclick = seleccionoPokemon;
document.querySelector("#irAPagina").onclick = irAPagina;
document.querySelector("#botonVolver").onclick = botonVolver;
