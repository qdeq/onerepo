const {add, subtract} = require('../index');

describe("add function", () => {
  test("it should add the numbers", () => {
    expect(add(2, 3)).toEqual(5);
  });
});

describe("subtract function", () => {
  test("it should subtract the numbers", () => {
    expect(subtract(2, 3)).toEqual(-1);
  });
});