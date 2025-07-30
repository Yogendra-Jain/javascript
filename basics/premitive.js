// call by value (premitive )

let myname = "yogendra";
let anotherName = myname ;

anotherName = "yogi";

console.log(myname);
console.log(anotherName);

// non premitive (function ,object, array);  call by reference 

let obj ={
    name: "yogendra",
    age:20
}

let newobj = obj;

newobj.name = "Yogi";

console.log(obj.name);
console.log(newobj.name);
