export function ordenarPokemones(filasOrdenadas) {
  let listaPokemonesActivos = document.querySelectorAll(
    "#contendenorPokemones #pokemon"
  );
  let contador = 0;
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
