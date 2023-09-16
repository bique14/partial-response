const chai = require("chai");
const expect = chai.expect;
const filterObjectByFields = require("../src/lib/partialResponse");

describe("Filter Object by Fields", () => {
  it("should return the original object when fields are empty", () => {
    const obj = { name: "big", age: 25, colors: "red" };
    const expectedResult = { name: "big", age: 25, colors: "red" };
    const fields = "";

    const result = filterObjectByFields(obj, fields);
    expect(result).to.deep.equal(expectedResult);
  });

  it('should return the original object when fields are "*"', () => {
    const obj = { name: "big", age: 25, colors: "red" };
    const expectedResult = { name: "big", age: 25, colors: "red" };
    const fields = "*";

    const result = filterObjectByFields(obj, fields);
    expect(result).to.deep.equal(expectedResult);
  });

  it("should filter object fields when fields are specified 1", () => {
    const obj = { name: "big", age: 25, colors: "red" };
    const expectedResult = { name: "big", age: 25 };
    const fields = "name,age";

    const result = filterObjectByFields(obj, fields);
    expect(result).to.deep.equal(expectedResult);
  });

  it("should filter object fields when fields are specified 2", () => {
    const obj = { name: "big", age: 25, colors: "red", pets: ["dog"] };
    const expectedResult = { name: "big", colors: "red", pets: ["dog"] };
    const fields = "name,colors,pets";

    const result = filterObjectByFields(obj, fields);
    expect(result).to.deep.equal(expectedResult);
  });

  it("should filter object fields when fields are array of object", () => {
    const obj = [
      { name: "karina", age: 23, symbol: "❤" },
      { name: "winter", age: 22, symbol: "⭐" },
      { name: "giselle", age: 22, symbol: " 🌙" },
      { name: "ningning", age: 20, symbol: "🦋" },
    ];
    const expectedResult = [
      { name: "karina", symbol: "❤" },
      { name: "winter", symbol: "⭐" },
      { name: "giselle", symbol: " 🌙" },
      { name: "ningning", symbol: "🦋" },
    ];
    const fields = "name,symbol";

    const result = filterObjectByFields(obj, fields);
    expect(result).to.deep.equal(expectedResult);
  });
});
