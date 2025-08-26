const map = new Map();

map.set('IN',"India");
map.set('USA',"United state");
map.set('FR',"France");

console.log(map);

for (const group of map) {
    console.log(group);
}

for (const [key,value] of map) {
    console.log(key + ':-' + value);
}



