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
import {test as lib} from "./index.js";

test('synchronous passing test', (t) => {
	const result = lib("World");
  assert.strictEqual(result, "Hello World");
});

