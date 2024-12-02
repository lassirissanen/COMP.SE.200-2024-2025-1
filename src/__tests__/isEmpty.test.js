import isEmpty from '../isEmpty';

describe('isEmpty', () => {
    // Test for null and undefined values
    test('should return true for null or undefined', () => {
        expect(isEmpty(null)).toBe(true);
        expect(isEmpty(undefined)).toBe(true);
    });

    // Test for primitive values
    test('should return true for primitive non-collection values', () => {
        expect(isEmpty(true)).toBe(true);
        expect(isEmpty(false)).toBe(true);
        expect(isEmpty(0)).toBe(true);
        expect(isEmpty(1)).toBe(true);
        expect(isEmpty('')).toBe(true);
    });

    test('should return false for non-empty strings', () => {
        expect(isEmpty('abc')).toBe(false);
    });

    // Test for arrays
    test('should return true for empty arrays', () => {
        expect(isEmpty([])).toBe(true);
    });

    test('should return false for non-empty arrays', () => {
        expect(isEmpty([1, 2, 3])).toBe(false);
    });

    // Test for objects
    test('should return true for empty objects', () => {
        expect(isEmpty({})).toBe(true);
    });

    test('should return false for non-empty objects', () => {
        expect(isEmpty({ a: 1 })).toBe(false);
    });

    // Test for array-like objects
    test('should return true for empty array-like objects', () => {
        const args = (function () { return arguments; })(); // Empty arguments object
        expect(isEmpty(args)).toBe(true);
    });

    test('should return false for non-empty array-like objects', () => {
        const args = (function () { return arguments; })(1, 2, 3); // Non-empty arguments object
        expect(isEmpty(args)).toBe(false);
    });

    // Test for buffer
    test('should return true for empty buffers', () => {
        const buffer = Buffer.alloc(0);
        expect(isEmpty(buffer)).toBe(true);
    });

    test('should return false for non-empty buffers', () => {
        const buffer = Buffer.from([1, 2, 3]);
        expect(isEmpty(buffer)).toBe(false);
    });

    // Test for maps and sets
    test('should return true for empty maps and sets', () => {
        const map = new Map();
        const set = new Set();
        expect(isEmpty(map)).toBe(true);
        expect(isEmpty(set)).toBe(true);
    });

    test('should return false for non-empty maps and sets', () => {
        const map = new Map([[1, 'a']]);
        const set = new Set([1, 2, 3]);
        expect(isEmpty(map)).toBe(false);
        expect(isEmpty(set)).toBe(false);
    });

    // Test for objects with a prototype
    test('should return true for prototype objects without own properties', () => {
        function Test() {}
        Test.prototype.testProp = 'value';
        const obj = new Test();
        expect(isEmpty(obj)).toBe(true);
    });

    test('should return false for prototype objects with own properties', () => {
        function Test() {
            this.ownProp = 'value';
        }
        const obj = new Test();
        expect(isEmpty(obj)).toBe(false);
    });

    // Edge cases
    test('should handle unusual cases', () => {
        expect(isEmpty(new Date())).toBe(false); // A Date object is not empty
        expect(isEmpty(/regex/)).toBe(true); // A RegExp object has no enumerable properties
    });
});
