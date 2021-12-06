const { getNewUser, mapObjectToArray } = require("./utils");

describe("mapObjectToArray()", () => {
  test("maps values to array using callback", () => {
    const result = mapObjectToArray({ age: 28, weight: 55 }, (key, value) => {
      return value + 10;
    });

    expect(result).toEqual([38, 65]);
  });

  test("callback gets called", () => {
    const mockCb = jest.fn();
    const result = mapObjectToArray({ age: 30, weight: 55 }, mockCb);

    expect(mockCb.mock.calls.length).toBe(2);
  });
});

// same values use .toEqual
// same exact comparison use .toBe
