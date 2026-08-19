import { describe, expect, it } from 'vitest';
import { sortWith } from '../src';

describe('sortWith', () => {
    it('sorts with an explicit comparator', () => {
        expect(sortWith(['short', 'very long title', 'medium'], (left, right) => left.length - right.length)).toEqual(['short', 'medium', 'very long title']);
    });

    it('supports multiple comparators', () => {
        const input = [
            { group: 1, name: 'B' },
            { group: 1, name: 'A' },
            { group: 2, name: 'C' }
        ];

        expect(
            sortWith(
                input,
                (left, right) => left.group - right.group,
                (left, right) => left.name.localeCompare(right.name)
            )
        ).toEqual([
            { group: 1, name: 'A' },
            { group: 1, name: 'B' },
            { group: 2, name: 'C' }
        ]);
    });

    it('returns a copy when no comparator is supplied', () => {
        const input = [2, 1];
        const result = sortWith(input);
        expect(result).toEqual(input);
        expect(result).not.toBe(input);
    });
});
