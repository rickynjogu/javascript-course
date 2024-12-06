// const person={
//     name:"Eric Munyua",
//     age:21,
//     gender:"Male",
//     country:"Kenya",
// }


// function printPersonInfo({nmae, age, gender, country}){
//     console.log(`Name: ${name}`);
//     console.log(`Age: ${age}`);
//     console.log(`Gender: ${gender}`);
//     console.log(`Country: ${country}`);
// }
// printPersonInfo(person);

// let options={
//     title:"My menu",
//     items:["item1","item2"]
// };

//  function showMenu({title,width:w=100, heigh:h=200, items:[item1, item2]}){
//     console.log(`${title} ${w} ${h}`);
//     console.log(item1);
//     console.log(item2);
//  }
//  showMenu(options);


 //Destructuring inside destructuring

 const songs=[
    {name:"Lucky You",singer:"Joyner", duration: 4.34},
    {name:"Just Like You",singer:"Nf", duration: 3.23},
    {name:"Humble singer",singer:"Kendrick Lamr", duration: 2.33},
    {name:"Old Town Road",singer:"Lil Nas X", duration: 1.43},
    {name:"Cold Shoulder",singer:"Centrel Cee", duration: 5.23},
 ];

 const[, ,{name, singer, duration}]=songs;
 console.log(name);