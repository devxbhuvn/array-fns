import { describe, expect, it } from 'vitest';
import { flattenDeep } from '../src';

describe('flattenDeep', () => {
    it('fully flattens nested arrays', () => {
        expect(flattenDeep([1, [2, [3, [4]]]])).toEqual([1, 2, 3, 4]);
    });
});
