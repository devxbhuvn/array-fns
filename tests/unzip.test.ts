import { describe, expect, it } from 'vitest';
import { unzip } from '../src';

describe('unzip', () => {
    it('converts paired entries into two arrays', () => {
        expect(
            unzip([
                [1, 'a'],
                [2, 'b'],
                [3, 'c']
            ])
        ).toEqual([
            [1, 2, 3],
            ['a', 'b', 'c']
        ]);
    });
});
