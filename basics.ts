let userName: string;  // you want to set a type
let userAge = 38; // typescript can infer type


function add(a: number, b: number){ // you can assign types to function params
    return a + b;
}