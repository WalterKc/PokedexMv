let arrayPokemons = [];
let arrayDatos = [];
let todosLosDatos = [];
let contendenorPokemones = document.querySelector("#contendenorPokemones");
let filas = document.querySelectorAll("#fila");
let cantidadPaginasPokemons = 0;
let paginaNumero = 1;
let primeraDireccion = "https://pokeapi.co/api/v2/pokemon";
let siguienteLista = "";
let listaAnterior = "";
let estaLaPrimeraListaCreada = false;

function llamarPokemones(direccion) {
  fetch(direccion)
    .then((respuesta) => respuesta.json())
    .then((respuesta) => {
      arrayPokemons = [];
      arrayDatos = [];
      todosLosDatos = [];

      for (let i = 0; i < 20; i++) {
        arrayPokemons.push(respuesta.results[i].name);
        arrayDatos.push(respuesta.results[i]);
      }
      if (!estaLaPrimeraListaCreada) {
        crearLista(contendenorPokemones, respuesta.results);
        colocarPokemonEnLaLista(respuesta.results);
        cantidadPaginasPokemons = Math.floor(respuesta.count / 20);
        crearPaginasDePokemons(cantidadPaginasPokemons);

        estaLaPrimeraListaCreada = true;
      } else {
        colocarPokemonEnLaLista(respuesta.results);
        document.querySelector("#botonAnterior").hidden = false;
      }
      siguienteLista = respuesta.next;
      listaAnterior = respuesta.previous;
      if (listaAnterior === null && estaLaPrimeraListaCreada) {
        document.querySelector("#botonAnterior").hidden = true;
      }
      if (
        siguienteLista ===
          "https://pokeapi.co/api/v2/pokemon?offset=1140&limit=14" &&
        estaLaPrimeraListaCreada
      ) {
        document.querySelector("#botonSiguiente").hidden = true;
      } else {
        document.querySelector("#botonSiguiente").hidden = false;
      }
      ordenarPokemones(filas);

      obtenerTodosLosDatosDeLosPokemonsAMostrar(arrayDatos);
    })

    .catch((error) => console.error("fallo", error));
}
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
function crearPaginasDePokemons(cantidadDePaginas) {
  let paginas = document.querySelector("#selectorPagina");
  for (let i = 0; i < cantidadDePaginas; i++) {
    let option = document.createElement("option");
    let id = document.createAttribute("id");
    id.value = i + 1;
    option.innerText = i + 1;
    option.setAttributeNode(id);
    paginas.appendChild(option);
    console.log(i);
  }
}

async function obtenerTodosLosDatosDeLosPokemonsAMostrar(arrayPokemonsDatos) {
  for (let i = 0; i < arrayPokemonsDatos.length; i++) {
    await fetch(arrayPokemonsDatos[i].url)
      .then(async (respuesta) => respuesta.json())

      .then((respuesta) => {
        todosLosDatos.push(respuesta);
      });
  }
  colocarImagenesDeLosPokemons(todosLosDatos);
}

function crearLista(listaAReplicar, vecesAReplicar) {
  for (let i = 0; i < vecesAReplicar.length; i++) {
    crearElementosDeLaLista(listaAReplicar);
  }
}
function colocarPokemonEnLaLista(Nombres) {
  let listaPokemonesActivos = document.querySelectorAll(
    "#contendenorPokemones #pokemon"
  );
  for (let i = 0; i < Nombres.length; i++) {
    listaPokemonesActivos[i].innerText = Nombres[i].name;
  }
}
function crearElementosDeLaLista(elementoPadre) {
  let div = document.createElement("div");
  let id = document.createAttribute("id");
  let clase = document.createAttribute("class");
  clase.value = "col";
  id.value = "pokemon";
  div.setAttributeNode(id);
  div.setAttributeNode(clase);
  elementoPadre.appendChild(div);
}
function colocarImagenesDeLosPokemons(listaDeDatosDePokemones) {
  let listaPokemonesActivos = document.querySelectorAll(
    "#contendenorPokemones #pokemon"
  );
  for (i = 0; i < listaDeDatosDePokemones.length; i++) {
    let img = document.createElement("img");
    let id = document.createAttribute("id");
    id.value = "imagenPokemon";
    let src = document.createAttribute("src");
    src.value = listaDeDatosDePokemones[i].sprites.front_default;
    img.setAttributeNode(id);
    img.setAttributeNode(src);
    listaPokemonesActivos[i].appendChild(img);
  }
}
function ordenarPokemones(filasOrdenadas) {
  let listaPokemonesActivos = document.querySelectorAll(
    "#contendenorPokemones #pokemon"
  );
  contador = 0;
  for (let ia = 0; ia < filasOrdenadas.length; ia++) {
    for (let ib = 0; ib < 4; ib++) {
      filasOrdenadas[ia].appendChild(listaPokemonesActivos[ib + contador]);

      if (ib === 3) {
        contador += ib;
      }
    }
    contador += 1;
  }
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
function direccion(direccion) {
  llamarPokemones(direccion);
}
function botonVolver() {
  contendenorPokemones.hidden = false;
  document.querySelector("#pokemonSelecionado").hidden = true;

  document.querySelector("#botonAnterior").hidden = false;
  document.querySelector("#botonSiguiente").hidden = false;
  document.querySelector("#botonVolver").hidden = true;
}
function numeroPagina(avanzaORetrocede) {
  let paginas = document.querySelector("#selectorPagina");
  if (!avanzaORetrocede && paginaNumero > 1) {
    paginaNumero -= 1;
    if (paginas.value !== "Seleciona Pagina") {
      paginas.value = paginaNumero;
    }
  } else {
    paginaNumero += 1;
    if (paginas.value !== "Seleciona Pagina") {
      paginas.value = paginaNumero;
    }
  }
}
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
contendenorPokemones.onclick = seleccionarPokemon;

llamarPokemones(primeraDireccion);
