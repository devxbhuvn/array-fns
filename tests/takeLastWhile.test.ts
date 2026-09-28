import { describe, expect, it } from 'vitest';
import { takeLastWhile } from '../src';

describe('takeLastWhile', () => {
    it('takes from the end while predicate holds', () => {
        expect(takeLastWhile([1, 2, 3, 4], (value) => value > 2)).toEqual([3, 4]);
    });
});
