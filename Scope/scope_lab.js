// Global scope
var globalVar = "I'm a global variable";
let globalLet = "I'm also global, but scoped with let";
const globalConst = "I'm a global constant";


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
//console.log(blockVar);
//console.log(blockLet);
//console.log(blockConst);

function show(){
    var functionVar = "I'm a block-scoped var";
    let functionLet = "I'm a block-scoped let";
    const functionConst = "I'm a block-scoped const";
    }
    show();
    
 //   console.log(functionVar); // Throws ReferenceError
 //   console.log(functionLet); // Throws ReferenceError
 //   console.log(functionConst); // Throws ReferenceError

{
// Block scope
    var blockVar1 = "I'm a block-scoped var";
    let blockLet1 = "I'm a block-scoped let";
    const blockConst1 = "I'm a block-scoped const";
    blockVar1 = "I'm a modified block-scoped var";
    blockLet1 = "I'm a modified block-scoped let";
    // blockConst1 = "I'm a modified block-scoped const";
}
    console.log(blockVar1);
    //console.log(blockLet1);
    //console.log(blockConst1);

    blockVar1 = "I'm a re-modified block-scoped var";
    blockLet1 = "I'm a re-modified block-scoped let";
    blockConst1 = "I'm a re-modified block-scoped const";

    console.log(blockVar1);
    console.log(blockLet1);
    console.log(blockConst1);