/**
 * import/export
 * 
 * Modules can export values (variables, functions, classes, etc.) and import them in other modules. This allows for code organization and reuse.
 * - Exporting: You can export values using the `export` keyword. There are two types of exports: named exports and default exports.
 *   - Named exports: You can export multiple values by name. For example:
 *     export const myVariable = 42;
 *    export function myFunction() {
 *     console.log('Hello, world!');
 *   }
 *  - Default exports: You can export a single value as the default export. For example:
 *    export default function() { 
 *    console.log('This is the default export');
 *  }
 * # - Importing: You can import values from other modules using the `import` keyword. For example:
 *  import { myVariable, myFunction } from './myModule.js'; 
 * #  import myDefaultFunction from './myModule.js';
 * In this example, we are importing the named exports `myVariable` and `myFunction` from `myModule.js`, as well as the default export (which we can name anything we want, in this case `myDefaultFunction`).
 * # Modules can be imported and exported in various ways, allowing for flexible code organization. You can also use aliases when importing to avoid naming conflicts or to improve readability. For example:
 * import { myVariable as variable, myFunction as func } from './myModule.js';
 * In this example, we are importing `myVariable` and `myFunction` but giving them new names (`variable` and `func`) to avoid potential naming conflicts in our code.
 * # In summary, the import/export system in JavaScript allows for modular code organization and reuse by enabling you to export values from one module and import them into another. This promotes better code structure and maintainability, making it easier to manage larger codebases.
 * 
 * Example:
 * // myModule.js
 * export const myVariable = 42;
 * export function myFunction() {
 *  console.log('Hello, world!');
 * }
 * export default function() {
 *  console.log('This is the default export');
 * }
 * 
 * // main.js
 * import { myVariable, myFunction } from './myModule.js';
 * import myDefaultFunction from './myModule.js';
 * console.log(myVariable); // 42
 * myFunction(); // 'Hello, world!'
 * myDefaultFunction(); // 'This is the default export'
 * In this example, we have a module `myModule.js` that exports a variable, a function, and a default function. In `main.js`, we import these exports and use them in our code, demonstrating how the import/export system works in JavaScript.
 * 
 */