//Abstration is the process of simplifying complex systems by beaking them down into
//smaller, manageable parts
//Abstract class(providing a blueprint for subclasses)
class Animal{
    constructor(name){
        this.name=name;

    }
    //Abstract method (to be implemented by subclasses)
    makeSound(){
        throw new Error("Method (makesound must be implemented");
    }
}
class Dog extends Animal{
    constructor(name){
        super(name)

    }
    //IMplementing the abstract method
    makeSound(){
        return "woof!"
    }
    
}
//Concrete Subclass
class Cat extends Animal{
    constructor(name){
        super(name);
    }
    makeSound(){
        return "Meow!"
    }
}
const dog= new Dog("Vicky");
console.log(dog.name);
console.log(dog.makeSound())
const cat= new Cat("Cattie");
console.log(cat.name);
console.log(cat.makeSound());