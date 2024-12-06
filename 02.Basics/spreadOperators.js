//The spread operator is a new addition to the set of operations in javascript ES6.
//It takes in an iterable (e.g an array) and expands it into individual elements.
//The spread operator is commonly used to make shallow copies of JS OBJECTS.
//Using this operator makes the code concise andd enhances its readability.
//with functions/arrays/objects


//Spread Operators using arrays
//  function giveMe4(a, b, c, d) {
//     console.log("a",a);
//     console.log("b",b);
//     console.log("c",c);
//     console.log("d",d);
//  }
//  const colors=["red","green","blue","teal"];
//  giveMe4(1,2,3,4);
//  giveMe4(...colors);//working of an array spread operator

 //Spread Operators in arrays
//  const strNums=['one','two','three'];
//  const moreStrNums=['four', 'five', 'six'];
//   const cntion=strNums.concat(moreStrNums);//without using a spread operator
//   const moreCoolWay=[...strNums, ...moreStrNums];//using a spread operator
//   for (let i=0; i<cntion.length; i++){
//     console.log(cntion[i]);
//   }

//   for (let i=0; i<moreCoolWay.length; i++){
//     console.log(moreCoolWay[i]);
//   }
// console.log(cntion);
// console.log(moreCoolWay);

// let people=['Eric','Munyua','Jordan','king'];
// const morepeps=["jason",...people,'brain'];
// console.log(morepeps);


// //Spead Operators in Objects
// const obj1={x:1,y:2};
// const obj2={z:3};
// const obj3={...obj1, ...obj2};
// console.log(obj3);


// let person={
//     name:"Eric Munyua",
//     age:19,
//     gender:"Male",
// }
// const clone={...person};
//Q1. Make a clone of "arr, arr2" by usng spread operator
//Q2. Make a clone of "user" object using spread operator
let arr =[1,2,3];
let arr2=[4,5];
 const user={
    name:"Jen",
    age:22,
 }
 let aarClone=[...arr];
 let arr2Clone=[...arr2];
 let arrconcat=[...arr, ...arr2];
 const userClone={...user};

 console.log(arr);
 console.log(aarClone);
 console.log(arr2);
 console.log(arr2Clone);
 console.log(user);
 console.log(userClone);
 console.log(arrconcat);


