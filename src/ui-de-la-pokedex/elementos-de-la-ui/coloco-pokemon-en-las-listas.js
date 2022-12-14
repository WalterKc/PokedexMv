export async function colocoPokemonEnLaLista(Nombres) {
  let listaPokemonesActivos = document.querySelectorAll(
    "#contendenorPokemones #pokemon"
  );
  for (let i = 0; i < Nombres.length; i++) {
    listaPokemonesActivos[i].innerText = Nombres[i].name;
  }
}
