import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import uglify from 'rollup-plugin-uglify';

// `yarn build` -> `production` is true
// `yarn dev` -> `production` is false
const production = !process.env.ROLLUP_WATCH;

export default {
  input: 'src/index.js',
  output: {
    file: 'public/bundle.js',
    format: 'iife', // immediately-invoked function expression — suitable for <script> tags
    name: 'App',
    sourcemap: true
  },
	plugins: [
		resolve(), // tells Rollup how to find packages within node_modules
		commonjs(), // converts node modules to ES modules
		production && uglify() // minify, but only in production
	]
};
