"use strict"; 
    /* enables Strict Mode in JavaScript. It helps you write safer code by catching certain 
   mistakes that JavaScript might otherwise allow*/
   /* Strict mode makes JavaScript less forgiving of certain mistakes, 
   helping you catch bugs earlier. It does not change let, const, or var scope rules. */

// Global scope
var globalVar = "I'm a global variable"; //Var has function level scope
let globalLet = "I'm also global, but scoped with let"; //let has block level scope
const globalConst = "I'm a global constant"; //Const used to declare constant, had block level scope

// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"

{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
//Block Scope
console.log(blockVar);
// console.log(blockLet);//Uncaught ReferenceError: blockLet is not defined
// console.log(blockConst);//Uncaught ReferenceError: blockConst is not defined

//Primitive data types
//strings, numbers, booleans, undefined and null

//Composite data types
//Arrays, objects handle multiple values and structured data

function show(){
var functionVar = "I'm a block-scoped var";
let functionLet = "I'm a block-scoped let";
const functionConst = "I'm a block-scoped const";
}
show();

// console.log(functionVar); // Throws ReferenceError
// console.log(functionLet); // Throws ReferenceError
// console.log(functionConst); // Throws ReferenceError

//Practice
{
    var practiceVar = "Hello Var";
    let practiceLet = "Hello Let";
    const practiceConst = "Hello Const";
    practiceVar = "Var reassigning inside block";
    practiceLet = "Let reassigning inside block";
    // practiceConst = "Const reassigning inside block"; //Uncaught TypeError: Assignment to constant variable
}

practiceVar = "Var reassigning outside block";
// practiceLet = "Let reassigning outside block"; //scope_lab.js:56 Uncaught ReferenceError: practiceLet is not defined
// practiceConst = "Const reassigning outside block"; //Uncaught ReferenceError: practiceConst is not defined

console.log(practiceVar);
// console.log(practiceLet);
// console.log(practiceConst);
