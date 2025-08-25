
// global scope wale variable se dikkat na ho isliye iife banate he iske data members ko bahar access nhi kar sakte 
(function chai(){
    console.log("DB connected")
})(); // semi colon jaruri agar nhi likhenge to niche walo me error dega kyo iife ko pata nhi hota rukna kaha he 

// arrow funtion
((name)=>{
    console.log(`DB connected two ${name}`)
})('yogendra');