import { clearInterval } from "timers";

// Print "Hello World"
// Every second
// And stop after 5 times

// After 5 times. Print "Done" and let Node exit.
let cont = 0;

const func = setInterval(() => {
    console.log("Done!");
    cont++;
    if (cont == 5){
        clearInterval(func)
    }
}, 1000);


func()