import { describe, expect, it } from 'bun:test';
import AleaGen from '@/utils/alea-gen';

describe('AleaGen', () => {
  it('should initialize with a given seed', () => {
    const seed = 'test-seed';
    const aleaGen = new AleaGen(seed);
    expect(aleaGen).toBeDefined();
  });

  it('should initialize with a default seed if none is provided', () => {
    const aleaGen = new AleaGen(null);
    expect(aleaGen).toBeDefined();
  });

  it('should generate a consistent sequence of numbers for the same seed', () => {
    const seed = 'consistent-seed';
    const aleaGen1 = new AleaGen(seed);
    const aleaGen2 = new AleaGen(seed);

    const sequence1 = [aleaGen1.random(), aleaGen1.random(), aleaGen1.random()];
    const sequence2 = [aleaGen2.random(), aleaGen2.random(), aleaGen2.random()];

    expect(sequence1).toEqual(sequence2);
  });

  it('should generate different sequences for different seeds', () => {
    const aleaGen1 = new AleaGen('seed1');
    const aleaGen2 = new AleaGen('seed2');

    const sequence1 = [aleaGen1.random(), aleaGen1.random(), aleaGen1.random()];
    const sequence2 = [aleaGen2.random(), aleaGen2.random(), aleaGen2.random()];

    expect(sequence1).not.toEqual(sequence2);
  });

  it('should generate numbers between 0 and 1', () => {
    const aleaGen = new AleaGen('range-seed');
    const randomValue = aleaGen.random();
    expect(randomValue).toBeGreaterThanOrEqual(0);
    expect(randomValue).toBeLessThan(1);
  });
});
