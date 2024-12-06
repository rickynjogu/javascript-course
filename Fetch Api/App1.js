const result= document.querySelector(".results")
async function renderData(){
    try{
        const response= await fetch("data.json");
        if(!response.ok) throw Error(response.statusText)
            const data= await response.json();
        result.textContent=data.name
        console.log(data);
    }catch(error){
        console.log(error)
    }
}
renderData();