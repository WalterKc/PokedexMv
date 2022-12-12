export let paginaNumero = 1;
import { cantidadPaginasPokemons } from "../Cambio de pagina/Logica de paginacion/CreoPokedex.js";
import { controlPaginasPokedex } from "../Cambio de pagina/CambioPaginaPokedex.js";
export function irAPagina() {
  let paginas = document.querySelector("#selectorPagina");
  console.log(Number(paginas.value));
  controlPaginasPokedex(
    "https://pokeapi.co/api/v2/pokemon?offset=" +
      20 * Number(paginas.value - 1) +
      "&limit=20"
  );
  paginaNumero = Number(paginas.value);
  if (Number(paginas.value) === cantidadPaginasPokemons) {
    document.querySelector("#botonSiguiente").hidden = true;
  } else {
    document.querySelector("#botonSiguiente").hidden = false;
  }
  if (Number(paginas.value) > 1) {
    document.querySelector("#botonAnterior").hidden = false;
  }
  if (Number(paginas.value) === 1) {
    document.querySelector("#botonAnterior").hidden = true;
  } else {
    document.querySelector("#botonAnterior").hidden = false;
  }
  if (Number(paginas.value) < cantidadPaginasPokemons) {
    document.querySelector("#botonSiguiente").hidden = false;
  }
}

export function numeroPagina(avanzaORetrocede) {
  let paginas = document.querySelector("#selectorPagina");

  if (!avanzaORetrocede && paginaNumero > 1) {
    paginaNumero -= 1;

    paginas.value = paginaNumero;
  } else {
    paginaNumero += 1;

    paginas.value = paginaNumero;
  }
}
//preguntar sobre  exportar y modificar variable global
