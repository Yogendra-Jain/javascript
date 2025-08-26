let myNum = [1,2,3,4,5];
let myTotal = myNum.reduce(function (accumulator,currVal){
    console.log(`acc : ${accumulator} and currVal :${currVal} `);
    return accumulator+currVal;
} ,0)
console.log(myTotal);


// using arrow function same 
let Total = myNum.reduce((accumulator,item)=> accumulator + item,0);

console.log(Total);

let shoppingCart =[
    {
        item :'js course',
        price : 999
    },
    {
        item :'py course',
        price : 1999
    },
    {
        item :'cpp course',
        price : 2999
    },
    {
        item :'java course',
        price : 5999
    }
]

let totalprice = shoppingCart.reduce((acc,item)=> acc + item.price ,0);

console.log(totalprice);
