//este import de la ui, esta mal
import { controlarPaginaNumero } from "../ui/ui.js";
import { listaAnterior, siguienteLista } from "../api/api.js";
import { selectorPagina } from "../api/api.js";
import { limiteSelector } from "../api/api.js";
import { obtenerDatosDeLaApi } from "../api/api.js";
import { primeraDireccion } from "../api/api.js";
import { guardarDatosApi } from "../api/api.js";
//este import de la ui, tambien esta mal, TIENE QUE EXISTIR 0 IMPORTS DE LA UI ,0(CERO)
import { crearLaUiDeLaPokedex } from "../ui/ui.js";
/**
 * ok ahora tengo que arreglar esto otra vez.........
 * aca vamos a poner lo que se tenga que hacer, otra vez......
 * OK, mis nombres ya estan en imperativo, pero hay que cambiarlos, pero como es algo que se puede hacer facil
 * se va a dejar para el final
 * ok, los servicios , no pueden importar nada de la ui, pero si le podes "pasar" parametros,
 * hay esta la clave
 * primero, vamos cambiar esto , de la siguiente manera, vamos a hacerlo, primero unipagina,
 * solo cargemos la primera pagina, y nada mas,olvidate de que se puede cambiar de pagina, y selecionar un poke
 * ahora , vamos a arreglar lo de selecionar un poke, LISTO
 * ahora , vamos a arreglar lo de del cambio de pagina, este hay que cambiar, y mucho LISTO
 * ahora vamos a arreglar la el selecotor de paginas
 */

//este, hay que cambiarlo
//Mmmmm, puedo sacar directamente los sigiente y anterior ahora..... como lo cambio?

export function cambiarPaginaSiguienteAnterior(selector) {
  if (selector) {
    obtenerPaginaDeLaPokedex(siguienteLista);

    //controlarPaginaNumero(true);
  } else {
    obtenerPaginaDeLaPokedex(listaAnterior);
    //controlarPaginaNumero(false);
  }
}
//este, tambien
//este se ve mas facil, vamos a cambiar este primero
export function irAPagina(numeroDePagina) {
  console.log(Number(numeroDePagina));
  obtenerPaginaDeLaPokedex(
    selectorPagina + 20 * Number(numeroDePagina - 1) + limiteSelector
  );
}
//este esta casi bien creo, hay que ver como lo modifico
//yase, vamos a separala un poco, asi
/*
export async function cargarPokemones(offset = 0, limite = LIMITE_POKEMONES) {
  return (await fetch(`${BASE_URL}?offset=${offset}&limit=${limite}`)).json();
}
*/
//algo como el de aca arriba, va en la api, y , como se puede ver, yo lo tengo aca, hay que separarlo
export async function obtenerDatosDelPokemonSelecionado(pokemonSelecionado) {
  let pokemonActual = await obtenerDatosDeLaApi(
    primeraDireccion + "/" + pokemonSelecionado + "/"
  );
  return pokemonActual;
}

//ESTE DE ABAJO SE TIENE QUE CAMBIAR  ////////LISTO/////
export async function obtenerPaginaDeLaPokedex(direccion) {
  await guardarDatosApi(await obtenerDatosDeLaApi(direccion));
  //este el de abajo esta mal
  await crearLaUiDeLaPokedex(await obtenerDatosDeLaApi(direccion));
}

//////////////////////////////////////////////////////////////////////////////////////////////
/**
 * TESTS
 */
export async function entregarDatosDeLaApi(direccion) {
  await guardarDatosApi(await obtenerDatosDeLaApi(direccion));
  let datosApi = await obtenerDatosDeLaApi(direccion);
  console.log(datosApi);
  return datosApi;
}
import { todosLosDatos } from "../api/api.js";
export async function entregarDatosDeLaPagina() {
  return todosLosDatos;
}
import { obtenerPokemonSelecionado } from "../api/api.js";
export async function obtenerPokemonSelecionadoV2(pokemon) {
  let pokemonDatos = obtenerPokemonSelecionado(pokemon);
  return pokemonDatos;
}
import { EnviarUrlNueva2 } from "../api/api.js";
export function irAPaginaV2(numeroDePagina) {
  console.log(Number(numeroDePagina));
  let nuevaUrl = EnviarUrlNueva2(numeroDePagina);
  //return entregarDatosDeLaApi(nuevaUrl);
  return nuevaUrl;
}
export function cambiarPaginaSiguienteAnterior2(selector) {
  if (selector) {
    return siguienteLista;

    //controlarPaginaNumero(true);
  } else {
    return listaAnterior;
    //controlarPaginaNumero(false);
  }
}
/*
export async function obtenerPaginaDeLaPokedex(direccion) {
  let datos=await crearLaUiDeLaPokedex(await obtenerDatosDeLaApi(direccion)) 
  return datos
}
function hacerAlgoConLosDatos(){
  obtenerPaginaDeLaPokedex()
  //hacer algo
}
document.querySelector("algo").onclick=hacerAlgoConLosDatos
*/
