
import { DEFAULT_EXTENSIONS } from '@babel/core'

import buble from "rollup-plugin-buble";
import commonjs from "rollup-plugin-commonjs";
import pkg from "./package.json";
import resolve from "rollup-plugin-node-resolve";
import uglify from "rollup-plugin-uglify";

import typescript from 'rollup-plugin-typescript';
import babel from 'rollup-plugin-babel';
import esbuild from 'rollup-plugin-esbuild';

// import path from 'path';
// import babel from '@rollup/plugin-babel'
import external from 'rollup-plugin-peer-deps-external'
// import postcss from 'rollup-plugin-postcss'



const input = "src/main.js";
const outputName = "react-twoo";
// const external = Object.keys(pkg.peerDependencies || {});
// const esExternal = external.concat(Object.keys(pkg.dependencies || {}));
const banner =
`/*
 * ${pkg.name}
 * ${pkg.description}
 * ${pkg.repository.url}
 * v${pkg.version}
 * ${pkg.license} License
 */
`;

export const cjsBundle  = 
  {
    input: input,
    exclude: '**/node_modules/**',
    runtimeHelpers: true,
    output: {
      file:pkg.main,
      // preserveModules:true,
      // dir: './lib',
      name: outputName,
    //   format: "umd",
      format: "umd",
      banner: banner,
      
      // preserveModulesRoot:'lib',
      globals:{
        react: 'React',
        'react-dom': 'ReactDOM',
        'prop-types': 'PropTypes',
        'pixi.js': 'PIXI',
        'pixi': 'PIXI',
      }
    },
    external:[
        'react',
        'react-dom',
        'pixi.js',
        'pixi',
        'math',
        'prop-types',
    ],
    // external:external(),    
    plugins: [
      external(),
       esbuild({
        include: /\.[jt]sx?$/,
        exclude: /node_modules/, // default
        sourceMap: false, // default
        minify: process.env.NODE_ENV === 'production',
        target: 'es2017', // default, or 'es20XX', 'esnext'
        jsxFactory: 'React.createElement',
        jsxFragment: 'React.Fragment',
        // Like @rollup/plugin-replace
        define: {
          __VERSION__: '"x.y.z"',
        },
        // Add extra loaders
        loaders: {
          // Add .json files support
          // require @rollup/plugin-commonjs
          '.json': 'json',
          // Enable JSX in .js files too
          '.js': 'jsx'
        }
        }),
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
              "@babel/plugin-syntax-class-properties",
              '@babel/plugin-proposal-class-properties',
              // '@babel/plugin-proposal-object-rest-spread',
              // '@babel/plugin-proposal-optional-chaining',
              // '@babel/plugin-syntax-dynamic-import',
    
            ],
            exclude: 'node_modules/**',
          }),
          
          resolve({
            // preferBuiltins:true,
            // browser: true,
            // resolveOnly: [
            //   /^(?!react$)/,
            //   /^(?!pixi$)/,
            //   /^(?!react-dom$)/,
            //   /^(?!prop-types)/,
            // ],
          }),
      commonjs(),
      buble(),
      
      
    ]
  }


export default [cjsBundle]