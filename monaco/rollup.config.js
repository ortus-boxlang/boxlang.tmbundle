import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';

export default [
    // ES Module build
    {
        input: 'src/lib.js',
        output: {
            file: 'dist/index.esm.js',
            format: 'es',
            sourcemap: true
        },
        external: ['monaco-editor'],
        plugins: [
            resolve(),
            commonjs(),
            typescript({
                declaration: true,
                declarationDir: 'dist',
                rootDir: 'src'
            })
        ]
    },
    
    // CommonJS build
    {
        input: 'src/lib.js',
        output: {
            file: 'dist/index.js',
            format: 'cjs',
            sourcemap: true,
            exports: 'auto'
        },
        external: ['monaco-editor'],
        plugins: [
            resolve(),
            commonjs()
        ]
    },
    
    // UMD build for browser
    {
        input: 'src/lib.js',
        output: {
            file: 'dist/index.umd.js',
            format: 'umd',
            name: 'BoxLangMonaco',
            sourcemap: true,
            globals: {
                'monaco-editor': 'monaco'
            }
        },
        external: ['monaco-editor'],
        plugins: [
            resolve(),
            commonjs()
        ]
    }
];
