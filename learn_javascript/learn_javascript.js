// Run javascript file using CodeRunner extension
// CMD + / comments out code

// var my_name = "Brandon Yuan";

// console.log("My name is: ")
// console.log(my_name);

var peoplesNames = [{name: "Brandon", age: 17, major: "Computer Science"}, 
                     {name: "Ashmit", age: 18, major: "Computer Engineering"},
                     {name: "Aadet", age: 18, major: "Economics"}];

console.log(peoplesNames);
console.log(peoplesNames[0].name);
console.log(peoplesNames[2].major);

let myName = "Brandon Yuan";
myName = "I changed my name";

console.log(myName);

function myFunction(f1){
    return `This is my function and it prints: ${f1}`;
}

console.log(myFunction("Words words words"));