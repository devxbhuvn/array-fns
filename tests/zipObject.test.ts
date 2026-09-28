import { describe, expect, it } from 'vitest';
import { zipObject } from '../src';

describe('zipObject', () => {
    it('builds an object from keys and values', () => {
        expect(zipObject(['a', 'b'], [1, 2])).toEqual({ a: 1, b: 2 });
    });
});
