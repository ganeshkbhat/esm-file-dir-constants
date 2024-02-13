/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/customevents
 * npmjs Link: https://www.npmjs.com/package/
 * File: 
 * File Description: 
 * 
*/

/* eslint no-console: 0 */

'use strict';

import { expect } from 'chai';
import { getDirname, getFilename } from "../index.js";
// import { __filename, __dirname, getDirname, getFilename } from "../index.js";

import { dirname, normalize, resolve } from "path";
import { fileURLToPath } from "url";

// let file = new URL(import.meta.url).pathname;
// let dir = dirname(fileURLToPath(import.meta.url));

let file = process.cwd() + "\\test\\test.file.js";
let dir = process.cwd() + "\\test";

describe('[request tests] Tests to ', () => {

  before(() => { });
  after(() => { });

  // it('should match the statically provided filepath from path received from __filename function', () => {
  //   let actual = normalize(file);
  //   let expected = __filename(import.meta.url);
  //   expect(actual).to.equal(expected);
  // });

  it('should match the statically provided filepath from path received from getFilename function', () => {
    let actual = file;
    let expected = getFilename();
    expect(actual).to.equal(expected);
  });

  // it('should match the statically provided filepath from path received from __dirname function', () => {
  //   let actual = normalize(resolve(dir));
  //   let expected = resolve(getDirname());
  //   expect(actual).to.equal(expected);
  // });

  it('should match the statically provided filepath from path received from getDirname function', () => {
    let actual = dir;
    let expected = resolve(getDirname());
    expect(actual).to.equal(expected);
  });

});
