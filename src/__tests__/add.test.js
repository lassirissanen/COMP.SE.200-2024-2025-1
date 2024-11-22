import add from "../add";

describe("add function", () => {
  test("adds two positive numbers", () => {
    expect(add(6, 4)).toBe(10);
  });

  test("adds a positive and a negative number", () => {
    expect(add(6, -4)).toBe(2);
  });

  test("adds two negative numbers", () => {
    expect(add(-6, -4)).toBe(-10);
  });

  test("adds zero to a number", () => {
    expect(add(6, 0)).toBe(6);
    expect(add(0, 6)).toBe(6);
  });

  test("adds two zeros", () => {
    expect(add(0, 0)).toBe(0);
  });

  test("handles floating point numbers", () => {
    expect(add(3.14, 2.86)).toBeCloseTo(6, 5);
  });

  test("returns the number when only one argument is provided", () => {
    expect(add(5)).toBe(5);
  });

  test("returns 0 when no arguments are provided", () => {
    expect(add()).toBe(0);
  });

  test("coerces string numbers to actual numbers", () => {
    expect(add(5, "3")).toBe(8);
  });

  test("returns NaN for non-numeric strings", () => {
    expect(add("abc", "3")).toBeNaN();
  });

  test("handles Infinity", () => {
    expect(add(Infinity, 5)).toBe(Infinity);
    expect(add(5, Infinity)).toBe(Infinity);
    expect(add(Infinity, Infinity)).toBe(Infinity);
  });

  test("handles  negative Infinity", () => {
    expect(add(-Infinity, 5)).toBe(-Infinity);
    expect(add(5, -Infinity)).toBe(-Infinity);
    expect(add(-Infinity, -Infinity)).toBe(-Infinity);
  });

  test("returns NaN for undefined input", () => {
    expect(add(undefined, 5)).toBeNaN();
  });

  test("returns NaN for undefined or null inputs", () => {
    expect(add(null, 5)).toBeNaN();
  });

  test("handles very large numbers", () => {
    const largeNumber = Number.MAX_SAFE_INTEGER;
    expect(add(largeNumber, 1)).toBe(largeNumber + 1);
  });

  test("handles very small numbers", () => {
    const smallNumber = Number.MIN_VALUE;
    expect(add(smallNumber, smallNumber)).toBeCloseTo(2 * smallNumber, 10);
  });
});
