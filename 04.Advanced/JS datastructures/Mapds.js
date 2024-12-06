//Map is a built in data structure thats allows you to store key-value pairs whre both the keys
// and values can be of any data type. It is simlar to an object, but with a few key differences:

//=> Keys can be of any data type: Unlike objects , where keys are limited to strings ans symbols,
//map allows you to use any data type as keys, Inluding numbers, booleans, objects, and even other Map
// instances.

/* Maintains insertion order: Map preserves the order of key-value pairs as they were inserted, while
   object keys may not be guaranteed to be in any spefic order 
   
   Iteration: Map provides built-in methods for easy iteration over its elements
   
   */
//   const map=new Map();
//   const keyOne="Strings"
//   const keyTwo={}
//    const keyThree=function(){}
//    map.set(keyOne,"Value of key one");
//    map.set(keyTwo,"Value of key two");
//   map.set(keyThree, "Value of key three");
//   console.log(map.keys());
//   console.log(map.delete(keyTwo));
//   console.log(map.size);
//   console.log(map);

// for (let [key, value] of map){
//     console.log(`${key} -- ${value}`);
// }

// for(let key of map.keys()){
//     console.log(key);
// }
// for(let value of map.values){
//     console.log(value);
// }
const myMap= new Map();

myMap.set("a",1);
myMap.set("b",2);
myMap.set("c",3);
console.log(myMap);
console.log(myMap.get("a"));
console.log(myMap.size);
console.log(myMap.delete("b"));
console.log(myMap.size);