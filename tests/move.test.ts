import { describe, expect, it } from 'vitest';
import { move } from '../src';

describe('move', () => {
    it('moves an item between indexes', () => {
        expect(move([1, 2, 3, 4], 1, 3)).toEqual([1, 3, 4, 2]);
    });
});
