import {
  contendenorPokemones,
  siguienteLista,
  listaAnterior,
  llamarPokemones,
} from "./Fetch principal.js";

let paginaNumero = 1;
function informacionDePokemon(pokemonSelecionado) {
  fetch("https://pokeapi.co/api/v2/pokemon/" + pokemonSelecionado + "/")
    .then((respuesta) => respuesta.json())
    .then((respuesta) => {
      contendenorPokemones.hidden = true;
      document.querySelector("#pokemonSelecionado").hidden = false;
      document.querySelector("#nombrePoke").innerText = respuesta.name;
      document.querySelector("#imagenSelecionada").src =
        respuesta.sprites.front_default;
      document.querySelector("#botonAnterior").hidden = true;
      document.querySelector("#botonSiguiente").hidden = true;
      document.querySelector("#botonVolver").hidden = false;

      if (respuesta.types.length > 1) {
        document.querySelector("#tipo").innerText =
          respuesta.types[0].type.name + "/" + respuesta.types[1].type.name;
      } else {
        document.querySelector("#tipo").innerText =
          respuesta.types[0].type.name;
      }

      document.querySelector("#habilidad").innerText =
        respuesta.abilities[0].ability.name +
        "/" +
        respuesta.abilities[1].ability.name;
      document.querySelector("#pesoPoke").innerText =
        respuesta.weight / 10 + " Kg";
      document.querySelector("#alturaPoke").innerText =
        respuesta.height / 10 + " Mts";
    })
    .catch((error) => console.error("fallo", error));
}

function seleccionarPokemon(event) {
  let valorAEnviar = "";

  if (event.target.innerText === "") {
    console.log(event.target.parentElement.innerText);
    valorAEnviar = event.target.parentElement.innerText;
  } else {
    console.log(event.target.innerText);
    valorAEnviar = event.target.innerText;
  }
  informacionDePokemon(valorAEnviar);
}

function botonVolver() {
  contendenorPokemones.hidden = false;
  document.querySelector("#pokemonSelecionado").hidden = true;

  document.querySelector("#botonAnterior").hidden = false;
  document.querySelector("#botonSiguiente").hidden = false;
  document.querySelector("#botonVolver").hidden = true;
}
document.querySelector("#botonVolver").onclick = botonVolver;
//QUEDO INUTIL ESTE
function direccion(direccion) {
  llamarPokemones(direccion);
}
function botonSiguientePagina() {
  llamarPokemones(siguienteLista);
  numeroPagina(true);
}
function botonAnteriorPagina() {
  llamarPokemones(listaAnterior);
  numeroPagina(false);
}
document.querySelector("#botonSiguiente").onclick = botonSiguientePagina;
document.querySelector("#botonAnterior").onclick = botonAnteriorPagina;
function numeroPagina(avanzaORetrocede) {
  let paginas = document.querySelector("#selectorPagina");

  if (!avanzaORetrocede && paginaNumero > 1) {
    paginaNumero -= 1;

    paginas.value = paginaNumero;
  } else {
    paginaNumero += 1;

    paginas.value = paginaNumero;
  }
}

//document.querySelector("#botonSiguiente").onclick = numeroPagina(false);
//document.querySelector("#botonAnterior").onclick = numeroPagina(true);

function irAPagina() {
  let paginas = document.querySelector("#selectorPagina");
  console.log(Number(paginas.value));
  llamarPokemones(
    "https://pokeapi.co/api/v2/pokemon?offset=" +
      20 * Number(paginas.value - 1) +
      "&limit=20"
  );
  paginaNumero = Number(paginas.value);
}
document.querySelector("#irAPagina").onclick = irAPagina;

contendenorPokemones.onclick = seleccionarPokemon;
