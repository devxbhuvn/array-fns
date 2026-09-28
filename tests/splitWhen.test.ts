import { describe, expect, it } from 'vitest';
import { splitWhen } from '../src';

describe('splitWhen', () => {
    it('splits at the first matching predicate', () => {
        expect(splitWhen([1, 2, 3, 4], (value) => value > 2)).toEqual([
            [1, 2],
            [3, 4]
        ]);
    });
});
