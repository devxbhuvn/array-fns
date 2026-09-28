import { describe, expect, it } from 'vitest';
import { transpose } from '../src';

describe('transpose', () => {
    it('transposes a matrix', () => {
        expect(
            transpose([
                [1, 2],
                [3, 4]
            ])
        ).toEqual([
            [1, 3],
            [2, 4]
        ]);
    });
});
