export let arrayPokemons = [];
export let arrayDatos = [];
export let todosLosDatos = [];
export let siguienteLista = "";
export let listaAnterior = "";
export let primeraDireccion = "https://pokeapi.co/api/v2/pokemon";
export let selectorPagina = "https://pokeapi.co/api/v2/pokemon?offset=";
export let limiteSelector = "&limit=20";
export async function obtenerDatosDeLaApi(direccion) {
  let api = (await fetch(direccion)).json();

  return api;
}

export async function guardarDatosApi(api) {
  arrayPokemons = [];
  arrayDatos = [];
  todosLosDatos = [];
  for (let i = 0; i < 20; i++) {
    arrayPokemons.push(api.results[i].name);
    arrayDatos.push(api.results[i]);
  }
  siguienteLista = api.next;
  listaAnterior = api.previous;
  await obtenerTodosLosDatosDeLosPokemonsAMostrar(arrayDatos);
}

async function obtenerTodosLosDatosDeLosPokemonsAMostrar(arrayPokemonsDatos) {
  for (let i = 0; i < arrayPokemonsDatos.length; i++) {
    await fetch(arrayPokemonsDatos[i].url)
      .then((respuesta) => respuesta.json())

      .then((respuesta) => {
        todosLosDatos.push(respuesta);
      });
  }
}
