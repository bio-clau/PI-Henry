/* eslint-disable import/no-extraneous-dependencies */
const { expect } = require("chai");
const session = require("supertest-session");
const app = require("../../src/app.js");
const { Pokemon, conn } = require("../../src/db.js");
const { v4: uuidv4 } = require("uuid");

const agent = session(app);
const pokemon = {
  id: uuidv4(),
  name: "PokeClau",
};

describe("Pokemon routes", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  beforeEach(() =>
    Pokemon.sync({ force: true }).then(() => Pokemon.create(pokemon))
  );
  describe("POST /pokemons", () => {
    it("responds with 500", () => agent.post("/pokemons").expect(500));
    it("responds with the pokemon created", () =>
      agent
        .post("/pokemons")
        .send({
          name: "pokeClau2",
          health: 30,
          strength: 40,
          defense: 50,
          velocity: 60,
          height: 70,
          weight: 80,
          types: ["rock", "bug", "ghost"],
        })
        .then((res) => {
          expect(res.body.name).equal("pokeClau2");
        }));
  });
  describe("GET /pokemons/:id", () => {
    it("responds with 200", () => agent.get("/pokemons/6").expect(200));
    it("responds with a pokemon", () => {
      agent.get("/pokemons/6").then((res) => {
        expect(res.body.name).lessThanOrEqual("charizard");
      });
    });
  });
});
