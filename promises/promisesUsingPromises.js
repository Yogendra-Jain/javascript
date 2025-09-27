function saveDb(data){
    return new Promise((success,failure)=>{
        let internet = Math.floor(Math.random()*10)+1;

        if(internet>4){
            success("connected : DATA saved ");
        }
        else{
            failure("connection failed");
        }
    }
)};
