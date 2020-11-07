
import { DEFAULT_EXTENSIONS } from '@babel/core'

import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";
import resolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify";

import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel'

// import babel from '@rollup/plugin-babel'
// import external from 'rollup-plugin-peer-deps-external'
// import postcss from 'rollup-plugin-postcss'



const input = "src/main.js";
const outputName = "MyProject";
const external = Object.keys(pkg.peerDependencies || {});
const esExternal = external.concat(Object.keys(pkg.dependencies || {}));
const banner =
`/*
 * ${pkg.name}
 * ${pkg.description}
 * ${pkg.repository.url}
 * v${pkg.version}
 * ${pkg.license} License
 */
`;

export default [
  {
    input: input,
    output: {
      dir: "lib",
      name: outputName,
    //   format: "umd",
      format: "cjs",
      banner: banner,
      preserveModules:true,
      global:{
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes',
      }
    },
    // input: 'src/index.ts',
    // output: {
    //   file: 'dist/bundle.js',
    //   format: 'cjs'
    // },
    external:[
        'react',
        'react-dom',
        'prop-types',
    ],
    // external: external,
    
    plugins: [
        typescript({lib: ["es5", "es6", "dom"], target: "es5"}),
        babel({
            "presets": [
                "@babel/preset-env",
                "@babel/preset-react",
                "@babel/preset-typescript",
                // '@babel/react'
              ],
            extensions: [
              ...DEFAULT_EXTENSIONS,
              '.ts',
              '.jsx',
              '.tsx'
            ],
            plugins: [
              "@babel/plugin-transform-arrow-functions",
              '@babel/plugin-proposal-class-properties',
              '@babel/plugin-proposal-object-rest-spread',
              '@babel/plugin-proposal-optional-chaining',
              '@babel/plugin-syntax-dynamic-import',
    
            ],
            exclude: 'node_modules/**',
          }),
          resolve({
            browser: true,
            resolveOnly: [
              /^(?!react$)/,
              /^(?!react-dom$)/,
              /^(?!prop-types)/,
            ],
          }),
    //    typescript({  tsconfig: "tsconfig.json" }),
    //    babel({
    //     babelrc: false,
    //     exclude: [`node_modules/**`],
    //     ignore: ['**/*.scss'],
    //     plugins: [ "@babel/plugin-proposal-class-properties"],
    //     // presets: ['@babel/react'],
    //     "presets": [
    //       "@babel/preset-env",
    //       "@babel/preset-react",
    //       "@babel/preset-typescript"
    //     ]
    //     // plugins: ['external-helpers'],
    //   }),
    //   resolve(),
      commonjs(),
      buble(),
      
      
    ]
  },
]