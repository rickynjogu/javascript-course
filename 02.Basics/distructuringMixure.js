const data={
    user:{
        id: 123,
        name: "John Doe",
        age: 30,
        email: "johndoe@gmail.com",
        address:{
            city: "New York",
            country: "USA",
        },
        hobbies: ["Reading","Painting","Cooking"],
        Scores:{
            math:95,
            science:88,
            history: 75,
        },
    },
    products:[
        {id:1, name:"Laptop", price: 1000},
        {id:2, name: "Phone", price: 800},
        {id:3, name: "Tablet", price:500},
    ],
    settings:{
        darkMode: true,
        notification:{
            email: true,
            sms: false,
            push: true,
        },
        language: "English",
    },
};

const{
    user:{
        name, age, address: {city, country},
        hobbies,
        Scores:{math, science, history},
        email,
        
    },
    products: [product1,product2,product3],
    settings:{
        darkMode,
        notification:{
            email:emailNotification,
            sms:smsNotification,
            push: pushNotification,
        },
        language,
    },
}
=data;
console.log(`Name: ${name}`);
console.log(`Age: ${age}`);
console.log(`Address: ${city},${country}`);
console.log(`Hobbies: ${hobbies.join(" ,")}`);
console.log(`Math Score: ${math}`);
console.log(`Science Score: ${science}`);
console.log(`History Score: ${history}`);
console.log(`Email: ${email}`);
console.log(`1st Product: ${product1.name} - ${product1.price}`);
console.log(`2nd Product: ${product2.name} - ${product2.price}`);
console.log(`3rd Product: ${product3.name} - ${product3.price}`);
console.log(`Dark Mode: ${darkMode}`);