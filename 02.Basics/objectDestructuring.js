//In object destructuring order doen't matter but the name does matter

// const student={
//     name:"Eric",
//     position:1,
//     regNo:"CT201/109263/22",
// };
// const {name}=student;
// console.log(name);

//Q1.
const person={
    name:"John Doe",
    age:"30",
    gender: "Male",
    country:"Kenya",

};

const{name,age,gender,country}=person;
console.log(name);
console.log(age);
console.log(gender);
console.log(country);


//Object destructuring and rest operator
let{a,b,...rest}={a: 100, b: 200, c: 300, d: 400, e: 500};
console.log(rest);