import filter from "../filter";
describe("filter", () => {
  test("filters an array based on a predicate", () => {
    const input = [1, 2, 3, 4, 5];
    const result = filter(input, (num) => num % 2 === 0);
    expect(result).toEqual([2, 4]);
  });

  test("handles an empty array", () => {
    const result = filter([], () => true);
    expect(result).toEqual([]);
  });

  test("returns an empty array when no elements match the predicate", () => {
    const input = [1, 3, 5];
    const result = filter(input, (num) => num % 2 === 0);
    expect(result).toEqual([]);
  });

  test("returns all elements when predicate always returns true", () => {
    const input = [1, 2, 3];
    const result = filter(input, () => true);
    expect(result).toEqual([1, 2, 3]);
  });

  test("correctly uses index in predicate", () => {
    const input = [10, 20, 30, 40];
    const result = filter(input, (_, index) => index % 2 === 0);
    expect(result).toEqual([10, 30]);
  });

  test("correctly uses array in predicate", () => {
    const input = [1, 2, 3, 4];
    const result = filter(input, (value, index, arr) => value === arr[index]);
    expect(result).toEqual([1, 2, 3, 4]);
  });

  test("handles null input", () => {
    const result = filter(null, () => true);
    expect(result).toEqual([]);
  });

  test("handles undefined input", () => {
    const result = filter(undefined, () => true);
    expect(result).toEqual([]);
  });

  test("works with objects in array", () => {
    const users = [
      { user: "barney", active: true },
      { user: "fred", active: false },
    ];
    const result = filter(users, ({ active }) => active);
    expect(result).toEqual([{ user: "barney", active: true }]);
  });

  test("does not modify the original array", () => {
    const input = [1, 2, 3, 4, 5];
    filter(input, (num) => num % 2 === 0);
    expect(input).toEqual([1, 2, 3, 4, 5]);
  });

  test("returns a new array", () => {
    const input = [1, 2, 3];
    const result = filter(input, () => true);
    expect(result).not.toBe(input);
  });
});
