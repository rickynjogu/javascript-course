// The rest parameter syntax allows a function to accept an indefinate number of arguements
//as an array, providing a way to represent variadic function in javascript.

function user(...userData){
    console.log(userData);
}
user("Eric munyua","Software Developer",21,"Football");

function person(firstName, lastName, ...hobbies){
console.log("Name : ", firstName);
console.log("Last Name : ", lastName);
console.log("My hobbies are : ",hobbies);
}
person("Eric", "Munyua", "Programming","Singing","Football","Watching Movies");