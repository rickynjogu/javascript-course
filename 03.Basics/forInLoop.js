//The for ... in  loop in javascript is used to iterste over the enumerable properties of an object.
// It is a way to loop through the keys(property names) of an objects.

//for (let key in objects){...}
 let person={
    name:"Eric",
    age: 21,
    gender: "Male",
 }
 for(keys in person){
    console.log(keys, person[keys]);
    //console.log(key.);
    
 }

 let list=['one','Two','Three','Four']
  for(let index in list){
   console.log(`${index} : ${list[index]}`);
  }

  const object ={a:1,b:2, c: 3};
  for( let keys in object){
   console.log(`${keys} = ${object[keys]}`);
  }