# esmconstants
work with esm __filepath and __dirname pathing constants in imports as in commonjs nodejs environment

Demos can be found in the folder [demos](https://github.com/ganeshkbhat/esm-file-dir-constants/tree/main/demos)

#### USAGE:

```

import { getDirname, getFilename } from "./node_module/esm-constants/src/polyfill.__dirname.regex.js";
import { default as getpaths } from "esmconstants";

const __dirname = getDirname();
console.log(__dirname);

const __filename = getFilename();
console.log(__filename);

```
