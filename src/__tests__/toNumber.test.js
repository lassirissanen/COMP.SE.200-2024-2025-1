import toNumber from '../toNumber';

describe('toNumber', () => {
    // Test cases for numeric inputs
    test('should return the same number for numeric input', () => {
        expect(toNumber(3.2)).toBe(3.2);
        expect(toNumber(0)).toBe(0);
        expect(toNumber(-42)).toBe(-42);
        expect(toNumber(Number.MIN_VALUE)).toBe(Number.MIN_VALUE);
        expect(toNumber(Infinity)).toBe(Infinity);
    });

    // Test cases for string inputs
    test('should convert valid numeric strings to numbers', () => {
        expect(toNumber('3.2')).toBe(3.2);
        expect(toNumber('42')).toBe(42);
        expect(toNumber('0')).toBe(0);
        expect(toNumber('-42')).toBe(-42);
        expect(toNumber('5e-324')).toBe(5e-324);
    });

    test('should trim whitespace in strings before converting', () => {
        expect(toNumber('  42  ')).toBe(42);
        expect(toNumber('\t-3.14\n')).toBe(-3.14);
    });

    test('should return NaN for invalid numeric strings', () => {
        expect(toNumber('abc')).toBeNaN();
        expect(toNumber('3.2abc')).toBeNaN();
    });

    // Test cases for binary, octal, and hexadecimal strings
    test('should convert binary strings to numbers', () => {
        expect(toNumber('0b1010')).toBe(10); // Binary for 10
        expect(toNumber('0b0')).toBe(0); // Binary for 0
    });

    test('should convert octal strings to numbers', () => {
        expect(toNumber('0o17')).toBe(15); // Octal for 15
        expect(toNumber('0o0')).toBe(0); // Octal for 0
    });

    test('should return NaN for invalid hexadecimal strings', () => {
        expect(toNumber('-0x1a')).toBeNaN(); // Invalid signed hexadecimal
        expect(toNumber('0x123')).toBe(291); // Valid hexadecimal
    });

    // Test cases for symbols
    test('should return NaN for symbol inputs', () => {
        expect(toNumber(Symbol('test'))).toBeNaN();
    });

    // Test cases for object inputs
    test('should use the valueOf method for objects', () => {
        const obj = { valueOf: () => 42 };
        expect(toNumber(obj)).toBe(42);
    });

    test('should convert objects without valueOf to NaN', () => {
        const obj = { toString: () => '42' };
        expect(toNumber(obj)).toBe(42);
        expect(toNumber({})).toBeNaN();
    });

    // Test cases for other data types
    test('should return NaN for undefined and null', () => {
        expect(toNumber(undefined)).toBeNaN();
        expect(toNumber(null)).toBe(0); // Null is coerced to 0
    });

    test('should return NaN for boolean values', () => {
        expect(toNumber(true)).toBe(1); // Boolean true is coerced to 1
        expect(toNumber(false)).toBe(0); // Boolean false is coerced to 0
    });

    test('should handle edge cases with empty strings', () => {
        expect(toNumber('')).toBe(0); // Empty strings are coerced to 0
    });
});
