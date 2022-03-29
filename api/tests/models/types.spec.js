const { Types, conn } = require("../../src/db.js");
const { expect } = require("chai");

describe("Type Model", () => {
  before(() =>
    conn.authenticate().catch((err) => {
      console.error("Unable to connect to the database:", err);
    })
  );
  describe("Validations", () => {
    beforeEach(() => Types.sync({ force: true }));
    describe("Pokemon Types", () => {
      it("should trow an arror if type is null", () => {
        Types.create({})
          .then(() => done(new Error("Requires a valid type")))
          .catch(() => done());
      });
      it("should wor if is a valid type", () => {
        Types.create({ name: "Henry" });
      });
    });
  });
});
