import { describe, expect, it } from 'vitest';
import { choice } from '../src';

describe('choice', () => {
    it('aliases sample', () => {
        expect(choice([7])).toBe(7);
        expect(choice([])).toBeUndefined();
    });
});
