/**
 * errorConstructor.js
 *
 * In JavaScript, the Error constructor is used to create error objects that represent runtime errors. It can be used to throw custom errors in your code, allowing you to provide more specific error messages and handle errors more effectively.
 *
 * The Error constructor can be called with a message argument that describes the error. For example:
 * const error = new Error('Something went wrong!');  
 * console.log(error.message); // 'Something went wrong!'
 *
 * You can also create custom error types by extending the Error class. This allows you to create more specific error classes that can be used to represent different types of errors in your application. For example:
 * class CustomError extends Error {
 *   constructor(message) {
 *     super(message);
 *     this.name = 'CustomError';
 *   }
 * }
 *
 * const customError = new CustomError('This is a custom error!');
 * console.log(customError.name); // 'CustomError'
 * console.log(customError.message); // 'This is a custom error!'
 * In this example, we define a CustomError class that extends the built-in Error class. We call the super() method to pass the error message to the parent Error constructor and set the name property to 'CustomError' for better identification of the error type.
 *
 * The Error constructor also has several properties that can be useful for debugging, such as name, message, and stack. The stack property provides a stack trace that can help you identify where the error occurred in your code.  
 * In summary, the Error constructor in JavaScript is a powerful tool for creating and handling errors in your code. It allows you to create custom error types, provide specific error messages, and access useful properties for debugging purposes.
 *
 * Example:
 * class CustomError extends Error {
 *   constructor(message) {
 *     super(message);
 *     this.name = 'CustomError';
 *   }
 * }
 *
 * function doSomething() {
 *  throw new CustomError('An error occurred while doing something!');
 * }
 *
 * try {
 * doSomething();
 * } catch (error) {
 * console.log(error.name); // 'CustomError'
 * console.log(error.message); // 'An error occurred while doing something!'
 * console.log(error.stack); // Stack trace of the error
 * }  
 * In this example, we define a CustomError class and a function doSomething() that throws an instance of CustomError. We then use a try-catch block to catch the error and log its name, message, and stack trace to the console for debugging purposes. This demonstrates how the Error constructor can be used to create and handle custom errors in JavaScript.
 *  
 * 
 */