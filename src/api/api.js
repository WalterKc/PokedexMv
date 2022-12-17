export let nombresDePokemons = [];
export let arrayUrlPokemons = [];
export let arrayEstadisticasYSpritesPokemones = [];
export let urlPaginaSiguiente = "";
export let urlPaginaAnterior = "";
export let primeraDireccion = "https://pokeapi.co/api/v2/pokemon";
export let selectorPagina = "https://pokeapi.co/api/v2/pokemon?offset=";
export let limiteSelector = "&limit=20";
export async function obtenerDatosDeLaApi(direccion) {
  let api = (await fetch(direccion)).json();
  return api;
}

export async function EnviarUrlNueva(numeroDePagina) {
  let urlPagina =
    selectorPagina + 20 * Number(numeroDePagina - 1) + limiteSelector;

  return urlPagina;
}

export async function obtenerPokemon(pokemonSelecionado) {
  let pokemon = await obtenerDatosDeLaApi(
    primeraDireccion + "/" + pokemonSelecionado + "/"
  );
  return pokemon;
}

export async function guardarDatosApi(api) {
  nombresDePokemons = [];
  arrayUrlPokemons = [];
  arrayEstadisticasYSpritesPokemones = [];

  for (let i = 0; i < 20; i++) {
    nombresDePokemons.push(api.results[i].name);
    arrayUrlPokemons.push(api.results[i]);
  }
  urlPaginaSiguiente = api.next;
  urlPaginaAnterior = api.previous;
  await obtenerTodaInfoPokemon(arrayUrlPokemons);
}

async function obtenerTodaInfoPokemon(arrayPokemonsDatos) {
  for (let i = 0; i < arrayPokemonsDatos.length; i++) {
    await fetch(arrayPokemonsDatos[i].url)
      .then((respuesta) => respuesta.json())

      .then((respuesta) => {
        arrayEstadisticasYSpritesPokemones.push(respuesta);
      });
  }
}
