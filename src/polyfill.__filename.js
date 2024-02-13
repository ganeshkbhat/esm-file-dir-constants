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

import { dirname } from "path";
import { fileURLToPath } from "url";

export function __filename(file) {
  const _filename = new URL(file).pathname;

  if (!!global) {
    globalThis.__filename = _filename;
  } else {
    global.__filename = _filename;
  }
  return _filename;
}

export default __filename;

