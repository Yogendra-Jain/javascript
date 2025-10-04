
let btn = document.querySelector("#catF");
let btn2 = document.querySelector("#dogImg")
btn.addEventListener("click",async ()=>{
    let fact = await getFacts();
    console.log(fact);
    let p = document.querySelector("#result");
    p.innerHTML=fact;
})

btn2.addEventListener("click",async ()=>{
    let link = await getImages();
    console.log(link);
    let image = document.querySelector("#img");
    image.setAttribute("src",link);
})


let url = "https://catfact.ninja/fact";
let url2 = "https://dog.ceo/api/breeds/image/random";


async function getFacts() {
    try{
        let res = await axios.get(url);
        return res.data.fact;
    }
    catch(e){
        console.log("Fact not Found");
        
    }
    
}
async function getImages() {
    try{
        let res = await axios.get(url2);
        return res.data.message ;
    }
    catch(e){
        console.log("Image not Found");
    }
    
}