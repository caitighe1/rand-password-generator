var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

// Creating Arrays //

var numberSet = "0123456789";
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var specialChar = "!()?[]`~;:!@#$%^&*+=";





// Write password to the #password input

function generatePassword() {

  var password = "";
  var passwordLength = prompt("Please enter desired password length (8-128), hit OK");

  
  if (passwordLength < 8 || passwordLength > 128) {
    alert("Please pick a number 8-128")
    return;
  }

    
 

