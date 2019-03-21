import commonjs from "rollup-plugin-commonjs"
import resolve from "rollup-plugin-node-resolve"
import typescript from 'rollup-plugin-typescript2';

const config = ({ input = undefined, output = {}, plugins = [] }) => {
  return {
      input: input,
      output: {
          sourcemap: true,
          ...output,
      },
      plugins: [
          resolve({preferBuiltins: true}),
          commonjs(),
          typescript(),
          ...plugins
      ]
  }
}

export default [
  config({
    input: 'src/server/index.ts',
    output: {
      file: 'dist/server/index.js',
      format: 'cjs',
    }
  }),
  config({
    input: 'src/app/index.ts',
    output: {
      file: 'dist/app/index.js',
      format: 'esm',
    }
  })
];