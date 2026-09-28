import { defineConfig } from 'vitest/config';

export default defineConfig({
    test: {
        environment: 'node',
        include: ['tests/**/*.test.ts'],
        pool: 'threads',
        maxWorkers: 1,
        minWorkers: 1,
        coverage: {
            provider: 'v8',
            include: ['src/functions/**/*.ts', 'src/utils/**/*.ts'],
            exclude: ['src/types/**', 'src/utils/index.ts'],
            thresholds: {
                lines: 85,
                branches: 75,
                functions: 85,
                statements: 85
            }
        }
    }
});
