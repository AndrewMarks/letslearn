const letsLearn = require("../src/letsLearn");

test("returns a the string 'let's learn!'", () => {
  expect(letsLearn.greeting()).toEqual("let's learn!");
});
