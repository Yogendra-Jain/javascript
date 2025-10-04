/*

let url = "https://catfact.ninja/fact";


// using then and catch 
fetch(url).then((res)=>{
    console.log("data 1",res)
    console.log("data 1",res.json())
    return res.json();  
}).then((data)=>{
    console.log("data1 : ",data.fact );
    return fetch(url);
})
.then((res)=>{
    return res.json();
})
.then((data)=>{
    console.log("data2 : ",data.fact);
    
})
.catch((err)=>{
    console.log("Error :",err);
})

*/


// using async and await 

let url = "https://catfact.ninja/fact2";

async function getFacts(){

    try {
        let res = await fetch(url);
        let data1 = await res.json();
        console.log(res);
        console.log(data1);
        console.log(data1.fact);

        let res2 = await fetch(url);
        let data2 = await res2.json();
        console.log(res2);
        console.log(data2);
        console.log(data2.fact);
    } 
    catch (e) {
        console.log("Error e-",e);
    }

    console.log("byyy");
    
}