export let paginaNumero = 1;
import { cantidadPaginasPokemons } from "../../ui/ui-de-la-pokedex.js";
import { obtengoPaginaDeLaPokedex } from "../cambio-pagina-pokedex.js";
import { selectorPagina } from "../../api/guardo-datos-api.js";
import { limiteSelector } from "../../api/guardo-datos-api.js";

export function irAPagina() {
  //yase, le puedo pasar el valor de la pagina y ya
  let paginas = document.querySelector("#selectorPagina");
  console.log(Number(paginas.value));
  obtengoPaginaDeLaPokedex(
    selectorPagina + 20 * Number(paginas.value - 1) + limiteSelector
  );
  //este de arriba solo va en services, el resto, va a fuera

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
//tengo que modificar lo de arriba
export function irAPagina2(numeroDePagina) {
  console.log(Number(numeroDePagina.value));
  obtengoPaginaDeLaPokedex(
    selectorPagina + 20 * Number(numeroDePagina.value - 1) + limiteSelector
  );
}
function controloIrAPagina() {
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
