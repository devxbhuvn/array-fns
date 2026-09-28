import { describe, expect, it } from 'vitest';
import { castArray } from '../src';

describe('castArray', () => {
    it('wraps non-arrays and copies arrays', () => {
        expect(castArray(1)).toEqual([1]);
        expect(castArray([1, 2])).toEqual([1, 2]);
    });
});
