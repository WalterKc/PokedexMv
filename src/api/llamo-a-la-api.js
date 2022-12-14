export async function obtengoDatosDeLaApi(direccion) {
  let api = (await fetch(direccion)).json();

  return api;
}
