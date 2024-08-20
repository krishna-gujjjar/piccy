import { describe, expect, it } from 'bun:test';
import MersenneTwister from '@/utils/mersenne-twister';

describe('MersenneTwister', () => {
  it('should initialize with a given seed', () => {
    const seed = 12345;
    const mt = new MersenneTwister(seed);
    expect(mt).toBeDefined();
  });

  it('should generate a consistent sequence of numbers for the same seed', () => {
    const seed = 12345;
    const mt1 = new MersenneTwister(seed);
    const mt2 = new MersenneTwister(seed);

    const sequence1 = [mt1.genRandReal2(), mt1.genRandReal2(), mt1.genRandReal2()];
    const sequence2 = [mt2.genRandReal2(), mt2.genRandReal2(), mt2.genRandReal2()];

    expect(sequence1).toEqual(sequence2);
  });

  it('should generate different sequences for different seeds', () => {
    const mt1 = new MersenneTwister(12345);
    const mt2 = new MersenneTwister(54321);

    const sequence1 = [mt1.genRandReal2(), mt1.genRandReal2(), mt1.genRandReal2()];
    const sequence2 = [mt2.genRandReal2(), mt2.genRandReal2(), mt2.genRandReal2()];

    expect(sequence1).not.toEqual(sequence2);
  });

  it('should generate numbers between 0 and 1', () => {
    const mt = new MersenneTwister(12345);
    const randomValue = mt.genRandReal2();
    expect(randomValue).toBeGreaterThanOrEqual(0);
    expect(randomValue).toBeLessThan(1);
  });

  it('should generate a random integer on [0, 0xffffffff]-interval', () => {
    const mt = new MersenneTwister(12345);
    const randomInt = mt.genRandInt32();
    expect(randomInt).toBeGreaterThanOrEqual(0);
    expect(randomInt).toBeLessThanOrEqual(0xffffffff);
  });

  it('should generate a random integer on [0, 0x7fffffff]-interval', () => {
    const mt = new MersenneTwister(12345);
    const randomInt = mt.genRandInt31();
    expect(randomInt).toBeGreaterThanOrEqual(0);
    expect(randomInt).toBeLessThanOrEqual(0x7fffffff);
  });

  it('should generate a random number on [0,1)-real-interval', () => {
    const mt = new MersenneTwister(12345);
    const randomReal = mt.genRandReal1();
    expect(randomReal).toBeGreaterThanOrEqual(0);
    expect(randomReal).toBeLessThan(1);
  });

  it('should generate a random number on (0,1)-real-interval', () => {
    const mt = new MersenneTwister(12345);
    const randomReal = mt.genRandReal3();
    expect(randomReal).toBeGreaterThan(0);
    expect(randomReal).toBeLessThan(1);
  });

  it('should generate a random number on [0,1) with 53-bit resolution', () => {
    const mt = new MersenneTwister(12345);
    const randomReal = mt.genRandRes53();
    expect(randomReal).toBeGreaterThanOrEqual(0);
    expect(randomReal).toBeLessThan(1);
  });
});
