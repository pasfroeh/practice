let answer = prompt("rock, paper, or scissors?")
console.log("Your choice:", answer)
let randomNumber = Math.floor(Math.random() * 3)+1;
if (randomNumber === 1) {
  console.log("Computer: rock");
}
else if (randomNumber === 2) {
  console.log("Computer: paper");
}
else {
  console.log("Computer: scissors");
}
if (answer === "rock" && randomNumber === 1) {
  console.log("Winner: Tie")
}
else if (answer === "rock" && randomNumber === 2) {
  console.log("Winner: Computer :(")
}
else if (answer === "rock" && randomNumber === 3) {
  console.log("Winner: You :)")
}
else if (answer === "paper" && randomNumber === 2) {
  console.log("Winnner: Tie")
}
else if (answer === "paper" && randomNumber === 1) {
  console.log("Winnner: You :)")
}
else if (answer === "paper" && randomNumber === 3) {
  console.log("Winner: Computer :(")
}
else if (answer === "scissors" && randomNumber === 3) {
  console.log("Winner: Tie")
}
else if (answer === "scissors" && randomNumber === 1) {
  console.log("Winner: Computer :(")
}
else if (answer === "scissors" && randomNumber === 2) {
  console.log("Winner: You :)")
}