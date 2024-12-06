function Counter() {
    let _count=0; //Private variable
    //Public method that can access and modify the private variable
    this.increament=function(){
        _count++;
    };
    this.decrement=function(){
        _count--;
    };
    this.getCount=function(){
        return _count
    }

}
const counter= new Counter();
console.log(counter.getCount());
counter.increament();//1
counter.increament();//2
counter.increament();//3
console.log(counter.getCount());//=>3


