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
/*
function greet(firstName: string){
    console.log("Hello " + firstName);
}

greet("Praneet");
*/

//Problem-2 : Sum Function
//For JS
/*
function sum(a: number, b: number): number {
//You can also give the function's return type as given above
    return a + b;
}

const result = sum(4, 5);
console.log(result);
*/

//Problem-3 : Function which gives output after 1s
function after1s(fn: () => void) {
//Type of a function is () => returnType (is the function does not return anything then 'void')
    setTimeout(fn, 1000);
}

after1s(function(){
    console.log("Hello");
})