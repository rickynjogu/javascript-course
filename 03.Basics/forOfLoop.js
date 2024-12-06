// The "for ... of" loop in JavaScript is a modern iteration statement introduced is ECMAScript 6
// that provides a concise and easy way  to loop over elements in iterable objects like arrays,Strings,maps
//set, and more. It allows you to iterate directly over the values of the elements, rather than dealing with
//their indices or keys, which makes the code more readable and less error-prone.

//for (variable of iterable) {...}
let people=["Brad", "alex", "james", "joseph"];
for(let person of people){
    console.log(person);
}
const text="Munyua";
for(let letter of text){
    console.log(letter);
}
//Q1.
const array1=["a", "b","c", "d"];
for(let letter of array1){
    console.log(letter);
}