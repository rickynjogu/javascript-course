//Async Func??=>Is a special function thst is designed to operate asynchronously, meaning
//that is can perform tasks in the background while other continues to execute. Async functions
// are amrked with the async keyword
//Async is a keyword used to turn function declaration to async function
function getDataFromServer() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
            resolve("User data retrieved from the server")
        }, 4000);
    })
}

async function getUserData() {
    try {
        const userData= await getDataFromServer();
        console.log(userData);
        console.log("The rest of the the code goes here");
    } catch (error) {
        console.log(error);
    }
}
getUserData();