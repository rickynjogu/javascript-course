//The reduce() method applies the reducer function to each element of an array, accumulating the results
//into a single value. It is often used to perform calculations or aggregations on arrayn elements
// and simplify the array into a single value.

// const numbers=[1,2,3,4,5]

// const sum= numbers.reduce((p, c)=>{
//     console.log(`Previous: ${p}`);
//     console.log(`Current: ${c}`);
//     return p+c;
// }, 0);
// console.log(sum);

// const people=[
// {
//     name: "Eric Munyua",
//     age: 19,
// },
// {
//     name: "James Jackson",
//     age: 13,
// },
// {
//     name: "michael mellow",
//     age: 15,
// },
// ]
// const oldestAge=people.reduce((p, c)=>(c.age >p ? c.age:p)
// ,0)
// console.log(oldestAge)

// const words=[
//     "apple",
//     "banana",
//     "orange",
//     "banana",
//     "apple",
//     "orange",
//     "apple",
//     "grape"
// ];
// const wordFrequency=words.reduce((frequencyMap, word)=>{
//     frequencyMap[word]=(frequencyMap[word]|| 0+1)
//     return frequencyMap;
// },{});
// console.log(wordFrequency);

const numbers=[2,3,4,5];
const productOfNumbers=numbers.reduce((p, c)=>p*c);
console.log(productOfNumbers);