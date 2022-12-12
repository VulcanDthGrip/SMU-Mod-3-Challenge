// defining initial variables
var characterLength = 8;
var selectedArray = [];
//creating character variables 
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];  
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
// creating button gen variable
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Generate Password Button ")
}

// Add event listener and generate button
generateBtn.addEventListener("click", writePassword);

// #password input
function writePassword() {
  var rightPrompts = getPrompts(); 
  var passwordText = document.querySelector("#password");
// if correct response to prompts are confirmed
  if (rightPrompts) {
    var newgenPassword = generatePassword();
    passwordText.value = newgenPassword;

  } else {
    passwordText.value = "";
  }
}

function generatePassword() {
  //generating Password based on the prompts entered
var password = ""; 
for(var i = 0; i < characterLength; i++) {
  var randomIndex = Math.floor(Math.random() * selectedArray.length);
  password = password + selectedArray[randomIndex];
}
return password;
}
// getPrompts function with if statements to satisfy T/F boolean or return user to add. prompts
function getPrompts() {
  selectedArray = [];
  // Looked up on MDN Plus
  characterLength= parseInt(prompt("How many characters would you like? (Must be between 8 - 128 characters")); 
// When user chooses the least of at least 8 characters and no more than 128 characters
  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { 
    alert("Only choose between 8 - 128. Please try again.");
    return false; 
}
// If statments below confirm whether lower, upper, special characters and numbers
  if (confirm("Would you like lowercase letters?")); {
  selectedArray = selectedArray.concat(lowerCaseArray);
  } 

  if (confirm("Would you like uppercase letters?")); {
  selectedArray = selectedArray.concat(upperCaseArray); 
  }

  if (confirm("Would you like any numbers?")); {
  selectedArray = selectedArray.concat(numberArray); 
}
  if (confirm("Would you like any special characters?")); {
  selectedArray = selectedArray.concat(specialCharArray); 
}
return true;
}