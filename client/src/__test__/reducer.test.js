import rootReducer from "../reducers/reducer";
import { GET_DETAIL, GET_TYPES } from "../actions/const";
import * as data from "./data.json";

describe("Reducer", () => {
  const state = {
    pokemonDetail: {},
    pokemonTypes: [],
  };
  it("Shoul save in state pokemon detail when action type is GET_DETAIL", () => {
    const result = rootReducer(state, {
      type: GET_DETAIL,
      payload: data.pokemonDetail,
    });
    expect(result).not.toEqual(state);
    expect(result).toEqual({
      pokemonDetail: data.pokemonDetail,
      pokemonTypes: [],
    });
  });
  it("Should save in state pokemon types when action type in GET_TYPES", () => {
    const result = rootReducer(state, {
      type: GET_TYPES,
      payload: data.pokemonTypes,
    });
    expect(result).toEqual({
      pokemonDetail: {},
      pokemonTypes: data.pokemonTypes,
    });
  });
});
