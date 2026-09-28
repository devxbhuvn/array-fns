import { describe, expect, it } from 'vitest';
import { initial } from '../src';

describe('initial', () => {
    it('drops the last element', () => {
        expect(initial([1, 2, 3])).toEqual([1, 2]);
        expect(initial([])).toEqual([]);
    });
});
