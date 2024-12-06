function getData() {
    return new Promise((resolve,reject)=>{
        setTimeout(() => {
            resolve("data retrieved.....")
        },2000);
    })
    
}
async function retrievedData() {
try {
    const data= await getData()
    console.log(data);
    console.log(`Data has been retrieved...`);
    
} catch (error) {
    console.log(`Error: ${error}`);
}
    
}

retrievedData();