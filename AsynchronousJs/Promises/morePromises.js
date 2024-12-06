function getWeather(){
    return new Promise((resolve, reject)=>{
        setTimeout(()=>{
            resolve("Cloudy")

        },2000);

    });
}
function getWeatherIcon(weather){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            switch(weather.toLowerCase()){
                case "sunny":resolve("☀️");
                             break;
                case "windy":resolve("🍃");
                             break;
                case "cloudy":resolve("☁️");
                            break;
                case "rainy":resolve("🌧️");
                            break;
                default:reject("Error End of the world")
            }
        },2000)
    })
}
function onSuccess(data){
    console.log(`Success: ${data}`);
}
function onFail(error){
    console.log(`error ${error}`);
}
getWeather()
.then(getWeatherIcon)
.then(onSuccess,onFail)
//.catch(onFail)=>An alternative for handling the error