import React from "react";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import { MemoryRouter } from "react-router-dom";
import thunk from "redux-thunk";

import Create from "../components/pokemon/create";

configure({ adapter: new Adapter() });

describe("<Create/>", () => {
  const state = {
    name: "",
    health: "",
    strength: "",
    defense: "",
    velocity: "",
    height: "",
    weight: "",
    types: [],
    image: "",
    selectedImage: "",
    errors: { disSend: true },
  };
  const mockStore = configureStore([thunk]);

  // beforeAll(() => expect(isReact.classComponent(Create)).toBeTruthy());

  describe("structure", () => {
    let create;
    let store = mockStore(state);

    beforeEach(() => {
      create = mount(
        <Provider store={store}>
          <MemoryRouter initialEntries={["/create"]}>
            <Create />
          </MemoryRouter>
        </Provider>
      );
    });
    it("should render a form", () => {
      expect(create.find("form")).toHaveLength(1);
    });
    it('should render a laber named "*Pokémon Name: "', () => {
      expect(create.find("label").at(0).text()).toEqual("*Pokémon Name: ");
    });
    it('should render an input with property "name"', () => {
      expect(create.find('input[name="name"]')).toHaveLength(1);
    });
    it('should render a laber named "*Pokémon Health: "', () => {
      expect(create.find("label").at(1).text()).toEqual("*Pokémon Health: ");
    });
    it('should render an input with property "health"', () => {
      expect(create.find('input[name="health"]')).toHaveLength(1);
    });
    it('should render a laber named "*Pokémon Strength: "', () => {
      expect(create.find("label").at(2).text()).toEqual("*Pokémon Strength: ");
    });
    it('should render an input with property "strength"', () => {
      expect(create.find('input[name="strength"]')).toHaveLength(1);
    });
  });
});
