
//ES5

// function Animal(name){
//     this.name=name
    
// }
// //Method shared among all Animal instances
// Animal.prototype.makeSound = function (){
//     return "Unknown Sound"
// }
// //Subclass constructor inheriting fron animal
// function Dog(name){
//     Animal.call(this, name)//Call the superclass constructor
// }
// //Setup prototype chain for dog to inherit from anmimal
// Dog.prototype=Object.create(Animal.prototype);

// //Method specific to Dog
// Dog.prototype.makeSound=function(){
//     return `wooof!`;
// }
// //Creating instances of the classes
// const genAnimal= new Animal("Generic Animal");
// console.log(genAnimal.name);
// const dog= new Dog("Ricky");
// console.log(dog.makeSound());

//ES6
// Superclass 
class Animal{
    constructor(name){
        this.name=name;
    }
    makeSound(){
        return "Unknown Sound"
    }
}
//Subclass inheriting from Animal
class Dog extends Animal{
    constructor(name){
        super(name)
    }
    makeSound(){
        return "Woof!";
    }
}
const genericAnimal= new Animal("Generic Animal")
console.log(genericAnimal.makeSound());

const dog= new Dog("Duffie");
console.log(dog.makeSound());