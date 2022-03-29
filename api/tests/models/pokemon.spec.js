const { Pokemon, conn } = require("../../src/db.js");
const { expect } = require("chai");
const { v4: uuidv4 } = require("uuid");

describe("Pokemon model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validators", () => {
    beforeEach(() => Pokemon.sync({ force: true }));
    describe("Pokemon name", () => {
      it("should throw an error if name is null", (done) => {
        Pokemon.create({})
          .then(() => done(new Error("It requires a valid name")))
          .catch(() => done());
      });
      it("should work when its a valid name", () => {
        Pokemon.create({
          name: "PokeClau",
          id: uuidv4(),
        });
      });
    });
    describe("Pokemon strength", () => {
      it("should throw error if strength is not a number", () => {
        Pokemon.create({
          name: "PokeHenry",
          id: uuidv4(),
          strength: "High",
        })
          .then(() => done(new Error("Strength must be a number")))
          .catch(() => done());
      });
      it("should work when strength is a number", () => {
        Pokemon.create({
          name: "PokeHenry",
          id: uuidv4(),
          strength: 99,
        });
      });
    });
  });
});
