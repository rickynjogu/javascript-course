function callBackHell(params) {
    return new Promise((resolve)=>{
        setTimeout(() => {
            const data =`inside (callbackHell) function`;
            console.log(data);
            resolve(data)
        }, 2000);
    });
}

function firstFunc(data){
    return new Promise((resolve)=>{
        setTimeout(() => {
            const processedData =`${data} - Processed first.`
            console.log("Inside  (firstFunc) Function")
            resolve(processedData);
        }, 2000);
    })
}
function secondFunc(data){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            const processedData=`${data} - Processed Second`
        console.log("Inside (secondFunc) Function")
        resolve(processedData)
        },1500)
    })
}
async function processedDataWithAsyncAndAwait(){
    try{
    const data= await callBackHell();
    const processedData1= await firstFunc(data)
    const processedData2=await secondFunc(data);
    console.log(`Final result of all functions with async/await: ${processedData2}`);
    }catch(error){
      console.log(error);
    }
}
processedDataWithAsyncAndAwait();