import { describe, expect, it } from 'bun:test';
import randomNumber from '@/utils/random';

describe('randomNumber', () => {
  it('should generate a number within the specified range', () => {
    const min = 1;
    const max = 10;
    const value = 'test-seed';
    const result = randomNumber(value, min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });

  it('should throw a RangeError if min is greater than max', () => {
    const min = 10;
    const max = 1;
    const value = 'test-seed';
    expect(() => randomNumber(value, min, max)).toThrow(RangeError);
  });

  it('should throw a TypeError if min or max is not a number', () => {
    const min = 'a';
    const max = 10;
    const value = 'test-seed';
    // @ts-ignore
    expect(() => randomNumber(value, min, max)).toThrow(TypeError);
  });

  it('should generate different numbers for different seeds', () => {
    const min = 1;
    const max = 10;
    const value1 = 'seed';
    const value2 = 'another-seed';
    const result1 = randomNumber(value1, min, max);
    const result2 = randomNumber(value2, min, max);

    expect(result1).not.toEqual(result2);
  });

  it('should generate the same number for the same seed', () => {
    const min = 1;
    const max = 10;
    const value = 'consistent-seed';
    const result1 = randomNumber(value, min, max);
    const result2 = randomNumber(value, min, max);
    expect(result1).toEqual(result2);
  });

  it('should handle null seed and generate a number within the specified range', () => {
    const min = 1;
    const max = 10;
    const value = null;
    const result = randomNumber(value, min, max);
    expect(result).toBeGreaterThanOrEqual(min);
    expect(result).toBeLessThanOrEqual(max);
  });
});
