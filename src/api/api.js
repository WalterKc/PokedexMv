export let arrayPokemons = [];
export let arrayDatos = [];
export let todosLosDatos = [];
export let siguienteLista = "";
export let listaAnterior = "";
export let primeraDireccion = "https://pokeapi.co/api/v2/pokemon";
export let selectorPagina = "https://pokeapi.co/api/v2/pokemon?offset=";
export let limiteSelector = "&limit=20";
/// tengo una idea, vamos a juntar estos 2
export async function obtenerDatosDeLaApi(direccion) {
  let api = (await fetch(direccion)).json();
  return api;
}

export async function cargarPokemones(offset = 0, limite = LIMITE_POKEMONES) {
  return (await fetch(`${BASE_URL}?offset=${offset}&limit=${limite}`)).json();
}

export async function EnviarUrlNueva(numeroDePagina) {
  let urlPagina = await obtenerDatosDeLaApi(
    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
  );
  console.log("LISTO?");
  return urlPagina;
}
export async function EnviarUrlNueva2(numeroDePagina) {
  //guarda con llamar directamente a las cosas
  let urlPagina =
    selectorPagina + 20 * Number(numeroDePagina - 1) + limiteSelector;
  console.log("LISTO?");

  return urlPagina;
}

export async function obtenerPokemonSelecionado(pokemonSelecionado) {
  let pokemon = await obtenerDatosDeLaApi(
    primeraDireccion + "/" + pokemonSelecionado + "/"
  );
  return pokemon;
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
