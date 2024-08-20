// check-spell:disable
// Mersenne Twister from https://gist.github.com/banksean/300494
/*
  A C-program for MT19937, with initialization improved 2002/1/26.
  Coded by Takuji Nishimura and Makoto Matsumoto.

  Before using, initialize the state by using init_genrand(seed)
  or init_by_array(init_key, key_length).

  Copyright (C) 1997 - 2002, Makoto Matsumoto and Takuji Nishimura,
  All rights reserved.

  Redistribution and use in source and binary forms, with or without
  modification, are permitted provided that the following conditions
  are met:

  1. Redistributions of source code must retain the above copyright
  notice, this list of conditions and the following disclaimer.

  2. Redistributions in binary form must reproduce the above copyright
  notice, this list of conditions and the following disclaimer in the
  documentation and/or other materials provided with the distribution.

  3. The names of its contributors may not be used to endorse or promote
  products derived from this software without specific prior written
  permission.

  THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS
  "AS IS" AND ANY EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT
  LIMITED TO, THE IMPLIED WARRANTIES OF MERCHANTABILITY AND FITNESS FOR
  A PARTICULAR PURPOSE ARE DISCLAIMED.  IN NO EVENT SHALL THE COPYRIGHT OWNER OR
  CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO,
  PROCUREMENT OF SUBSTITUTE GOODS OR SERVICES; LOSS OF USE, DATA, OR
  PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED AND ON ANY THEORY OF
  LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS
  SOFTWARE, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.


  Any feedback is very welcome.
  http://www.math.sci.hiroshima-u.ac.jp/~m-mat/MT/emt.html
  email: m-mat @ math.sci.hiroshima-u.ac.jp (remove space)
*/
// check-spell:enable

interface MersenneInitialTypes {
  stateVectorLength: number;
  stateVectorM: number;
  matrixA: number;
  upperMask: number;
  lowerMask: number;
  stateVector: Uint32Array;
  stateIndex: number;
  initGenRand: (seed: number) => void;
  initByArray: (initKey: number[], keyLength: number) => void;
  genRandInt32: () => number;
  genRandInt31: () => number;
  genRandReal1: () => number;
  genRandReal2: () => number;
  genRandReal3: () => number;
  genRandRes53: () => number;
}

class MersenneTwister implements MersenneInitialTypes {
  readonly stateVectorLength = 624;
  readonly stateVectorM = 397;
  readonly matrixA = 0x9908b0df;
  readonly upperMask = 0x80000000; // most significant w-r bits
  readonly lowerMask = 0x7fffffff; // least significant r bits
  stateVector: Uint32Array; // the array for the state vector
  stateIndex: number = this.stateVectorLength + 1; // stateIndex==stateVectorLength+1 means stateVector[stateVectorLength] is not initialized

  constructor(seed: number = Math.floor(Math.random() * 10 ** 13)) {
    this.stateVector = new Uint32Array(this.stateVectorLength); // Initialize stateVector in the constructor
    this.initGenRand(seed);
  }

  initGenRand(seed: number): void {
    if (!this.stateVector) {
      throw new Error('stateVector is not initialized');
    }
    this.stateVector[0] = seed >>> 0;
    for (this.stateIndex = 1; this.stateIndex < this.stateVectorLength; this.stateIndex++) {
      const stateVector = this.stateVector[this.stateIndex - 1] ?? 0;
      const s = stateVector ^ (stateVector >>> 30);
      this.stateVector[this.stateIndex] =
        ((((s & 0xffff0000) >>> 16) * 1812433253) << 16) +
        (s & 0x0000ffff) * 1812433253 +
        this.stateIndex;
      this.stateVector[this.stateIndex] >>>= 0;
    }
  }

  initByArray(initKey: number[], keyLength: number): void {
    if (!this.stateVector) {
      throw new Error('stateVector is not initialized');
    }
    let i = 1;
    let j = 0;
    let k = this.stateVectorLength > keyLength ? this.stateVectorLength : keyLength;
    this.initGenRand(19650218);
    for (; k; k--) {
      const stateVector = this.stateVector[i - 1] ?? 0;
      const s = stateVector ^ (stateVector >>> 30);
      this.stateVector[i] =
        (this.stateVector[i] ??
          0 ^ (((((s & 0xffff0000) >>> 16) * 1664525) << 16) + (s & 0x0000ffff) * 1664525)) +
        (initKey[j] ?? 0) +
        j;
      this.stateVector[i] >>>= 0;
      i++;
      j++;
      if (i >= this.stateVectorLength) {
        this.stateVector[0] = this.stateVector[this.stateVectorLength - 1] ?? 0;
        i = 1;
      }
      if (j >= keyLength) j = 0;
    }
    for (k = this.stateVectorLength - 1; k; k--) {
      const stateVector = this.stateVector[i - 1] ?? 0;
      const s = stateVector ^ (stateVector >>> 30);
      this.stateVector[i] =
        (this.stateVector[i] ??
          0 ^ (((((s & 0xffff0000) >>> 16) * 1566083941) << 16) + (s & 0x0000ffff) * 1566083941)) -
        i;
      this.stateVector[i] >>>= 0;
      i++;
      if (i >= this.stateVectorLength) {
        this.stateVector[0] = this.stateVector[this.stateVectorLength - 1] ?? 0;
        i = 1;
      }
    }
    this.stateVector[0] = 0x80000000; // MSB is 1; assuring non-zero initial array
  }

  genRandInt32(): number {
    if (!this.stateVector) {
      throw new Error('stateVector is not initialized');
    }
    let y: number;
    const mag01 = new Uint32Array([0x0, this.matrixA]);

    if (this.stateIndex >= this.stateVectorLength) {
      // generate stateVectorLength words at one time
      let kk: number;

      if (this.stateIndex === this.stateVectorLength + 1)
        // if initGenRand() has not been called
        this.initGenRand(5489); // a default initial seed is used

      for (kk = 0; kk < this.stateVectorLength - this.stateVectorM; kk++) {
        y =
          (this.stateVector[kk] ?? 0 & this.upperMask) |
          (this.stateVector[kk + 1] ?? 0 & this.lowerMask);
        this.stateVector[kk] =
          this.stateVector[kk + this.stateVectorM] ?? 0 ^ (y >>> 1) ^ (mag01[y & 0x1] ?? 0);
      }
      for (; kk < this.stateVectorLength - 1; kk++) {
        y =
          (this.stateVector[kk] ?? 0 & this.upperMask) |
          (this.stateVector[kk + 1] ?? 0 & this.lowerMask);
        this.stateVector[kk] =
          this.stateVector[kk + (this.stateVectorM - this.stateVectorLength)] ??
          0 ^ (y >>> 1) ^ (mag01[y & 0x1] ?? 0);
      }
      y =
        ((this.stateVector[this.stateVectorLength - 1] ?? 0) & this.upperMask) |
        (this.stateVector[0] ?? 0 & this.lowerMask);
      this.stateVector[this.stateVectorLength - 1] =
        this.stateVector[this.stateVectorM - 1] ?? 0 ^ (y >>> 1) ^ (mag01[y & 0x1] ?? 0);

      this.stateIndex = 0;
    }

    y = this.stateVector[this.stateIndex++] ?? 0;

    // Tempering
    y ^= y >>> 11;
    y ^= (y << 7) & 0x9d2c5680;
    y ^= (y << 15) & 0xefc60000;
    y ^= y >>> 18;

    return y >>> 0;
  }

  genRandInt31(): number {
    return this.genRandInt32() >>> 1;
  }

  genRandReal1(): number {
    return this.genRandInt32() * (1.0 / 4294967295.0); // divided by 2^32-1
  }

  genRandReal2(): number {
    return this.genRandInt32() * (1.0 / 4294967296.0); // divided by 2^32
  }

  genRandReal3(): number {
    return (this.genRandInt32() + 0.5) * (1.0 / 4294967296.0); // divided by 2^32
  }

  genRandRes53(): number {
    const a = this.genRandInt32() >>> 5;
    const b = this.genRandInt32() >>> 6;
    return (a * 67108864.0 + b) * (1.0 / 9007199254740992.0);
  }
}

export default MersenneTwister;
