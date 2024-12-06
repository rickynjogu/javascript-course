// 1. Logical AND (&&)-True if both the operands/booloean values are true,else evaluatea to false
// 2  Logical OR (||)-True if either of the operands/booloean values is true. Evaluates to false if both are false
// 3. Logical Not (!)- Negates  the condition
const a= true;
const b=false;
const c=4;
// console.log(a&&b);//false
// console.log(c>2&& c< 2);//false

//Logical OR
// console.log(a||b);//True
// console.log(b||b);//True
// console.log(c>2||c<2);//

//logical Not
// console.log(!b);//True
// console.log(!a);//False

let password="ericmunyua"
if(password.length>=8 && password.includes("ric")){
    console.log("Valid password");

}
else{
    console.log("Invalid Password");
}