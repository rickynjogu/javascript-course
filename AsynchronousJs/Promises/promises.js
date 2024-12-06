//PROMISE=>A promise is an object representing the eventusl completion or failure of an 
//asynchronous operation

//new Promise()
//=>A javascript    Promise object contains both the producing code and calls to the
//consuming code. It can be used to deal with Asynchronous operation in JavaScript.

//3 states=>Pending...(Initial State, Not yet Fulfilled or rejected)
//          Fulfilled/ Resolved.(promise Completed)
//          Rejected. (Promise Failed)
function checkNumber(number){
  return new Promise((resolve, reject)=>{
    if(number%2==0){
        resolve(`${number} is an even number`);
    } else{
        reject(`${number} is an odd number`);
    }
  });
}
const numberToCheck=7//odd
checkNumber(numberToCheck).then((message) =>{
    console.log(`Success: ${message}`);
}).catch((error)=>{
    console.log(`${error}`);
});