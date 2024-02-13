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

export function __dirname(dir) {
  const _dirname = dirname(fileURLToPath(dir))

  if (!!global) {
    globalThis.__dirname = _dirname;
  } else {
    global.__dirname = _dirname;
  }
  return _dirname
}

export default __dirname;
