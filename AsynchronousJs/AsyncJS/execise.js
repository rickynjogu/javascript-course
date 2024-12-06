function getUserDataFromDB() {
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log("Getting User Name...");
        resolve("Eric Munyua")
        },2000)
    });
    
}
function getUserHobbies() {
    return new Promise((resolve, reject)=>{
        setTimeout(() => {
          console.log("Getting Hobbies...") ;
          resolve(["Coding", "Sleeping", "Watching","Eating"]) 
        }, 2000);
    });

}
async function retrievedInfo(){
    try{
        const retrievedD= await getUserDataFromDB();
        console.log(retrievedD);
        const userHobbies= await getUserHobbies();
        console.log(userHobbies);
        console.log("La fin");


    }catch(error){
        console.log(`Error: ${error}`);

    }

}
retrievedInfo();

