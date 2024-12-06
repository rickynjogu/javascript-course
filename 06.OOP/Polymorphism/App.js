//Polymorphism is achieved through methid overriding, where a subclass provides it;s own
//implementation of a method that is already defined in the parent class.
class Animal{
    constructor(name){
        this.name=name
    }
    makeSound(){
        return "Unknown"
    }
}
class Dog extends Animal{
    constructor(name){
        super(name);
    }
    //Overriding method
    makeSound(){
        return "Woof!";
    }
}
class Cat extends Animal {
    constructor(name) {
        super(name);

    }
    makeSound(){
        return "Meow"
    }
}
function animalInfo(animal){
    console.log(`Name: ${animal.name}`);
    console.log(`Sound: ${animal.makeSound()}`);
}
const genAnimal= new Animal('Generic Animal');
animalInfo(genAnimal);

const dog= new Dog("doggie");
animalInfo(dog);
const cat= new Cat("Suzzie");
animalInfo(cat);
