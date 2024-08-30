/*
const x: number = 1; //you have to specify the type in TS
x = "Praneet"; //This gives error because 'number' cannot be assigned a 'string'
console.log(x);
*/

//Problem-1 : Hello World
//For JS
/*
function greet(firstName){
    console.log("Hello " + firstName);
}

greet("Praneet");
*/

//For TS
function greet(firstName: string){
    console.log("Hello " + firstName);
}

greet("Praneet");