export function crearPaginasDePokemons(cantidadDePaginas) {
  let paginas = document.querySelector("#selectorPagina");
  for (let i = 0; i < cantidadDePaginas; i++) {
    let option = document.createElement("option");
    let id = document.createAttribute("id");
    id.value = i + 1;
    option.innerText = i + 1;
    option.setAttributeNode(id);
    paginas.appendChild(option);
  }
}
