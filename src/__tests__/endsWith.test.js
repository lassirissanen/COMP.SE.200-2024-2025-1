import endsWith from '../endsWith';

describe('endsWith', () => {
    test('should return true if the string ends with the target', () => {
        expect(endsWith('abc', 'c')).toBe(true);
    });

    test('should return false if the string does not end with the target', () => {
        expect(endsWith('abc', 'b')).toBe(false);
    });

    test('should return true if the target matches up to the specified position', () => {
        expect(endsWith('abc', 'b', 2)).toBe(true);
    });

    test('should handle an empty string as input', () => {
        expect(endsWith('', 'a')).toBe(false);
    });

    test('should handle a negative position', () => {
        expect(endsWith('abc', 'a', -1)).toBe(false);
    });

    test('should handle a position greater than the string length', () => {
        expect(endsWith('abc', 'c', 10)).toBe(true);
    });
});
