var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];


function lookUpProfile(name, prop) {
// Only change code below this line
for(let i= 0; i<contacts.lenght; i++){

if(name === contacts[i].firstname){
    if(name.hasOwnProperty(prop)){
    return prop[value]}
    return "No such contact"

}
else{
    return "No such property"
}

}
// Only change code above this line
}

console.log(lookUpProfile("Akira", "likes"))



//jottings

'use strict';

let person = {
    firstName: 'Jim',
    lastName: 'Cooper',
    age:29,

};

var len = contacts.length

for (let i = 0; i < len; i++){
  //console.log(contacts[i])

  for(let prop in contacts[i]){
   console.log(prop.firstName)
}

}