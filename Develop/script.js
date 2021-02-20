// Creating Arrays //
var numberSet = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!()?[]`~;:!@#$%^&*+=";

var passwordLength;
var confirmUpperCase;
var confirmLowerCase;
var confirmNumber;
var confirmSpecialChar;



// Assignment Code
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
document.querySelector("#generate").addEventListener("click", writePassword)




// Write password to the #password input
function generatePassword() {

  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  var passwordLength = prompt("Please enter desired password length (8-128), hit OK");

  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please enter a number 8-128");
  }





  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


document.querySelector() desiredPasswordLength.value;

if (validInput === isNaN) {
  alert("Please enter a number 8-128");
}
else if (validInput < 8 || desiredPasswordLength > 128) {
  alert("Please enter a number 8-128")

}
else if (validInput === "")
alert("Field cannot be empty")
}


