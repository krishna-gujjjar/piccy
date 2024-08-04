import AleaGen from './alea-gen';
import MersenneTwister from './mersenne-twister';

interface range {
  min: number;
  max: number;
}

interface GenerateRandom extends range {
  value: string;
}

const _getRandomNumberWithMinMaxValues = (
  randomNumber: number,
  minValue: number,
  maxValue: number
): number => Math.floor(randomNumber * (maxValue - minValue + 1) + minValue);

const randomNumber = (opts: GenerateRandom): number => {
  const { value, min, max } = opts;

  const prepareSeed = new AleaGen(value);
  const seedOutput = prepareSeed.getSeed() * 10000000;

  const mersenne = new MersenneTwister(seedOutput);

  return _getRandomNumberWithMinMaxValues(mersenne.random(), min, max);
};

export default randomNumber;
