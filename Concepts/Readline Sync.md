Node.js has an API called **readline** that lets javaScript programs read input from command line. For now we use a readline library called **readline-sync**. 

To install readline-sync, see if there's already a package.json file.

```terminal
## see if there's already a package.json file
$ ls package.json
package.json
```

```terminal
$ ls package.json
ls: cannot access 'package.json': No such file or directory

$ npm init -y
Wrote to .../package.json:

{
  "name": "Downloads",
  "version": "1.0.0",
  "description": "",
  "main": "index.js",
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC"
}
```

if not, run `npm init -y`

 Once you have a `package.json` file, you can install `readline-sync` as follows:

```terminal
$ npm install readline-sync --save
npm notice created a lockfile as package-lock.json. You should commit this file.
npm WARN Downloads@1.0.0 No description
npm WARN Downloads@1.0.0 No repository field.

+ readline-sync@1.4.10
added 1 package from 1 contributor and audited 1 package in 0.423s
found 0 vulnerabilities
```

The `npm install` command with a `--save` option installs the package in the `node_modules` subdirectory of your current directory. By placing it in this subdirectory, any Node.js programs stored in the current directory can require the package with a simple call to `require`, as we'll see in the following example:

```js
let rlSync = require('readline-sync');
let name = rlSync.question("What's your name?\n");
console.log(`Good Morning, ${name}!`);
```

