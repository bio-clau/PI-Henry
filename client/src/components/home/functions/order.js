exports.orderPoke = function (e, pokemonFiltered, pokemonList) {
  let newState = {};
  let auxPoke = [...pokemonFiltered];
  switch (e.target.value) {
    case "RESET":
      auxPoke = [...pokemonList];
      newState.newState = {
        order: "NO ORDER",
        sort: [],
        show: "ALL",
        typesRender: "ALL",
        pag: 1,
        iOfLast: 12,
        iOfFirst: 0,
      };
      newState.list = auxPoke;
      break;
    case "0 -> 999":
      auxPoke.sort(function (a, b) {
        return a.strength - b.strength;
      });
      newState.newState = {
        order: "0 -> 999",
        pag: 1,
        iOfLast: 12,
        iOfFirst: 0,
      };
      newState.list = auxPoke;
      break;
    case "999 -> 0":
      auxPoke.sort(function (a, b) {
        return b.strength - a.strength;
      });
      newState.newState = {
        order: "999 -> 0",
        pag: 1,
        iOfLast: 12,
        iOfFirst: 0,
      };
      newState.list = auxPoke;
      break;
    case "A -> Z":
      auxPoke.sort(function (a, b) {
        return a.name < b.name ? -1 : a.name > b.name ? 1 : 0;
      });
      newState.newState = {
        order: "A -> Z",
        pag: 1,
        iOfLast: 12,
        iOfFirst: 0,
      };
      newState.list = auxPoke;
      break;
    case "Z -> A":
      auxPoke.sort(function (a, b) {
        return b.name < a.name ? -1 : b.name > a.name ? 1 : 0;
      });
      newState.newState = {
        order: "Z -> A",
        pag: 1,
        iOfLast: 12,
        iOfFirst: 0,
      };
      newState.list = auxPoke;
      break;
    default:
      break;
  }
  return newState;
};
