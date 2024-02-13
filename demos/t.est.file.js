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
import { test as lib } from "../test/index.js";

import { __filename } from "../src/polyfill.__filename.js";
import { __dirname } from "../src/polyfill.__dirname.js";
import { default as checks } from "../src/polyfill.__dirname.regex.js";
import { dirname, normalize } from "path";
import { fileURLToPath } from "url";

const file = new URL(import.meta.url).pathname;
const dir = dirname(fileURLToPath(import.meta.url))
const { getDirname, getFilename } = checks;

// test('synchronous passing test', (t) => {
// 	const result = lib("World");
//   assert.strictEqual(result, "Hello World");
// });

test('check if __filename is defined', (t) => {
  const filename = __filename;
  assert.strictEqual(normalise(filename), normalize(file));
});

test('check if __dirname is defined', (t) => {
  const dirname = __dirname;
  assert.strictEqual(normalise(dirname), normalise(dir));
});

test('check if getDirname is defined', (t) => {
  const dirname = getDirname();
  assert.strictEqual(normalise(dirname), normalise(dir));
});

test('check if getFilename is defined', (t) => {
  const filename = getFilename();
  assert.strictEqual(normalise(filename), normalise(file));
});
