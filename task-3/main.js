// Functions:
// 1- Named Functions (Regluar Function )
// Named functions are function declarations that include a name.
// They are also sometimes referred to as traditional functions or function declarations. Here is an example:

// function helloWorld() {
//     console.log('Hello World!'); 
// }

// 2- Expression Function 
// A function expression is very similar to, and has almost the same syntax as, a function declaration. 
// The main difference between a function expression and a function declaration is the function name,
// which can be omitted in function expressions to create anonymous functions. A function expression
// can be used as an IIFE (Immediately Invoked Function Expression) which runs as soon as it is defined.
// See also the chapter about functions for more information.

// let helloWorld = function () { 
//   console.log('Hello World!'); 
// }

// 3- Arrow Function
//Arrow functions are a shorthand syntax for anonymous functions that was introduced in ECMAScript 6 (ES6).
//They are also sometimes referred to as fat arrow functions or lambda shorthand. Here is an example:

// let helloWorld = () => { 
//     console.log('Hello World!'); 
// }

// Conditional Statements:
// Very often when you write code, you want to perform different actions for different decisions.
// You can use conditional statements in your code to do this.
// In JavaScript we have the following conditional statements:
//      * Use if to specify a block of code to be executed, if a specified condition is true
//      * Use else to specify a block of code to be executed, if the same condition is false
//      * Use else if to specify a new condition to test, if the first condition is false
//      * Use switch to specify many alternative blocks of code to be executed

// 1- if/else/else if;
// if (time < 10) {
//   greeting = "Good morning";
// } else if (time < 20) {
//   greeting = "Good day";
// } else {
//   greeting = "Good evening";
// }

// 2- switch statement;
// switch(expression) {
//     case x:
//       // code block
//       break;
//     case y:
//       // code block
//       break;
//     default:
//       // code block
// }

// Loops:
// JavaScript supports different kinds of loops:
//      * for - loops through a block of code a number of times
//      * for/in - loops through the properties of an object
//      * for/of - loops through the values of an iterable object
//      * while - loops through a block of code while a specified condition is true
//      * do/while - also loops through a block of code while a specified condition is true
// 1- for :
// for (let i = 0; i < cars.length; i++) {
//     text += cars[i] + "<br>";
//   }

// 2- for/in;
// for (key in object) {
//     // code block to be executed
// }
// there is Method called forEach do the same thing

// 3- for/of;
// for (variable of iterable) {
//     // code block to be executed
// }

// 4 - while;
// while (condition) {
//     // code block to be executed
// }

// 5 - do/while;
// do {
//     // code block to be executed
// }
// while (condition);

// Data Types;
// JavaScript has 8 Datatypes
//     * String
//     * Number
//     * Boolean
//     * Undefined
//     * Null
//     * Object
//     * Symbol
//     * Bigint : You cannot perform math between a BigInt type and a Number type.

// Operations:
// Javascript operators are used to perform different types of mathematical and logical computations.
//     * The Assignment Operator (=) assigns values
//     * The Addition Operator (+) adds values
//     * The Multiplication Operator (*) multiplies values
//     * The Comparison Operator (>) compares values