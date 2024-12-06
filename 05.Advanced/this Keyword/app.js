// console.log(this);//In this case it refers to the window object
// console.log(this==window);//true

// window.fistName="Eric";
// console.log(window);
// function printThis(){
//     return this;
// }
// const printit=printThis();
// console.log(printit);//This still refers to the window object
//  const obj={
//     firstName:"Eric",
//      lastName:"Munyua",
//     fullName: function(){
//         return `${this.firstName} ${this.lastName}`;//This will give the owner object
//      }
// }
//  const res=obj.fullName()
//  console.log(res);//Eric Munyua
//  const obj={
//     firstName:"Eric",
//     lastName:"Munyua",
//     fullName: ()=>{
//         return `${this.firstName} ${this.lastName}`;//undefined undefined
//     }//if you create an arrow function inside an object using the this keyword, this keyword will be
//     //refering to the window object
// }
//  const res=obj.fullName()
//  console.log(res);



 const person={
    name:"Eric",
    age:21,
    greetRegular:function(){
     return `Hello, my name is ${this.name} and i'm ${this.age} years old`;
    },
    greetArrow:()=>{
     return `Hello, my name is ${this.name} and i'm ${this.age} years old`;
    },
 };
 const res=person.greetRegular();
 const res2=person.greetArrow();
console.log(res);
console.log(res2);//this will definately give undefined undefined