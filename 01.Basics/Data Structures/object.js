const person={
    firstName: "Eric",
    lastName: "Munyua",
    age: 19,
    location:['Planet','Earth'],
    isProgrammer: true,

};
//adding new elements to our object
// person.middleName="Njogu";
//deleting
//delete person.firstName;
// Accessing Items from our objects
// console.log(person.middleName);//dot notation
// console.log(person["firstName"]);//bracket notation
const car={
    type:"mazda cx5",
    model:"Toyota",
    color:"Red"
};
// car.type="Honda";//updates the type to honda
car.wheels="RimX";//Adds a new property wheels the car object

console.log(car);
console.log(typeof car);//returns object
