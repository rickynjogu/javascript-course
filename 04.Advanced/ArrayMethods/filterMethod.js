// The filter() method is a built-in array method in javascript that allows you to create a new
// array containing elements that pass a certain condition. It provides a clean and concise way to filter
// out elements from an array based on a specified criteria.

const songs=[
    {name:"Lucky You",singer:"Joyner", duration: 4.34},
    {name:"Just Like You",singer:"Nf", duration: 3.23},
    {name:"Humble singer",singer:"Kendrick Lamr", duration: 2.33},
    {name:"Old Town Road",singer:"Lil Nas X", duration: 1.43},
    {name:"Cold Shoulder",singer:"Centrel Cee", duration: 5.23},
 ];

 console.log(songs.filter(song=> song.duration>3));

 const computers=[
    {ram: 4, hdd: 100},
    {ram: 8, hdd:200},
    {ram:16, hdd:300},
    {ram:32, hdd:400},
 ];
 console.log(computers.filter((comp)=>comp.ram<16));

 //Q1. Iterate over "ages" array
 //Q2. Print only adults, those whose age is greater than 18
 const ages=[32, 33, 16, 40];
 console.log(ages.filter((age)=>age>=18));

 //Q3. Iterate Over "words" array
 //Q2. Print only those words which length is greater than 6

 const words=[
    "Spray",
    "Limit",
    "elite",
    "exuberant",
    "destruction",
    "present",
 ];

 let checkedWords=words.filter((word=>word.length>6));
 console.log(checkedWords)