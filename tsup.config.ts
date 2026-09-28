import { defineConfig } from 'tsup';
import { readdirSync } from 'node:fs';
import { join } from 'node:path';

const functionEntries = Object.fromEntries(
    readdirSync(join('src', 'functions'))
        .filter((file) => file.endsWith('.ts'))
        .map((file) => {
            const name = file.replace(/\.ts$/, '');
            return [name, `src/functions/${file}`];
        })
);

export default defineConfig({
    entry: {
        index: 'src/index.ts',
        ...functionEntries
    },
    format: ['esm', 'cjs'],
    dts: true,
    clean: true,
    splitting: false,
    sourcemap: false,
    treeshake: true
});
