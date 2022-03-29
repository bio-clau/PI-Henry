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
  describe("GET /type", () => {
    it("responds with 200", () => agent.get("/type").expect(200));
    it("responds with an array of types", () => {
      agent.get("/type").then((res) => {
        expect(res.body.length).toBe(20);
      });
    });
  });
});
