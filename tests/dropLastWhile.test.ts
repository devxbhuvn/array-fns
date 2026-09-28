import { describe, expect, it } from 'vitest';
import { dropLastWhile } from '../src';

describe('dropLastWhile', () => {
    it('drops trailing matches', () => {
        expect(dropLastWhile([1, 2, 3, 4], (value) => value > 2)).toEqual([1, 2]);
    });
});
