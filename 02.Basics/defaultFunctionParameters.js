//Default function parameters allow you to assign default values to function parameters.
//When a function is called, and an argument is not provide for a parameter, the default value
//will be used instead
// function countTo5(count=false){
//     if(count==true){
//         for(let i=1; i<=5; i++){
//             console.log(`Count ${i}`);
//         }
//     }
// }
// countTo5(true);

// function ratings(rate=0){
//     if (rate== 5){
//         console.log(`High Ratings :)`);
//     } else if (rate==0){
//         console.log(`Low Ratings :()`);
//     }
// }
// ratings();
function multiply(a,b=1){
    let c =a*b;
    return `The product of ${a} and ${b} is : ${c}`;
}
console.log(multiply(3,8));//The product of 3 and 8 is : 24
console.log(multiply(7));//The product of 7 and 1 is : 7