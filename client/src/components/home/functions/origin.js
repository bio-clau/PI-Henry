exports.sortOrigin = function (value, pokemonFiltered, pokemonList) {
  const response = {};
  console.log("in sortorigin");
  if (value === "CREATED") {
    console.log("sortOrigin created");
    response.list = pokemonFiltered.filter((p) =>
      /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(
        p.id
      )
    );
  } else if (value === "ORIGINALS") {
    console.log("sortOrigin originals");
    response.list = pokemonFiltered.filter(
      (p) =>
        !/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(
          p.id
        )
    );
    console.log(response.list);
  } else if (value === "RESET") {
    console.log("sortOrigin reset");
    response.list = [...pokemonList];
  }
  response.newState = {
    show: value,
    pag: 1,
    iOfLast: 12,
    iOfFirst: 0,
  };
  return response;
};
