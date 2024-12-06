// The map() method creates a new array populated with results of calling a provided function
//on every element in the calling array.
//  let numbers= [1,2,3,4,5]
//  let double = numbers.map(num=> num*2);
//  console.log(double);
//  //The map method does not modify our existing array but instead give us a new array unlike forEach()

//  let people=[
//     {firstName: "Malocom", lastName: "Reynolds"},
//     {firstName: "Kaylee", lastName:"Frye"},
//     {firstName: "Jayne", lastName:"Cobb"},

    
//  ]
//  const results = people.map(person=>{
//     return [person.firstName, person.lastName]
//  });
//  console.log(results);


//Q1. Create array with random numbers.
//Q2. Map over each item in that array, & multiply each item by ten

let arr=[1,2,3,4,5,6];
let arrTimesTen=arr.map((array)=> array*10);
console.log(arrTimesTen)

//Another way

const numbers =[65, 44, 12, 4];

function myFunction(num){
    return num* 10;
}
 const newArr = numbers.map(myFunction);
 console.log(newArr);
