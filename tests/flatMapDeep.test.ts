import { describe, expect, it } from 'vitest';
import { flatMapDeep } from '../src';

describe('flatMapDeep', () => {
    it('maps and deeply flattens', () => {
        expect(flatMapDeep([1, 2], (value) => [value, [value * 10]])).toEqual([1, 10, 2, 20]);
    });
});
