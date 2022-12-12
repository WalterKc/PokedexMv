import { contendenorPokemones } from "../Cambio de pagina/Logica de paginacion/CreoPokedex.js";
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
export function seleccionarPokemon(event) {
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
