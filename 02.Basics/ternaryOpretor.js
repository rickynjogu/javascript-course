//The ternary operator in javascript is a consise way of writing conditional expressions.
// It is the only Javascript operator that takes three operands: a condtion followed by a
// question mark (?), ab expression to execute if the condition is true, follwed by a
//colon (:), and an expression to execute if the condtion is false.

//condition ? exprIfTrue : exprIfFalse;
let password=9;
function passwordChecker(ps){
return ps>=8? `Strong Password`:`Enter a strong password!`;
}
console.log(passwordChecker(password));

const age=10;
const isAdult= age>=18 ? `Adult`:  `Underage`;
console.log(isAdult);
 const hasMoney=false;
 const purchase= hasMoney==true? `Buy Products`:`Bring Money`;
 console.log(purchase);