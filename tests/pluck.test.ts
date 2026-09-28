import { describe, expect, it } from 'vitest';
import { pluck } from '../src';

describe('pluck', () => {
    it('maps property values', () => {
        expect(pluck([{ a: 1 }, { a: 2 }], 'a')).toEqual([1, 2]);
    });
});
