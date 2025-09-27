function saveDb(data,success,failure){
    let internet = Math.floor(Math.random()*10)+1;

    if(internet>4){
        success();
    }
    else{
        failure();
    }
}


saveDb("hello",()=>{
    console.log("saved 1 successful");
    saveDb("hello",()=>{
        console.log("saved 2 successful");
        saveDb("hello",()=>{
            console.log("saved 3 successful");
        },()=>{
            console.log("failed 3");
        })
    },()=>{
            console.log("failed 2");
    })
},()=>{
    console.log("failed 3");
});