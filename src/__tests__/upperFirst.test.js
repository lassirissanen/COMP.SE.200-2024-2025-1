import upperFirst from "../upperFirst";

describe("upperFirst positive", () => {
  test("converts the first character of a lowercase string to uppercase", () => {
    expect(upperFirst("fred")).toBe("Fred");
  });

  test("leaves an already uppercase first character unchanged", () => {
    expect(upperFirst("FRED")).toBe("FRED");
  });

  test("handles an empty string", () => {
    expect(upperFirst("")).toBe("");
  });

  test("handles a single character string", () => {
    expect(upperFirst("a")).toBe("A");
  });

  test("leaves non-alphabetic first characters unchanged", () => {
    expect(upperFirst("123abc")).toBe("123abc");
  });

  test("handles strings with leading whitespace", () => {
    expect(upperFirst("  hello")).toBe("  Hello");
  });

  test("handles strings with only whitespace", () => {
    expect(upperFirst("   ")).toBe("   ");
  });

  test("handles strings with mixed case", () => {
    expect(upperFirst("fRED")).toBe("FRED");
  });

  test("handles strings with special characters", () => {
    expect(upperFirst("$money")).toBe("$money");
  });

  test("handles undefined input", () => {
    expect(upperFirst(undefined)).toBe("");
  });

  test("handles null input", () => {
    expect(upperFirst(null)).toBe("");
  });
});

describe("upperFirst negative", () => {
  test("number input throws an error", () => {
    expect(() => upperFirst(123)).toThrow();
  });

  test("object input throws an error", () => {
    expect(() => upperFirst({})).toThrow();
  });

  test("array input throws an error", () => {
    expect(() => upperFirst([])).toThrow();
  });
});
