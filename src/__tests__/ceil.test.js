import ceil from '../ceil';

describe('ceil', () => {
    test('should round up to the nearest integer', () => {
        expect(ceil(4.2)).toBe(5);
    });

    test('should round up to the specified decimal place', () => {
        expect(ceil(4.123, 2)).toBe(4.13);
    });

    test('should handle negative numbers', () => {
        expect(ceil(-4.6)).toBe(-4);
    });

    test('should return the input for whole numbers', () => {
        expect(ceil(5)).toBe(5);
    });

    test.skip('should handle invalid input gracefully', () => {
        expect(() => ceil('abc')).toThrow();
    });
});
