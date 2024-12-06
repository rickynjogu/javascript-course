class Person{
    constructor(firstName, lastName, age){
        //Instance member areas
        this.firstName=firstName;
        this.lastName= lastName;
        this.age=age;
        this.printUserInfo=function(){
            return `Your name is ${this.firstName} ${this.lastName} and you are ${this.age} years old`;
        };
        
       }
       //Prototype Members
       greet(){
        return  `Hello there ${this.firstName} ${this.lastName}`
       }
}
class Programmer extends Person{
    constructor(firstName, lastName, age, pl, experience){
        super(firstName,lastName, age)//This calls the parent call constuctor
        this.pl=pl;
        this.experience=experience;
    }
}
// const eric= new Person("Eric", "Munyua", 21);
// console.log(eric.printUserInfo());
// console.log(eric.greet());
 const eric= new Programmer("Eric","Munyua", 21,"Javascript");
 console.log(eric);