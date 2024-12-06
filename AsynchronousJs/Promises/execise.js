function getUserDataFromDB(name,callback){
    setTimeout(() => {
        console.log(`Getting User Name...`);
        const name='Eric';
        callback(name);
    },2000 );
}
function getUserHobbies(name, callback){
    setTimeout(() => {
        console.log(`Getting User hobbies....`);
        const myHobbies=["Programming","Eating","Sleeping","Watching Movies"];
        callback(myHobbies);
    }, 2000);

}
getUserDataFromDB(name,(data)=>{
    console.log(data);
    getUserHobbies(data,(myHobbies)=>{
        console.log(myHobbies);
    });
});