export let paginaNumero = 1;

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
