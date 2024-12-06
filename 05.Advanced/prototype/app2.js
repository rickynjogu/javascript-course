function Animal(name){
    this.name=name
}
Animal.prototype.sound= function(){
    return "Animal Sound";
};
function Dog(name, breed){
    Animal.call(this,name);
    this.breed=breed;
    this.name=name;
}
//The Object.create() method creates a new object, using an existing object as the 
//prototype of the newly created object
Dog.prototype=Object.create(Animal.prototype);
 const dog1= new Dog("Buddy","Genus");
 console.log(dog1.name);
 console.log(dog1.sound);