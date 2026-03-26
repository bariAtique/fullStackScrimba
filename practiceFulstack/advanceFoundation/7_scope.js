/**
 * scope.js
 *
 * In JavaScript, scope refers to the accessibility of variables and functions in different parts of the code.
 * There are three main types of scope in JavaScript:
 * 1. Global Scope: Variables and functions declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
 * 2. Function Scope: Variables and functions declared inside a function are in the function scope and can only be accessed within that function.
 * 3. Block Scope: Variables declared with let or const inside a block (e.g., inside an if statement or a loop) are in the block scope and can only be accessed within that block.
 * Understanding scope is crucial for managing variable accessibility and avoiding naming conflicts in JavaScript. It also plays a significant role in closures, where inner functions have access to variables from their outer functions.
 *
 * Example:
 * function outerFunction() {
 *   var outerVariable = 'I am outside!';
 *  function innerFunction() {
 *  console.log(outerVariable); // Accessing outer variable
 * }
 * innerFunction();
 * }
 * outerFunction(); // Output: 'I am outside!'
 * In this example, the innerFunction has access to the outerVariable declared in the outerFunction due to function scope. However, if we try to access outerVariable outside of outerFunction, it will result in an error since it is not in the global scope.
 *
 * In summary, understanding scope in JavaScript is essential for writing clean and efficient code, as it determines where variables and functions can be accessed and helps prevent unintended side effects.
 *  
 * 
 */