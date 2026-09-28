import { describe, expect, it } from 'vitest';
import { times } from '../src';

describe('times', () => {
    it('builds an array from indexes', () => {
        expect(times(3, (index) => index * 2)).toEqual([0, 2, 4]);
    });
});
