import AleaGen from './alea-gen';
import MersenneTwister from './mersenne-twister';

const _getRandomNumberWithMinMaxValues = (randomValue: number, min: number, max: number): number =>
  Math.floor(randomValue * (max - min + 1)) + min;

const randomNumber = (value: string | number | null, min: number, max: number): number => {
  // Type guards for undefined and any type
  if (typeof min !== 'number' || typeof max !== 'number') {
    throw new TypeError('min and max must be numbers');
  }

  if (min > max) {
    throw new RangeError('min must be less than or equal to max');
  }

  const seedValue = value ?? `${Date.now()}-${Math.random()}`;
  const prepareSeed = new AleaGen(seedValue);
  const seedOutput = prepareSeed.getSeed() * 10000000;

  const mersenne = new MersenneTwister(seedOutput);
  return _getRandomNumberWithMinMaxValues(mersenne.genRandReal2(), min, max);
};

export default randomNumber;
