//Rather than giving types in every function, you can just define an interface
interface User {
    firstName: string,
    age: number,
    email?: string //'?' means optional argument i.e. you can either give its value or not
}

function isLegal (user: User) {
    if(user.age > 18){
        return true;
    }
    else{
        return false;
    }
}

function greet (user: User) {
    console.log("Hello " + user.firstName);
}

isLegal({
    firstName: "Praneet",
    age: 20
})