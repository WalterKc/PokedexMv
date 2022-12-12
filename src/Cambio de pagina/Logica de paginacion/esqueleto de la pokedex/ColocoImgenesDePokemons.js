export async function colocarImagenesDeLosPokemons(listaDeDatosDePokemones) {
  let listaPokemonesActivos = document.querySelectorAll(
    "#contendenorPokemones #pokemon"
  );
  for (let i = 0; i < listaDeDatosDePokemones.length; i++) {
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
