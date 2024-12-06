//A function is block of code that performs a  specific task
//A function is reusable
//Functions makes the program easier as each small task is divide into a function
//DRY- Don't repeat Yourself
//function name(parameter){....}
// function greet(){
//     console.log("Hello from a function");
// }
// greet();//calling the function
//#Function declaration
// function sayHello(name){
//     console.log(`Hello ${name} `);
//     //console.log("Hello"+" "+ name);

// }
// sayHello("Eric");

// //return keyword
// function add(num1, num2) {
//     return  num1+num2;
// }
// console.log(add(10,6));
//challenge
// function myFunction(num1,num2) {
//     return num1*num2;
// }
// const res=myFunction(9,21);
// console.log(res);
// const greetings= function(user){
//     console.log(`Hello ${user}`);
// }//Funtion expression
// greetings("Eric");



//callback function-When we provide a function as an arguement to another function,that function is known as a callback function
//showFunc(function(){})
// function showCallFunc(fn){
//     const value=10;
//     fn(value);
// }

// showCallFunc(function(value){
//     console.log(value);
// })
// function sortMyArray(callback){
//     myArray=[2,3,4,6,7,9,7,6,5,4,3,2,1];
//     myArray.sort((a,b)=>a-b);
//     callback(myArray);
// }
// function sortedArray(array) {
//     console.log(array);
// }
// sortMyArray(sortMyArray);
// function fetchData(callback){
//     console.log("Fetching data....");
//     //Simulate an asynchronous operation using setTimeout
//     setTimeout(() =>{
//         const data={id: 1, name:"Alice"};
//         console.log("Data fetched");
//         callback(data);//call the callback function with the fetched data
//     }, 2000);//Simulating a two second delay
//     }
//     function processData(data) {
//         console.log(`processing data: ID = ${data.id}, Name = ${data.name}`);
        
//     }
//     //using the fetchData function with processData as a callback
//     fetchData(processData);
    // Breakdown of the above example
    //  1. fetchData(callback):
    //     -This function simulates fetching data. It takes a single parameter, callback, which is expected
    //      to be function
    //     -I
    // function showCallFunc(fn){
    //     let val=10;
    //     fn(10);
    // }
    // function fn(val){
    //     console.log(val);
    // }
    // showCallFunc(fn);
