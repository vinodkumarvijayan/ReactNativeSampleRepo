// Global scope
var globalVar = "I'm a global variable"; //Var has function level scope
let globalLet = "I'm also global, but scoped with let"; //let has block level scope
const globalConst = "I'm a global constant"; //Const used to declare constant


{
// Block scope
var blockVar = "I'm a block-scoped var";
let blockLet = "I'm a block-scoped let";
const blockConst = "I'm a block-scoped const";
}
// Global scope
console.log(globalVar); // Output: "I'm a global variable"
console.log(globalLet); // Output: "I'm also global, but scoped with let"
console.log(globalConst); // Output: "I'm a global constant"
//Block Scope
console.log(blockVar);
console.log(blockLet);

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

console.log(functionVar); // Throws ReferenceError
console.log(functionLet); // Throws ReferenceError
console.log(functionConst); // Throws ReferenceError
