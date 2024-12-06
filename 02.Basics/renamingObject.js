const num={x:100,y: 200};
const {x: new1, y:new2}=num;//we change the name from x to new1 and y to new2

///Some Object distructuring code
const person={
    name:"John Doe",
    age:21,
    gender: "Male",
    country:"Kenya",
}

const{name:personName, age:personAge, gender:personGender, country:personCountry}=person;
console.log(personName);
console.log(personAge);
console.log(personGender);
console.log(personCountry);