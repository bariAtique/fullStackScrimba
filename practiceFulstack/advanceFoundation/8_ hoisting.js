 /**JavaScript Hoisting    
 *
 * Hoisting is a JavaScript mechanism where variables and function declarations
 * are moved to the top of their containing scope during the compilation phase,
 * before the code is executed. This means you can use variables and functions
 * before they are declared in the code.
 *
 * Key points about hoisting:
 * - Variable declarations (var) are hoisted, but not their initializations.
 * - Function declarations are fully hoisted (both declaration and definition).
 * - let and const are hoisted but not initialized (Temporal Dead Zone).
 * - Hoisting can lead to unexpected behavior if not understood properly.
 *
 * Examples:
 * - var x; // Declaration hoisted
 * - x = 5; // Assignment stays in place
 * - function foo() {} // Entire function hoisted
 */ 
