class Hero {
    constructor(name, level) {
        this.name=name;
        this.level=level;
        
        };
    
    greetings(){
     return `Hello ${this.name}`;
    }
}
class Mega extends Hero{
    constructor(name, level,spell){
        super(name, level)
        this.spell=spell;

    }
}
const newHero= new Hero("Eric","Expert");
console.log(newHero);
console.log(newHero.greetings());
const thismeg=new Mega("Munyua");
console.log(thismeg.greetings());