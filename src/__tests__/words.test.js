import words from "../words";

describe("words positive", () => {
  test("splits string into words with default pattern", () => {
    expect(words("fred, barney, & pebbles")).toEqual([
      "fred",
      "barney",
      "pebbles",
    ]);
  });

  test("splits string using custom pattern", () => {
    expect(words("fred, barney, & pebbles", /[^, ]+/g)).toEqual([
      "fred",
      "barney",
      "&",
      "pebbles",
    ]);
  });

  test("returns empty array for empty string", () => {
    expect(words("")).toEqual([]);
  });

  test("handles string with only spaces", () => {
    expect(words("   ")).toEqual([]);
  });

  test("handles string with numbers", () => {
    expect(words("abc 123 def")).toEqual(["abc", "123", "def"]);
  });

  test("handles string with special characters", () => {
    expect(words("hello! world? how_are-you")).toEqual([
      "hello",
      "world",
      "how",
      "are",
      "you",
    ]);
  });

  test("handles camelCase words", () => {
    expect(words("camelCase isNice")).toEqual(["camel", "Case", "is", "Nice"]);
  });

  test("handles PascalCase words", () => {
    expect(words("PascalCase IsNice")).toEqual([
      "Pascal",
      "Case",
      "Is",
      "Nice",
    ]);
  });

  test("handles string with non-ASCII characters", () => {
    expect(words("こんにちは 世界")).toEqual(["こんにちは", "世界"]);
  });

  test("handles mixed ASCII and non-ASCII characters", () => {
    expect(words("hello こんにちは world 世界")).toEqual([
      "hello",
      "こんにちは",
      "world",
      "世界",
    ]);
  });

  test("handles custom pattern that matches nothing", () => {
    expect(words("hello world", /xyz/g)).toEqual([]);
  });

  test("handles custom pattern", () => {
    expect(words("a1 b2 c3", /\d/g)).toEqual(["1", "2", "3"]);
  });

  test("null input throws an error", () => {
    expect(() => words(null)).toThrow();
  });

  test("undefined input throws an error", () => {
    expect(() => words(undefined)).toThrow();
  });

  test("number input throws an error", () => {
    expect(() => words(123)).toThrow();
  });

  test("object input throws an error", () => {
    expect(() => words({})).toThrow();
  });

  test("array input throws an error", () => {
    expect(() => words([])).toThrow();
  });
});
