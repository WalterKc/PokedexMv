export async function traerDatosDeLaApis(direccion) {
  let api = (await fetch(direccion)).json();

  return api;
}
