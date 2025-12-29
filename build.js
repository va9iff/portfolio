// @ts-check

import esbuild from 'esbuild'

import { glob } from 'glob'

const cssFiles = glob.sync('./src/root/**/*.css')
const jsFiles = glob.sync('./src/root/**/*.js');
const htmlFiles = glob.sync('./src/root/**/*.html');

import { exec } from 'child_process'

import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const currentFile = fileURLToPath(import.meta.url);
const dir = dirname(currentFile);
/** @param { string } s */ 
const r = s => join(dir, s)

import { rm } from 'fs'

/** @param { string } command */
function execPromise(command) {
    console.log(command)
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, _stderr) => {
            if (error) {
                console.error(`Error executing rsync: ${error.message}`);
                return reject(error);
            }
            resolve(stdout);
        });
    });
}


//// assets
//const source = join(dir, 'src', 'root', 'assets')
//const destination = join(dir, 'docs')
//const command = `rsync -avz ${source} ${destination}`
//// or whole
//const command = `rsync -avz ${r("./src/root")} ${r("./docs")}`
//or actually just use cp

/******************************/

// remove the docs/dist folder
await new Promise((res, rej) => {
  rm(r("docs"), { recursive: true, force: true }, (err) => {
    if (err) {
      console.error(`rm err: ${err}`);
      rej(err)
    }
    res(0)
  })
})

// copy whole dir with 
await execPromise(`cp -Tr ${r("./src/root")} ${r("./docs")}`)


// then override with minified versions
console.log('css...')
esbuild.build({
    entryPoints: [ ...cssFiles ], 
    outdir: './docs', 
    minify: true,
    bundle: false,
}).catch(() => process.exit(1));

console.log('js...')
esbuild.build({
  entryPoints: [ ...jsFiles ],
  outdir: "./docs",
  minify: true,
  bundle: false,
  format: "esm",
  target: "es2022",
})

console.log('build done')

//console.log('html...')
//esbuild.build({
//  entryPoints: [ ...htmlFiles ],
//  outdir: './docs',
//  bundle: true,
//  minify: true,
//}).catch(() => process.exit(1));



//const commands = [
//  `rsync -avz ${source} ${destination}`,
//  `rsync -av --include='*/' --include='*.html' --exclude='*' ${r("./src/root")}/ ${r("./docs")}/`
//]
//
//for (const command of commands)
//  exec(command, (error, stdout, stderr) => {
//    if (error) {
//      console.log(command)
//      console.error(`Error executing rsync: ${error.message}`);
//      return;
//    }
//    if (stderr) {
//      console.log(command)
//      console.error(`Rsync stderr: ${stderr}`);
//      return;
//    }
//    console.log(`Rsync Output: ${stdout}`);
//  });
//
