import React from "react";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import { configure, mount } from "enzyme";
import Adapter from "@wojtekmaj/enzyme-adapter-react-17";

import * as data from "./data.json";

import App from "../App";
import Nav from "../components/nav";
import Footer from "../components/footer";
import Init from "../components/init";

configure({ adapter: new Adapter() });

describe("<App />", () => {
  let store;
  const routes = ["/", "/about", "/create"];
  const mockStore = configureStore([thunk]);
  const state = {
    pokeDetail: data.pokemonDetail,
  };

  beforeEach(() => {
    store = mockStore(state);
  });

  const componentToUse = (route) => {
    return (
      <Provider store={store}>
        <MemoryRouter initialEntries={[route]}>
          <App />
        </MemoryRouter>
      </Provider>
    );
  };

  describe("The Nav component must render in every route", () => {
    it('must be render in the route "/"', () => {
      const app = mount(componentToUse(routes[0]));
      expect(app.find(Nav)).toHaveLength(1);
    });
    it('must be render in the route "/about"', () => {
      const app = mount(componentToUse(routes[1]));
      expect(app.find(Nav)).toHaveLength(1);
    });
  });
  describe("The Footer component must render in every route", () => {
    it('must be render in the route "/"', () => {
      const app = mount(componentToUse(routes[0]));
      expect(app.find(Footer)).toHaveLength(1);
    });
    it('must be render in the route "/about"', () => {
      const app = mount(componentToUse(routes[1]));
      expect(app.find(Footer)).toHaveLength(1);
    });
  });
  describe('Init component must only render in "/"', () => {
    it('must render in the route "/"', () => {
      const app = mount(componentToUse(routes[0]));
      expect(app.find(Init)).toHaveLength(1);
    });
    it('must not render in the route "/about"', () => {
      const app = mount(componentToUse(routes[1]));
      expect(app.find(Init)).toHaveLength(0);
    });
  });
});
