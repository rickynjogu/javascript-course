//The every() and some() are two built-in array methods in Javascript that array you to check the 
//elements of an array based on a given condition. Both methods take a callback function as an 
//argument, which is applied to each element of an array.

//The every() method tests whether all elements in the array pass the condtion specified by the provided
//callback function. It returns true if the callback function returns true for every element.
//and false if any element fails the condition.


//The some() method tests whether at least one element in the array passes the condition specified by 
// the provided callback function. It returns true if the callback function returns true for at least
//one element, and false if no element passes the condition.

const people=["Eric", "Josh", "Jake","Munyua"];
const res1=people.every((person)=>person.length==4);//This will result to false because every
// name in people does not have four characters
 
const res2=people.some(name=>name.length==4);//This will evaluate to true because atleast on of
//the  names has a char length of 4
console.log(res1);
console.log(res2);
const songs=[
    {name:"Lucky You",singer:"Joyner", duration: 4.34},
    {name:"Just Like You",singer:"Nf", duration: 3.23},
    {name:"Humble singer",singer:"Kendrick Lamr", duration: 2.33},
    {name:"Old Town Road",singer:"Lil Nas X", duration: 1.43},
    {name:"Cold Shoulder",singer:"Centrel Cee", duration: 5.23},
 ];

 const dur1=songs.every(song=>song.duration>4.00);//This will evaluate to false
 const dur2=songs.some(song=>song.duration>4.00); //This will evaluate to true
 console.log(dur1);
 console.log(dur2);

 //challenge
 let products=[
    {name:"Checkers",category:"Toys"},
    {name:"Harry Potter",category:"Books"},
    {name:"iPhone",category:"Electronics"},
    {name:"Learn PHP",category:"Books"},
];
let allProductsBooks=false;
let someProductsBooks= false;
for(let i=0; i<products.length; i++){
    if(products[i].category!="Books"){
        allProductsBooks = false;

    }
    else{
        someProductsBooks=true;
    }
}
console.log(allProductsBooks);
console.log(someProductsBooks);
const productres1=products.every(product=>product.category=="Books");
const productres2=products.some(product=>product.category=="Books");
console.log(productres1);
console.log(productres2);
