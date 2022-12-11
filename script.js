var characterLength = 8;
var choiceArray = [];
//creating character variables 
var specialCharArray = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")", "<", ">", "?"];
var lowerCaseArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upperCaseArray = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];  
var numberArray = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var generateBtn = document.querySelector("#generate");

function generatePassword() {
  console.log("Test: Generate Button Clicked")
}

// Add event listener and togenerate button
generateBtn.addEventListener("click", writePassword);

// #password input
function writePassword() {
  var correctPrompts = getPrompts(); //true or false
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var newPassword = generatePassword();
    passwordText.value = newPassword;

  } else {
    passwordTest.value = "";
  }
}

function generatePassword() {
  //generating Password based on the prompts entered
var password = ""; 
for(var i = 0; i < characterLength; i++) {
  var randomIndex = Math.floor(Math.random() * choiceArray.length);
  password = password + choiceArray[randomIndex];
}
return password;
}
// getPrompts function with if statements to satisfy T/F boolean or return user to add. prompts
function getPrompts() {
  choiceArray = [];
  
  characterLength= parseInt(prompt("How many characters would you like your password to become? (must be between 8 - 128 characters")); //NaN

  if(isNaN(characterLength) || characterLength < 8 || characterLength > 128) { 
    alert("Only choose between 8 - 128. Please try again.");
    return false; 
}

  if (confirm("Would you like lowercase letters in your password?")); {
  choiceArray = choiceArray.concat(lowerCaseArray);
  } 

  if (confirm("Would you like uppercase letters in your password?")); {
  choiceArray = choiceArray.concat(upperCaseArray); 
  }

  if (confirm("Would you like any special characters in your password?")); {
  choiceArray = choiceArray.concat(specialCharArray); 
}

  if (confirm("Would you like any numbers in your password?")); {
  choiceArray = choiceArray.concat(numberArray); 
}
return true;
}