let fname='Alex';
let lname='Mason'
//use of backticks
let fullname=`${fname} ${lname}`;
console.log(fullname);
//challenge solution
let favActorFirstName="john";
let favActorLastName="Reese";
let favActorFullName=`${favActorFirstName} ${favActorLastName}`;
let uppercase=favActorFullName.toUpperCase();
let message=`My favourite Actor is ${uppercase} and  he is the best in the whole wide world`;
console.log(favActorFullName);
console.log(uppercase);
console.log(message);
message+=" his best show is silicon valley";
console.log(message);