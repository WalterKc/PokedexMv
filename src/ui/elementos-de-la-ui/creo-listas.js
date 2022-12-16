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
export function crearLista(listaAReplicar, vecesAReplicar) {
  for (let i = 0; i < vecesAReplicar.length; i++) {
    crearElementosDeLaLista(listaAReplicar);
  }
}
