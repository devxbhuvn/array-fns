import { describe, expect, it } from 'vitest';
import { tap } from '../src';

describe('tap', () => {
    it('invokes an interceptor without mutating the input', () => {
        const input = [1, 2];
        const seen: number[][] = [];
        const result = tap(input, (value) => {
            seen.push(value);
            value.push(3);
        });
        expect(seen[0]).toEqual([1, 2, 3]);
        expect(result).toEqual([1, 2]);
        expect(input).toEqual([1, 2]);
    });
});
