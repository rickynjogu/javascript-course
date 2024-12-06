 const obj={}
 console.log(obj);
 //console.log(obj.__proto__);
 console.log(Object.getPrototypeOf(obj));
 

 String.prototype.hello=function(){
    console.log(this);
    console.log(this.toUpperCase());
 };
 console.log("hello and welcome".hello);