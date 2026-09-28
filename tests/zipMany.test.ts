import { describe, expect, it } from 'vitest';
import { zipMany } from '../src';

describe('zipMany', () => {
    it('zips many arrays to the shortest length', () => {
        expect(zipMany([1, 2], ['a', 'b'], [true])).toEqual([[1, 'a', true]]);
    });
});
