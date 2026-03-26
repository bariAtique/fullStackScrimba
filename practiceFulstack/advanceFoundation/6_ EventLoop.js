/**
 * event loop
 *  - The event loop is a mechanism that allows JavaScript to handle asynchronous operations without blocking the execution of other code.
 *  - It continuously checks the call stack and the callback queue, moving functions from the queue to the stack when the stack is empty.
 *  - This enables non-blocking behavior for operations like timers, I/O operations, and user interactions.
  *  - The event loop is a fundamental part of JavaScript's concurrency model, allowing it to efficiently manage multiple tasks without freezing the user interface.
  * - In summary, the event loop is a crucial component of JavaScript that enables asynchronous programming and ensures a responsive user experience by managing the execution of code and handling events efficiently.
  * 
  * Example:
  * console.log('Start');
  * setTimeout(() => {
  * console.log('Inside setTimeout');
  * }, 0);
  * console.log('End');
  * In this example, the 'Start' and 'End' messages will be logged to the console before the 'Inside setTimeout' message, demonstrating how the event loop handles asynchronous operations. Even though the timeout is set to 0 milliseconds, it still gets placed in the callback queue and will only execute after the current call stack is cleared.
 * 
 */