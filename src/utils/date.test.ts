import { describe, it, expect } from 'vitest';
import { formatDate } from './date';

describe('formatDate utility', () => {
    it('formats a date object correctly', () => {
        const testDate = new Date('2026-01-01T00:00:00');
        expect(formatDate(testDate)).toBe('January 1, 2026');
    });
});