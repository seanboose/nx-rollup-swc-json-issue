# nx-rollup-swc-json-issue
repro of issue in Nx with importing JSON in a buildable lib using SWC

## Steps for creating this reproduction:

generate nx repo with `npx create-nx-workspace@latest`
- choose React for app framework
- choose emotion for styling

generatd a lib with `npx nx generate @nrwl/react:library react-buildable-swc-2 --buildable --compiler=swc --no-interactive`

add `"resolveJsonModules": true` to `tsconfig.json`

add a .json file, import it in the default component, logg contents to console.

build with `npx nx build react-buildable-swc`

see error:
```
❯ nx build react-buildable-swc --skip-nx-cache

> nx run react-buildable-swc:build

Bundling react-buildable-swc...
Error during bundle: Error:
  × Expected ';', '}' or <eof>
   ╭─[/Users/seanboose/repos/nx-rollup-swc-json-issue/nx-rollup-swc-json-issue/libs/react-buildable-swc/src/lib/test.json:2:3]
 2 │ "someKey": "someValue"
   ·          ─
   ╰────

Error:
  ☞ This is the expression part of an expression statement
   ╭─[/Users/seanboose/repos/nx-rollup-swc-json-issue/nx-rollup-swc-json-issue/libs/react-buildable-swc/src/lib/test.json:2:3]
 2 │ "someKey": "someValue"
   · ─────────
   ╰────


Caused by:
    0: failed to process input file
    1: Syntax Error
Bundle failed: react-buildable-swc
```
