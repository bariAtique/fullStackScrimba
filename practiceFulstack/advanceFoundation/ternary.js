// const exersizeTimeMins = 90;
// let message = "";
// if(exersizeTimeMins < 30){
//   message = "Try harder";
// } else if(exersizeTimeMins<60){
//   message = "good";
// }else{
//   message = "awesome!";
// }

// console.log(message);

//challenges
const playerGuess = 6;
const correctAnswer = 6;
 
// refactor following code to use ternary operator

/* let message = "";

if(playerGuess === correctAnswer){
  message = "correct ! ";
}else{
  message = "wrong !";
}

console.log(message); */

const message = playerGuess===correctAnswer ? "correct !": "wrong";
console.log(message);

