// Get user input
let number = prompt("Enter a number:");

// Convert input to a number
number = Number(number);

// Check if the number is a multiple of 5
if (number % 5 === 0) {
  console.log(`${number} is a multiple of 5.`);
} else {
  console.log(`${number} is not a multiple of 5.`);
}
