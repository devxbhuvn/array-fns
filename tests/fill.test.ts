import { describe, expect, it } from 'vitest';
import { fill } from '../src';

describe('fill', () => {
    it('fills a range immutably', () => {
        expect(fill([1, 2, 3, 4], 0, 1, 3)).toEqual([1, 0, 0, 4]);
    });
});
