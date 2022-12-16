let arrayPokemons = document.querySelectorAll("#pokemon");
describe("empty spec", () => {
  it("passes", () => {
    cy.visit("http://192.168.0.2:8080");
    cy.get("#selectorPagina").select("2");
    cy.wait(1000);
    cy.get("#irAPagina").click();
    cy.get("#fila #pokemon").contains("spearow");
    cy.get("#fila #pokemon").first().click();
    cy.wait(1000);
    cy.get("#contendenorPokemones").should("have.attr", "hidden");
    cy.get("#controlarVisibilidadBotonVolver").click();
    cy.wait(1000);
    cy.get("#pokemonSelecionado").should("have.attr", "hidden");
    cy.get("#botonAnterior").click().should("have.attr", "hidden");
    cy.wait(1000);
    cy.get("#botonSiguiente").click();
    cy.wait(1000);
    cy.get("#selectorPagina").select("57");
    cy.get("#irAPagina").click();
    cy.wait(1000);
    cy.get("#botonSiguiente").should("have.attr", "hidden");
  });
});
