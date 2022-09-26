// csbin.io/promises

// Challenge 1
// Let's start by reviewing asynchronous functions! Using setTimeout, print the string 'Hello!' after 1000ms.

function sayHello(){
    setTimeout(()=>console.log("Hello"),1000);
}

console.log(sayHello());

// Challenge 2
// Create a promise. Have it resolve with a value of 'Resolved!' in resolve after a delay of 1000ms, using setTimeout. Print the contents of the promise after it has been resolved by passing console.log to .then

