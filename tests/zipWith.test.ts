import { describe, expect, it } from 'vitest';
import { zipWith } from '../src';

describe('zipWith', () => {
    it('maps paired values with a custom function', () => {
        expect(zipWith([1, 2], ['a', 'b'], (left, right) => `${left}-${right}`)).toEqual(['1-a', '2-b']);
    });
});
