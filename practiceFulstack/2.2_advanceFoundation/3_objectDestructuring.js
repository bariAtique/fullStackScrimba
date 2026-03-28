/**
 * destructuring assignment with objects
 * Destructuring assignment can also be used with objects to extract properties into variables. The syntax for object destructuring is as follows:
 * const { property1, property2 } = object;
 * For example:
 * const person = { name: 'Alice', age: 30 };
 * const { name, age } = person;
 * console.log(name); // 'Alice'
 * console.log(age); // 30
 * In the context of a ternary operator, you can use object destructuring to assign values based on a condition. For example:
 * const isLoggedIn = true;
 * const { greeting, action } = isLoggedIn ? { greeting: 'Welcome back!', action: 'Logout' } : { greeting: 'Please log in.', action: 'Login' };
 * console.log(greeting); // 'Welcome back!'
 * console.log(action); // 'Logout'
 * In this example, if the isLoggedIn condition is true, the greeting and action variables will be assigned the values from the first object. If the condition were false, they would be assigned the values from the second object instead.
 * 
 * 
 */