let hobbies: Array<string | number> = ["Sports", "Cooking"] // <-- generic types

hobbies.push(10);
 
// types

let n: number[] = [1,-1] // <-- works but not precise
let x: [number, number] = [1,-1] // <-- even better

// type {} means any value that is not undefined or. null

let c: {} = 3 // <- works
let d: {} = null // <- ❌
let e: {} = undefined // <- ❌