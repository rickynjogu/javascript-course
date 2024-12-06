let person={
    greet: function(){
     console.log(`Hello my name is ${this.firstName} ${this.lastName}`);
    },
}
const eric=Object.create(person)
eric.firstName="Eric";
eric.lastName="Munyua";
eric.greet();
