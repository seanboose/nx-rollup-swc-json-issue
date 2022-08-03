# nx-rollup-swc-json-issue
repro of issue in Nx with importing JSON in a buildable lib using SWC

## Steps used to create this reproduction:

1. generate nx repo with `npx create-nx-workspace@latest`
- choose React for app framework
- choose emotion for styling

2. generate lib with `npx nx generate @nrwl/react:library react-buildable-swc --buildable --compiler=swc --no-interactive`

3. add `"resolveJsonModules": true` to `tsconfig.json`

4. add a .json file, import it in the default component, logg contents to console.

5. build with `npx nx build react-buildable-swc`

6. see error:
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
