const fruits=["Apples","pomegranate","mango","strawberries","pineapple","Grapfruit"];
const moreFriuts=["Guavas"];

// fruits.push("Banana")//will  be added to the end of the arry
// fruits.pop()//will remove the banana from the end of the arry
// fruits.shift();// will remove the first item in the array
// fruits.unshift("Orange");//appends a new element at  the beginning of the array
const totalFriuts=fruits.concat(moreFriuts);//This will combine the two arrays
//fruits.sort
//fruits.slice(0,2)



for(i=0; i<totalFriuts.length; i++){
    console.log(totalFriuts[i],);
}