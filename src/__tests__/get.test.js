import get from "../get";

const testObject = { a: [{ b: { c: 3 } }] };

describe("get positive", () => {
  test("retrieves nested value using dot notation", () => {
    expect(get(testObject, "a[0].b.c")).toBe(3);
  });

  test("retrieves nested value using array notation", () => {
    expect(get(testObject, ["a", "0", "b", "c"])).toBe(3);
  });

  test("returns undefined for non-existent path", () => {
    expect(get(testObject, "a.b.c")).toBeUndefined();
  });

  test("returns default value for non-existent path", () => {
    expect(get(testObject, "a.b.c", "default")).toBe("default");
  });

  test("doesn't return default value for correct path", () => {
    expect(get(testObject, "a[0].b.c", "default")).toBe(3);
  });

  test("returns undefined with empty string path", () => {
    expect(get(testObject, "")).toBeUndefined();
  });

  test("returns undefined with empty array path", () => {
    expect(get(testObject, [])).toBeUndefined();
  });

  test("returns correct element with array index", () => {
    const arrObject = [1, 2, 3];
    expect(get(arrObject, "1")).toBe(2);
  });

  test("returns undefined for out of bounds array index", () => {
    const arrObject = [1, 2, 3];
    expect(get(arrObject, "5")).toBeUndefined();
  });

  test("returns boolean values", () => {
    const boolObject = { a: { b: false } };
    expect(get(boolObject, "a.b")).toBe(false);
  });

  test("returns zero as a valid value", () => {
    const zeroObject = { a: { b: 0 } };
    expect(get(zeroObject, "a.b")).toBe(0);
  });

  test("returns empty string as a valid value", () => {
    const emptyStringObject = { a: { b: "" } };
    expect(get(emptyStringObject, "a.b")).toBe("");
  });

  test("handles complex nested objects", () => {
    const complexObject = {
      a: {
        b: [{ c: { d: [0, { e: 42 }] } }],
      },
    };
    expect(get(complexObject, "a.b[0].c.d[1].e")).toBe(42);
  });

  test("returns undefined with null object", () => {
    expect(get(null, "a.b.c")).toBeUndefined();
  });

  test("returns undefined with undefined object", () => {
    expect(get(undefined, "a.b.c")).toBeUndefined();
  });

  test("returns undefined with null path", () => {
    expect(get(testObject, null)).toBeUndefined();
  });

  test("returns undefined with undefined path", () => {
    expect(get(testObject, undefined)).toBeUndefined();
  });

  test("returns default with null object", () => {
    expect(get(null, "a.b.c", "default")).toBe("default");
  });

  test("returns default with undefined object", () => {
    expect(get(undefined, "a.b.c", "default")).toBe("default");
  });

  test("returns default with null path", () => {
    expect(get(testObject, null, "default")).toBe("default");
  });

  test("returns default with undefined path", () => {
    expect(get(testObject, undefined, "default")).toBe("default");
  });
});
