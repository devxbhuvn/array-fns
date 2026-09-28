import { describe, expect, it } from 'vitest';
import { zipLongest } from '../src';

describe('zipLongest', () => {
    it('pads missing values with undefined', () => {
        expect(zipLongest([1, 2], ['a'])).toEqual([
            [1, 'a'],
            [2, undefined]
        ]);
    });
});
