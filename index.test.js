const exp = require("constants");
const utils = require("./index");

describe("[Exercise 1] trimProperties", () => {
  test("[1] returns an object with the properties trimmed", () => {
    // EXAMPLE
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).toEqual(expected);
  });
  test("[2] returns a copy, leaving the original object intact", () => {
    const input = { foo: "  foo ", bar: "bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimProperties(input);
    expect(actual).not.toBe(expected);
  });
});

describe("[Exercise 2] trimPropertiesMutation", () => {
  test("[3] returns an object with the properties trimmed", () => {
    const input = { foo: "  foo ", bar: "     bar ", baz: " baz" };
    const expected = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toEqual(expected);
  });
  test("[4] the object returned is the exact same one we passed in", () => {
    const input = { foo: "foo", bar: "bar", baz: "baz" };
    const actual = utils.trimPropertiesMutation(input);
    expect(actual).toBe(input);
  });
});

describe("[Exercise 3] findLargestInteger", () => {
  test("[5] returns the largest number in an array of objects { integer: 2 }", () => {
    const integers = [
      { integer: 4 },
      { integer: 6 },
      { integer: 1 },
      { integer: 9 },
    ];
    const actual = utils.findLargestInteger(integers);
    expect(actual).toBe(9);
  });
});

describe("[Exercise 4] Counter", () => {
  let counter;
  beforeEach(() => {
    counter = new utils.Counter(3); // each test must start with a fresh couter
  });
  test("[6] the FIRST CALL of counter.countDown returns the initial count", () => {
    expect(counter.count).toBe(3);
  });
  test("[7] the SECOND CALL of counter.countDown returns the initial count minus one", () => {
    counter.countDown();
    expect(counter.count).toBe(2);
  });
  test("[8] the count eventually reaches zero but does not go below zero", () => {
    let testNumber = counter.count + 5;
    while (testNumber > 0) {
      counter.countDown();
      testNumber--;
    }
    expect(counter.count).toBe(0);
  });
});

describe("[Exercise 5] Seasons", () => {
  let seasons;
  beforeEach(() => {
    seasons = new utils.Seasons(); // each test must start with fresh seasons
  });
  test('[9] the FIRST call of seasons.next returns "summer"', () => {
    seasons.next();
    expect(seasons.season).toBe("summer");
  });
  test('[10] the SECOND call of seasons.next returns "fall"', () => {
    seasons.next();
    seasons.next();
    expect(seasons.season).toBe("fall");
  });
  test('[11] the THIRD call of seasons.next returns "winter"', () => {
    for (let i = 3; i > 0; i--) {
      seasons.next();
    }
    expect(seasons.season).toBe("winter");
  });
  test('[12] the FOURTH call of seasons.next returns "spring"', () => {
    for (let i = 4; i > 0; i--) {
      seasons.next();
    }
    expect(seasons.season).toBe("spring");
  });
  test('[13] the FIFTH call of seasons.next returns again "summer"', () => {
    for (let i = 5; i > 0; i--) {
      seasons.next();
    }
    expect(seasons.season).toBe("summer");
  });
  test('[14] the 40th call of seasons.next returns "spring"', () => {
    for (let i = 40; i > 0; i--) {
      seasons.next();
    }
    expect(seasons.season).toBe("spring");
  });
});

describe("[Exercise 6] Car", () => {
  let focus;
  beforeEach(() => {
    focus = new utils.Car("focus", 20, 30); // each test must start with a fresh car
  });
  test("[15] driving the car returns the updated odometer", () => {
    focus.drive(60);
    expect(focus.odometer).toBe(60);
  });
  test("[16] driving the car uses gas", () => {
    focus.drive(100);
    focus.drive(100);
    focus.drive(100);
    focus.drive(200);
    focus.drive(200);

    expect(focus.odometer).toBe(600);
  });
  test("[17] refueling allows to keep driving", () => {
    focus.drive(700);

    expect(focus.odometer).toBe(600);
    focus.refuel(10);
    focus.drive(200);
    expect(focus.odometer).toBe(800);
  });
  test("[18] adding fuel to a full tank has no effect", () => {
    focus.refuel(50);
    expect(focus.fuel).toBe(20);
  });
});

describe("[Exercise 7] isEvenNumberAsync", () => {
  test("[19] resolves true if passed an even number", async () => {
    const result = await utils.isEvenNumberAsync(2);
    expect(result).toBe(true);
  });
  test("[20] resolves false if passed an odd number", async () => {
    const result = await utils.isEvenNumberAsync(2);
    expect(result).toBe(true);
  });
});
