# Project template
Project template designed for development, debugging, testing, documenting, and producing typescript project.

## Used frameworks/libraries
- Project uses `Node.js`
- Development and debugging is done using `VS Code` with `Debugger for Chrome` extension.
- `karma` and `jasmine` for testing framework.
- `TypeDoc` for generating documentation
- `rollup.js` for bundling
- `tslint` for maintaining readable code

## Debug (VS Code)
### Development
Debug your project during development
1. Serve the project for transpiling and watching .ts files and tests.
```
npm run serve
```
2. Go to debug panel and then start debugging with `Attach Client+Server`.

### Launch
Launch and debug your project (files are not watched for tranpiling and testing)
1. Go to debug panel and then start debugging with `Launch Client+Server`.

## Documentation
Generate documentations using `TypeDoc`
```
npm run doc
```

Define a symbol and put a doc comment above the symbol for generating documentation.
```ts
/**
 * doc comment will be picked up by the tool
 */
/** doc comment will be picked up by the tool */

// single line comments will be ignored
/* this is not doc comment */
```

## Check (before push)
```
npm run check
```
Checks the tests and the lint and fails if they are not satisfied.

## TODO
- add testing for backend
