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

import { default as f } from "./src/polyfill.__filename.js";
import { default as d } from "./src/polyfill.__dirname.js";
import { getDirname as gd, getFilename as gf } from "./src/polyfill.__dirname.regex.js";

export const __filename = f;
export const __dirname = f;
export const getDirname = gd;
export const getFilename = gf;

export default {
  __filename: f,
  __dirname: d,
  getDirname: gd,
  getFilename: gf
}
