function getUserDataFromDB(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log("Getting User Name...")
        resolve("Eric Munyua");
        },2000)
    });
}
function getUserHobbies(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
          console.log("Getting Hobbies...");
          resolve(["Coding","Sleeping","Watching","Eating"]);
        },2000)
    });

}

function onSuccess(data){
    console.log(`${data}`);
}
getUserDataFromDB()
.then(onSuccess)
.then(getUserHobbies)
.then(onSuccess)