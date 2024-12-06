function fetchData(callback){
    return new Promise((resolve) => {
        setTimeout(()=>{
            const data="Inside (callbackHell) function";
            console.log(data)
            resolve(data);
        },2000);
    })
}
function firstFunc(data){
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        const processData=`${data} - Processed data`
        console.log("Inside (firstFunc) function");
        resolve(processData);
       }, 2000); 
    });
    
}
function secondfunc(data){
    return new Promise((resolve, reject) => {
       setTimeout(() => {
        const processData=`${data} - Processed data`
        console.log("Inside (secondFunc) function");
        resolve(processData);
        
       }, 1500); 
    })
}


fetchData()
.then((data)=> firstFunc(data))
.then((processedData1)=> secondfunc(processedData1))
.then((processedData2)=>
    console.log(
        `Final result of all functions with Promises: ${processedData2}`
    ))
.catch((error)=>console.log(`Error: ${error}`));