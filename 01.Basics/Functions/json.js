const person={
    "name":"John Doe",
    "age": 20,
    "email": "js@gmail.com",
    "isSubscripted": true,
    "hobbies":["Eat","Code","Sleep","Repeat"],
    "address":{
        "city":"Meru",
        "IDK":true
    },
};

//JSON.stringigy()
console.log(person);
const jsonString=JSON.stringify(person);
console.log(jsonString);
const javaScriptObj=JSON.parse(jsonString);
console.log(javaScriptObj);