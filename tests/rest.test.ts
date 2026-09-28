import { describe, expect, it } from 'vitest';
import { rest } from '../src';

describe('rest', () => {
    it('aliases tail', () => {
        expect(rest([1, 2, 3])).toEqual([2, 3]);
    });
});
