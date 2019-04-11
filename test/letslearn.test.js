const letsLearn = require("../src/letsLearn");

test("returns a the string 'let's learn!'", () => {
  expect(letsLearn.greeting()).toEqual("let's learn!");
});

// New tests start here! First up, handling numbers:

test("returns the number 5", () => {
  expect(letsLearn.gimmeFive()).toEqual(5);
});

test("returns the number passed as argument", () => {
  expect(letsLearn.thinkOfANumber(3)).toEqual(3);
});

test("returns the sum of the arguments given", () => {
  expect(letsLearn.addMe(3, 5)).toEqual(8);
});

test("returns the first argument minus the second argument", () => {
  expect(letsLearn.subtractMe(5, 3)).toEqual(2);
});

test("returns the product of the arguments passed", () => {
  expect(letsLearn.multiplyMe(5, 3)).toEqual(15);
});

test("returns the first argument divided by the second argument", () => {
  expect(letsLearn.divideMe(15, 5)).toEqual(3);
});

// Let's introduce some booleans (trues and falses):

describe("returns whether two passed arguments are evenly divisible", () => {
  test("returns true when the first argument is evenly divisible by the second", () => {
    expect(letsLearn.isEvenlyDivisible(15, 3)).toBe(true);
  });

  test("returns false when the first argument is not evenly divisible by the second", () => {
    expect(letsLearn.isEvenlyDivisible(5, 3)).toBe(false);
  });
});

// While we're here, what do you think these 'describe' blocks are doing?
// my guess is that they are helping to contain multiple tests that are impacted by the same function? 
// Looks like it impacts the terminal log of these tests.

describe("returns whether two passed arguments are the same", () => {
  test("returns true if the two passed arguments are the same", () => {
    expect(letsLearn.areWeTwins(5, 5)).toBe(true);
  });

  test("returns true if the two passed arguments are the same", () => {
    expect(letsLearn.areWeTwins("hello", "hello")).toBe(true);
  });

  test("returns true if the two passed arguments are the same", () => {
    expect(letsLearn.areWeTwins(5, 4)).toBe(false);
  });

  test("returns true if the two passed arguments are the same", () => {
    expect(letsLearn.areWeTwins(5, "hello")).toBe(false);
  });
});

describe("switches the boolean polarity of the passed argument", () => {
  test("returns the opposite boolean value of that passed as an argument", () => {
    expect(letsLearn.switchMe(true)).toBe(false);
  });

  test("returns the opposite boolean value of that passed as an argument", () => {
    expect(letsLearn.switchMe(false)).toBe(true);
  });
});

// Some more complex stuff with strings:

test("returns the passed number and a string", () => {
  expect(letsLearn.writeDownThisNumber(8)).toEqual("8");
});

describe("returns 'my name is <the name passed>' as argument", () => {
  test("returns 'my name is andrew", () => {
    expect(letsLearn.hello("andrew")).toEqual("my name is andrew");
  });

  test("returns 'my name is suze", () => {
    expect(letsLearn.hello("suze")).toEqual("my name is suze");
  });
});

// Reader beware... this one is trickier

test("returns the greeting to the passed argument", () => {
  expect(letsLearn.greeting("suze")).toEqual("let's learn, suze!");
});

// Lists in js:

test("returns the last value in the list passed", () => {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  expect(letsLearn.showLastValue(list)).toEqual(9);
});

describe("returns the value at the index passed", () => {
  const list = ["1", 2, "hello", true];
  test("returns 2", () => {
    expect(letsLearn.valueAtIndex(list, 1)).toEqual(2);
  });
  test("returns true", () => {
    expect(letsLearn.valueAtIndex(list, 3)).toBe(true);
  });
  test("returns '1'", () => {
    expect(letsLearn.valueAtIndex(list, 0)).toBe("1");
  });
  test("returns 'hello'", () => {
    expect(letsLearn.valueAtIndex(list, 2)).toBe("hello");
  });
});

test("returns length of passed list", () => {
  const list = [1, 2, 3];
  expect(letsLearn.howLongIsThisList(list)).toEqual(3);
});

// and now... it's your turn! On the line below, write a test that checks that a method called amIOnTheList returns true if the name passed is in this array ['suze', 'andrew', 'walter'] and false otherwise, and make it pass!


describe("returns if in the list", () => {
  test("returns if suze is in the list", () => {
    const list = ['suze', 'andrew', 'walter'];
    expect(letsLearn.amIOnTheList('suze')).toEqual(true)
  });
  test("returns if andrew is in the list", () => {
    const list = ['suze', 'andrew', 'walter'];
    expect(letsLearn.amIOnTheList('andrew')).toEqual(true)
  });
  test("returns if walter is in the list", () => {
    const list = ['suze', 'andrew', 'walter'];
    expect(letsLearn.amIOnTheList('walter')).toEqual(true)
  });

});

// well done for grouping all tests for one function in a describe block, v good practice.
// what i can't see from this test is that the function returns the expected value when a name
// that isn't on the list is passed - remember to always test for all the expected behaviour of your functions!
// before you write the new test, try to form a clear hypothesis about if it will pass/why it will pass