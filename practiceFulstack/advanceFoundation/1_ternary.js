/**
 * Destructuring assignment is a JavaScript expression that makes it possible to unpack values from arrays, or properties from objects, into distinct variables.
 * It can be used in variable declarations, function parameters, and more.
 * The syntax for destructuring assignment is as follows:
 * For arrays:
 * const [a, b] = [1, 2];
 * console.log(a); // 1
 * console.log(b); // 2
 * For objects:
 * const { name, age } = { name: 'Alice', age: 30 };
 * console.log(name); // 'Alice'
 * console.log(age); // 30
 * Destructuring assignment can also be used with default values, nested objects, and more complex structures.
 * It provides a concise and readable way to extract values from data structures. 
 * 
 * In the context of a ternary operator, destructuring can be used to assign values based on a condition. For example:
 * const condition = true;
 * const [a, b] = condition ? [1, 2] : [3, 4];
 * console.log(a); // 1
 * console.log(b); // 2
 * In this example, if the condition is true, a and b will be assigned the values 1 and 2, respectively. If the condition were false, they would be assigned 3 and 4 instead.
 * 
 */

// Example of destructuring assignment with a ternary operator
const isLoggedIn = true;
const [greeting, action] = isLoggedIn ? ['Welcome back!', 'Logout'] : ['Please log in.', 'Login'];
console.log(greeting); // 'Welcome back!'
console.log(action); // 'Logout'
