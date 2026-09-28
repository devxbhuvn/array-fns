import { describe, expect, it } from 'vitest';
import { chunkBy } from '../src';

describe('chunkBy', () => {
    it('chunks consecutive equal keys', () => {
        expect(chunkBy([1, 1, 2, 2, 1], (value) => value)).toEqual([[1, 1], [2, 2], [1]]);
    });
});
