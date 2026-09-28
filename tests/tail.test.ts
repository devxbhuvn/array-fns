import { describe, expect, it } from 'vitest';
import { tail } from '../src';

describe('tail', () => {
    it('drops the first element', () => {
        expect(tail([1, 2, 3])).toEqual([2, 3]);
    });
});
