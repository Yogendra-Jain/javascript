const jsuser = {
    name :"yogendra",
    "roll no": 123,
    age : 12
}

console.log(jsuser["name"])
console.log(jsuser.age)


//const singletone = new Object()
const literals = {}

// console.log(singletone)
// console.log(literals)

const tinderuser = {}

tinderuser.id = 1
tinderuser.name = "yogendra"
tinderuser.age = 20

console.log(tinderuser);

const obj = {
    name : {
        fullname :{
            userfullName:{
                first: "yogi",
                last :"jain"
            }
        }
    }
}
console.log(obj.name.fullname.userfullName.first);

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {5:"a",6:"b"}

// const obj4 = Object.assign(obj1,obj2,obj3); // obj1 me merge ho jayega same as obj4 
// const obj5 = Object.assign({},obj2,obj3)   // {} isme new object me merge hoga 

// console.log(obj4);
// console.log(obj1);
// console.log(obj5);
// console.log(obj2);

// spread method to merge 

const obj6 = {...obj1,...obj2}

console.log(obj6);


console.log(Object.keys(tinderuser));  //all keys of object tinderuser 
console.log(Object.values(tinderuser)); // all values 


