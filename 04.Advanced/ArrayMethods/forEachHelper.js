//When we call thr forEach helper we pass in anonymous callback function
// This function gets called one time for every element in the  array
// Whatever is inside the function that logic happens

// const colors=["teal", "blue", "red", "green"];
//  colors.forEach((color)=> console.log(color));



//  const words=["hello","bird", "table","football","pipe","code"];
//  const capWords=words.forEach((word,index,arr)=>{
//     arr[index]= word[0].toUpperCase() + word.substring(1);
//  });
//  console.log(words)

 //Q1. Create an array of numbers.
 //2. Create a variable to hold the sum
 //3. Create the adder function which takes the parameter of number  & add that sum variable
 //4. Loop over the array, increamenting the sum variable except this time a function gets referenced
//    in the  forEach 
// 5. print the sum variable.
let nums=[1,2,3,4,5,6,7,8,9];
let sum=0;
// function adder(number){
// for(let i=0; i<number.length; i++){
//     sum+=number[i]; 
// }
// return sum;
// }
function adder(number){
    sum+= number;
}
nums.forEach(adder);
console.log(sum);


