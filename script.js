// Assignment Code
var generateBtn = document.querySelector("#generate");


function randomInt(min, max) {
  if (!max) {
    max = min
    min = 0
}
let randomMath = Math.random()
return Math.floor(min*(1 - randomMath) + randomMath*max)
}
function getRandomItem(list) {
  return list[randomInt(list.length)]
}

let characters = []

// Array of characters 
const numbersList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0']
const symbolsList = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '+'];
const lowercaseList = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
const uppercaseList = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

function generatePassword() {
  console.log("Hey! You pushed the button.");
  
  let userCharacters = prompt("How many characters(8-128) would you like your password to contain?");

  const passwordLength = parseInt(userCharacters)
  if (isNaN(passwordLength)) {
    window.alert("Please Enter A Number!")
    return
  }

  if (passwordLength < 8 && passwordLength > 128) {
    window.alert("Password Length Must Be Between 8 > 128")
    return
  }




let symbols = window.confirm("Click OK to confirm including special characters.");
  if (symbols === true) {
    characters.push(symbolsList)
  }
let numbers = window.confirm("Click OK to confirm including numeric characters.");
  if (numbers === true) {
  characters.push(numbersList)
}
let lowerCase = window.confirm("Click OK to confirm including lowercase characters.");
  if (lowerCase === true) {
  characters.push(lowercaseList)
}
let upperCase = window.confirm("Click OK to confirm including uppercase characters.");
  if (upperCase === true) {
  characters.push(uppercaseList)
}

let generatedPassword = ""

for (var i = 0; i < passwordLength; i++) {
  let randomList = getRandomItem(characters)
  let randomChar = getRandomItem(randomList)
  generatedPassword += randomChar
  }
return generatedPassword
  }
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;
  
  
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);