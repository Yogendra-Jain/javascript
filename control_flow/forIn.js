const myObj = {
    js : 'javascript',
    cpp:'c++',
    rb : 'ruby'
}


for (const key in myObj) {
    //console.log(key);  // give all keys 

    console.log(`${key} is the key for ${myObj[key]}`);
    
}

let arr =['js','py','cpp'];

for (const key in arr) {
    console.log(key);
    console.log(arr[key]);
}