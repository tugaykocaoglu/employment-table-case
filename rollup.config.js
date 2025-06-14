// rollup.config.js
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import replace from '@rollup/plugin-replace';
import terser from '@rollup/plugin-terser';
import summary from 'rollup-plugin-summary';
import copy from 'rollup-plugin-copy';

export default {
  input: 'main.js', // projenin gerçek giriş dosyası
  output: {
    // tek dosya mı, yoksa kod split (dinamik import) kullanıyorsan dir:
    dir: 'dist',
    format: 'esm',
    sourcemap: true,
    entryFileNames: '[name].js',
  },
  onwarn(warning, warn) {
    // `THIS_IS_UNDEFINED` uyarılarını yoksay
    if (warning.code === 'THIS_IS_UNDEFINED') return;
    warn(warning);
  },
  plugins: [
    // 1) process.env ve Reflect.decorate polyfill
    replace({
      preventAssignment: true,
      values: {
        // Immer/RTK vs kod bellek içi
        'process.env.NODE_ENV': JSON.stringify('production'),
        'Reflect.decorate': 'undefined',
      },
    }),

    // 2) node_modules içindeki bare imports ve browser girişleri çöz
    resolve({
      browser: true,
      preferBuiltins: false,
    }),

    // 3) CommonJS modüllerini ESM’e çevir
    commonjs(),

    // 4) Kopyalanacak statik dosyalar
    copy({
      targets: [
        {src: 'index.html', dest: 'dist'},
        {src: 'public/*', dest: 'dist'},
      ],
      verbose: true,
    }),

    // 5) Minify
    terser({
      ecma: 2021,
      module: true,
      warnings: true,
      mangle: {
        properties: {regex: /^__/},
      },
    }),

    // 6) Build özeti
    summary(),
  ],
};
