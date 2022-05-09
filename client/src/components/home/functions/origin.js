function sortOrigin (value, pokemonFiltered, pokemonList) {
  const response = {};
  if (value === "CREATED") {
    response.list = pokemonList.filter((p) =>
      /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(
        p.id
      )
    );
    response.newState = {
      order:'NO ORDER',
      show: value,
      pag: 1,
      iOfLast: 12,
      iOfFirst: 0,
    };
  } else if (value === "ORIGINALS") {
    response.list = pokemonList.filter(
      (p) =>
        !/^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i.test(
          p.id
        )
    );
    response.newState = {
      order:'NO ORDER',
      show: value,
      pag: 1,
      iOfLast: 12,
      iOfFirst: 0,
    };
  } else if (value === "RESET") {
    response.list = [...pokemonList];
    response.newState = {
      show: value,
      order: "NO ORDER",
      sort: [],
      typesRender: "ALL",
      pag: 1,
      iOfLast: 12,
      iOfFirst: 0,
    };
  }
  return response;
};
export default sortOrigin