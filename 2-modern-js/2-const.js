// Scalar values
const answer = 42;
const greeting = 'Hello';

// Arrays and Objects
const numbers = [2, 4, 6];
const person = {
  firstName: 'John',
  lastName: 'Doe',
};


const person1 = Object.freeze({
  firstName: 'John',
  lastName: 'Doe',

  group:{
    id:"2",
    name:"gamers"
  }
});

numbers[0] = 3
console.log(numbers)
console.log(person1)

greeting = greeting + " adios"

console.log(greeting)