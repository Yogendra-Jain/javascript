let myNum = [1,2,3,4,5];
let myTotal = myNum.reduce(function (accumulator,currVal){
    console.log(`acc : ${accumulator} and currVal :${currVal} `);
    return accumulator+currVal;
} ,0)
console.log(myTotal);


// using arrow function same 
let Total = myNum.reduce((accumulator,item)=> accumulator + item,0);

console.log(Total);
