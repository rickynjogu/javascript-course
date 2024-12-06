//Destructuring allows us to  "unpack" values from data-Structures(Array, objects)
// into separate distinct variables.

const foo=["One", "Two", "Three", "Four","Five"];
// console.log(foo[0]);
// console.log(foo[1]);
// console.log(foo[2]);
// console.log(foo[3]);
// console.log(foo[4]);
// const [eric, two, three, four, five]=foo;
// console.log(eric);//The naming doesn't matter
// console.log(two);//If you are trying to access an  index that is not available it wil print undefined
// console.log(three);
// console.log(four);
// console.log(five);

// let a, b;
// [a=2, b=8]=["Three"];
// console.log(b);//=8
// console.log(a);//=Three


// function f(){
//     return[1,2]
// }
// let c,d;
// [c,d]=f();
// console.log(c);
// console.log(d);


// //Ignoring some function values
// function z(){
//     return [1,2,3];
// }
// const[e, ,g]=z();//This will skip the second value of  array in the function , ,
// console.log(e);
// console.log(g);

//Assinging the rest of an array to a variable
const [a, ...b]=["Eric","James","Jackie","Brain","Munyua"];
console.log(b);
//Q1.
const colors = ["red","green","blue","yellow", "orange"];

let[color1,color2,color3]=colors;
console.log(color1);
console.log(color2);
console.log(color3);