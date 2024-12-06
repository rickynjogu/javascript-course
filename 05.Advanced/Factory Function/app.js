//A factory function is a type of function that is used to create and return objects. It's a design
//pattern that provides an alternative way to create objects compared to using constructors
// and new keyword

// function name(params) {
//     return {};
// }
// function createPerson(firstName, lastName, pl) {
//     return{
//         firstName: firstName,
//         lastName: lastName,
//         pl: pl,
//         fullName: function(){
//             console.log(`My name is ${this.firstName} ${this.lastName} and i love ${this.pl}`);
//         },
//     };
// }

// const eric=createPerson("Eric","Munyua","JavaScript");

// console.log(eric);
// eric.fullName();
function CarTypes(type,brand, model, YOM) {
    return{
        type:type,
        brand:brand,
        model:model,
        YOM:YOM,
        carDetails:function(){
            console.log(`${this.type}:::${this.brand}:::${this.model}:::${this.YOM}`);
        },

    };

    
}
const car1=CarTypes("Lorry","Toyota","Mitstubishi",2019);
console.log(car1);
car1.carDetails();