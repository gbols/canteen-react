import * as heplers from "../../src/helpers/helpers";

describe("Helpers Test", () => {
  it("should return a date", () => {
    const date = heplers.dateParser(1549625642557);
    expect(date).toBe("8-2-2019");
  });
});
