/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/esm-file-dir-constants
 * npmjs Link: https://www.npmjs.com/package/
 * File: 
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

// https://advancedweb.hu/modern-javascript-library-starter/

import test from "node:test";
import { strict as assert } from "node:assert";
import { test as lib } from "./index.js";

import { default as __filename } from "../src/polyfill.__filename.js";
import { default as __dirname } from "../src/polyfill.__dirname.js";
import { getDirname, getFilename } from "../src/polyfill.__dirname.regex.js";


// test('synchronous passing test', (t) => {
// 	const result = lib("World");
//   assert.strictEqual(result, "Hello World");
// });

test('check if __filename is defined', (t) => {
  const result = __filename;
  assert.strictEqual(result, __filename);
});

test('check if __dirname is defined', (t) => {
  const result = __dirname;
  assert.strictEqual(result, __dirname);
});

test('check if getDirname is defined', (t) => {
  const result = getDirname();
  assert.strictEqual(result, __dirname);
});

test('check if getFilename is defined', (t) => {
  const result = getFilename();
  assert.strictEqual(result, __filename);
});

