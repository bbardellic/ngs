const test =  () => console.log('Hello after 0.5 seconds. MAYBE!');

// const test2 = sec => {
//   setTimeout(() => console.log('Hello after 0.5 seconds. MAYBE!'), 500 * sec);
// }


for (let i = 1; i <= 50; i++) {
  //console.log(i)
  setTimeout(test, 500 * i)
  
  
  
  //test2;
}

//Intenté usar un colas https://www.npmjs.com/package/queue pero no logré correr el ejemplo