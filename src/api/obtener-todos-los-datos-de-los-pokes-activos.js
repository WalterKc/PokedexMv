import { todosLosDatos } from "./guardo-datos-api.js";
export async function obtenerTodosLosDatosDeLosPokemonsAMostrar(
  arrayPokemonsDatos
) {
  for (let i = 0; i < arrayPokemonsDatos.length; i++) {
    await fetch(arrayPokemonsDatos[i].url)
      .then((respuesta) => respuesta.json())

      .then((respuesta) => {
        todosLosDatos.push(respuesta);
      });
  }
}
