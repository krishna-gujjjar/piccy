// From http://baagoe.com/en/RandomMusings/javascript/
// Johannes Baagøe <baagoe@baagoe.com>, 2010

type Mash = (data: string) => number;
class AleaGen {
  private c: number;
  private s0: number;
  private s1: number;
  private s2: number;
  private mash: Mash;

  constructor(seed: string | number | null = null) {
    this.mash = this.createMash();
    this.c = 1;
    this.s0 = this.mash(' ');
    this.s1 = this.mash(' ');
    this.s2 = this.mash(' ');

    let seedValue = seed;
    if (seedValue === null) {
      seedValue = `${Date.now()}-${Math.random()}`;
    }

    this.s0 -= this.mash(seedValue.toString());
    if (this.s0 < 0) this.s0 += 1;
    this.s1 -= this.mash(seedValue.toString());
    if (this.s1 < 0) this.s1 += 1;
    this.s2 -= this.mash(seedValue.toString());
    if (this.s2 < 0) this.s2 += 1;
  }

  private createMash(): Mash {
    let n = 0xefc8249d;
    return (data: string): number => {
      for (let i = 0; i < data.length; i++) {
        n += data.charCodeAt(i);
        let h = 0.02519603282416938 * n;
        n = h >>> 0;
        h -= n;
        h *= n;
        n = h >>> 0;
        h -= n;
        n += h * 0x100000000; // 2^32
      }
      return (n >>> 0) * 2.3283064365386963e-10; // 2^-32
    };
  }

  public getSeed(): number {
    return this.s1;
  }

  public random(): number {
    const t = 2091639 * this.s0 + this.c * 2.3283064365386963e-10; // 2^-32
    this.s0 = this.s1;
    this.s1 = this.s2;
    this.c = t | 0;
    this.s2 = t - this.c;
    return this.s2;
  }
}

export default AleaGen;
