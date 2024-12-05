import eq from '../eq';

describe('eq', () => {
    // Primitive comparisons
    test('should return true for equivalent primitive values', () => {
        expect(eq(1, 1)).toBe(true);
        expect(eq('a', 'a')).toBe(true);
        expect(eq(true, true)).toBe(true);
        expect(eq(false, false)).toBe(true);
    });

    test('should return false for non-equivalent primitive values', () => {
        expect(eq(1, 2)).toBe(false);
        expect(eq('a', 'b')).toBe(false);
        expect(eq(true, false)).toBe(false);
    });

    // Object comparisons
    test('should return true for the same object reference', () => {
        const obj = { a: 1 };
        expect(eq(obj, obj)).toBe(true);
    });

    test('should return false for different objects with the same structure', () => {
        const obj1 = { a: 1 };
        const obj2 = { a: 1 };
        expect(eq(obj1, obj2)).toBe(false); // Different references
    });

    // `NaN` comparisons
    test('should return true for NaN compared with NaN', () => {
        expect(eq(NaN, NaN)).toBe(true);
    });

    // Object wrappers and primitives
    test.skip('should return false for primitive and object wrapper comparisons', () => {
        expect(eq('a', Object('a'))).toBe(false);
        expect(eq(1, Object(1))).toBe(false);
        expect(eq(true, Object(true))).toBe(false);
    });

    // Null and undefined
    test('should return true for null compared with null', () => {
        expect(eq(null, null)).toBe(true);
    });

    test('should return true for undefined compared with undefined', () => {
        expect(eq(undefined, undefined)).toBe(true);
    });

    test.skip('should return false for null compared with undefined', () => {
        expect(eq(null, undefined)).toBe(false);
    });

    // Edge cases
    test('should return true for -0 and +0 (SameValueZero)', () => {
        expect(eq(-0, +0)).toBe(true);
    });

    test('should return true for Symbol with same reference', () => {
        const sym = Symbol('test');
        expect(eq(sym, sym)).toBe(true);
    });

    test('should return false for different Symbols', () => {
        expect(eq(Symbol('test'), Symbol('test'))).toBe(false);
    });
});
