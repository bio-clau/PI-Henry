import configureStore from "redux-mock-store";
import thunk from "redux-thunk";
import { pokeDetail, getTypes } from "../actions/actions";

describe("Actions", () => {
  const mockStore = configureStore([thunk]);
  const store = mockStore({ pokemonDetail: {} });

  beforeEach(() => store.clearActions());

  describe("getTypes", () => {
    it("shoul dispatch with type GET_TYPESE and details of pokemon in payload", () => {
      return store.dispatch(getTypes()).then(() => {
        const actions = store.getActions();
        expect(actions[0].type).toBe("GET_TYPES");
        expect(actions[0].payload.length).toBe(20);
      });
    });
  });
});
