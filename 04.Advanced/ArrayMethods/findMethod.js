// The find() method is another built-in array helper in Javascript that allows you to find the first
//element in an array that matches a specific condition.It returns the value of the first element that
// satisfies the given testing function, or undefined if no element is found.
// const people=[
//     {name:"Eric", age: 17},
//     {name:"james", age:18},
//     {name:"john", age:20},
//     {name:"Alex", age:30},
//     {name:"Joseph", age:30},
// ];

// const res=people.find((person)=>person.name=="Eric");
// console.log(res);
// const posts=[
//     {id:1, content: "Good Post"},
//     {id:2, content: "Funny Post"},
//     {id:3, content: "Sad Post"},
    
// ];

// const theePost=posts.find((post)=> post.content=="Funny Post");
// console.log(theePost);

// //1. Iterate over "ages" array
// //2. Print only those ages which is greater than 18
// const ages=[3,10,18,20,23,45,65];
// let getit= ages.find((age)=>age>18);//This will only print the first age to meet this condtion i.e 20
// console.log(getit);

//=> Refactor
let products=[
    {name:"Checkers",category:"Toys"},
    {name:"Harry Potter",category:"Books"},
    {name:"iPhone",category:"Electronics"},
    {name:"Learn PHP",category:"Books"},
];
let product;

for(let i=0; i<products.length; i++){
    if(products[i].category=="Books"){
        product=products[i];
        break;
    }
}
console.log(product);
//Refactored code
let res=products.find((product)=>product.category=="Books");
console.log(res);