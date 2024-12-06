//Scope in javascript refers to the current context of code, which determines
//the accessibility of the variables in javascript

//There two types of scope in javascript
//Global Scope variables are those declared outside of a block
//Local  Scope variables are those declared inside of a block

let message="Hello world";//Global variable-accessible anywhere in the program
console.log(message);

function showMessage() {
    let textMessage="Hello";//Local Variable-only accessible in that function
    console.log(textMessage);
    
}
showMessage();