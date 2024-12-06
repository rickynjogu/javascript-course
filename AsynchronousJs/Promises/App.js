//synchronous js refers to the traditional way of executing javascript code, where each operation
//is performed in a sequnetial and blocking manner. In other words, each line is executed, one after 
// the other
///Asynchronous js allows certain operations to be execured independently from the main program flow,
// so they don't block the execution of other tasks,techniques used=>callback functions,promises,and
//async/wait
console.log("Start");
setTimeout(()=>{
    console.log("Inside SetTimeOut")
},2000)
console.log("End")

//CALL BACKHELL
function callbackHell(callback){
    setTimeout(()=>{
        const data="Inside (callbackHell) function";
        console.log(data);
        callback(data)
    },2000)
}
function firstFunc(data, callback) {
    setTimeout(() => {
        const processedData=`${data}- Processed First`
        console.log(`Inside (firstFunc) Function`);
        callback(processedData);
    }, 1000);
}
function secondfunc(data, callback){
    setTimeout(() => {
        const processedData=`${data} - Processed Second`
        console.log(`Inside (second) Function`);
        callback(processedData)
    }, 1500);

}
//Callback Hell
callbackHell((data)=>{
    firstFunc(data, (processedData1)=>{
       secondfunc(processedData1, (processedData2)=>{
        console.log(`Final result of all functions: ${processedData2}`);
       });
    });
});