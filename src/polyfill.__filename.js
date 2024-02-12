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

import { dirname } from "path"
import { fileURLToPath } from "url"

const __filename = new URL(import.meta.url).pathname;

if (!!global) {
  globalThis.__filename = __filename;
} else {
  global.__filename = __filename;
}

export default __filename;

