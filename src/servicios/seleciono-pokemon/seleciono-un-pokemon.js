import { contendenorPokemones } from "../../ui/ui-de-la-pokedex.js";
import { obtengoDatosDeLaApi } from "../../api/llamo-a-la-api.js";
import { primeraDireccion } from "../../api/guardo-datos-api.js";

export function seleccionoPokemon(event) {
  let valorAEnviar = "";

  if (event.target.innerText === "") {
    console.log(event.target.parentElement.innerText);
    valorAEnviar = event.target.parentElement.innerText;
  } else {
    console.log(event.target.innerText);
    valorAEnviar = event.target.innerText;
  }

  obtengoDatosDelPokemonSelecionado(valorAEnviar);
}
async function obtengoDatosDelPokemonSelecionado(pokemonSelecionado) {
  let pokemonActual = await obtengoDatosDeLaApi(
    primeraDireccion + "/" + pokemonSelecionado + "/"
  );
  contendenorPokemones.hidden = true;

  document.querySelector("#pokemonSelecionado").hidden = false;
  document.querySelector("#nombrePoke").innerText = pokemonActual.name;
  document.querySelector("#imagenSelecionada").src =
    pokemonActual.sprites.front_default;
  document.querySelector("#botonAnterior").hidden = true;
  document.querySelector("#botonSiguiente").hidden = true;
  document.querySelector("#botonVolver").hidden = false;

  if (pokemonActual.types.length > 1) {
    document.querySelector("#tipo").innerText =
      pokemonActual.types[0].type.name + "/" + pokemonActual.types[1].type.name;
  } else {
    document.querySelector("#tipo").innerText =
      pokemonActual.types[0].type.name;
  }

  document.querySelector("#habilidad").innerText =
    pokemonActual.abilities[0].ability.name +
    "/" +
    pokemonActual.abilities[1].ability.name;
  document.querySelector("#pesoPoke").innerText =
    pokemonActual.weight / 10 + " Kg";
  document.querySelector("#alturaPoke").innerText =
    pokemonActual.height / 10 + " Mts";
}

//actualizacion de selecionar un pokemon
