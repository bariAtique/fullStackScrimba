/**
 * Switch statement
 *  - A switch statement is a control flow statement that allows you to execute different blocks of code based on the value of an expression.
 *  - It is often used as an alternative to multiple if-else statements when you have a large number of conditions to check.
 * Syntax:
 * switch (expression) {
 *   case value1:
 *     // code to be executed if expression === value1
 *     break;
 *   case value2:
 *     // code to be executed if expression === value2
 *     break;
 *  ... *   default:
 *     // code to be executed if expression doesn't match any case
 * }
 * - The switch statement evaluates the expression and compares it to the values specified in each case. If a match is found, the corresponding block of code is executed until a break statement is encountered. If no match is found, the default block is executed (if provided).
 * - Switch statements can be more efficient and easier to read than multiple if-else statements when dealing with a large number of conditions, especially when the conditions are based on discrete values. 
 * - However, it's important to note that switch statements only work with discrete values (like numbers or strings) and cannot be used for more complex conditions that require logical operators or ranges. In such cases, if-else statements may be more appropriate.
 * - In summary, switch statements are a useful tool for handling multiple conditions based on discrete values, providing a cleaner and more efficient alternative to multiple if-else statements in certain scenarios.
 * - Example: 
 * switch (day) {
 *  case 'Monday':
 *   console.log('Start of the week');
 *  break;
 * *  case 'Friday':
 * *   console.log('End of the week');
 * *  break;
 * *  default:
 * * *   console.log('Midweek');
 *  
 * 
 * 
 */