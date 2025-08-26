let coding =['js','cpp','py'];
let name =['yogi','yogesh','vishal'];
/*
// first method for forEach 
coding.forEach(function (val){
    console.log(val);
})

*/

/*
//second method (using arrow function )

coding.forEach((val)=>{
    console.log(val);
    
})

*/
// third method 

/*
function printMe(item ){
    console.log(item);
}

name.forEach(printMe);

*/

// for each ke paas value ke alava key or whole array bhi hota he 

coding.forEach(function (value,index,arr){
    console.log(value, index, arr);
})

// array of object 
const arr =[
    {
        languageName : 'javascript',
        code :'js'
    },
    {
        languageName : 'python',
        code :'py'
    },
    {
        languageName : 'c++',
        code :'cpp'
    }
]

arr.forEach((item)=>{
    console.log(item.languageName);
})


// foreach koi value return nhi karta isliye ye 'undefined ' deta he 
let newnum = coding.forEach((item)=>{
    return item.languageName;
})
console.log(newnum);
