exports.sortPoke = function (
  value,
  pokemonList,
  pokemonFiltered,
  sort,
  typesRender
) {
  let response = {};
  if (value === "RESET") {
    response.newAuxRender = "ALL";
    response.newAuxSort = [];
    response.newAuxPokeFilter = [...pokemonList];
  } else {
    response.newAuxSort = [...sort];
    response.newAuxRender =
      typesRender === "ALL" ? `${value}` : `${typesRender} ${value}`;
    response.newAuxSort.push(value);
    response.newAuxPokeFilter = pokemonFiltered.filter((p) =>
      p.types.includes(value.toLowerCase())
    );
  }
  return response;
};
