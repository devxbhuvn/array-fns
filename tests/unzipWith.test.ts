import { describe, expect, it } from 'vitest';
import { unzipWith } from '../src';

describe('unzipWith', () => {
    it('combines columns with an iteratee', () => {
        expect(
            unzipWith(
                [
                    [1, 2],
                    [10, 20]
                ],
                (a, b) => a + b
            )
        ).toEqual([11, 22]);
    });
});
