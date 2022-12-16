export async function obtenerDatosDeLaApi(direccion) {
  let api = (await fetch(direccion)).json();

  return api;
}
