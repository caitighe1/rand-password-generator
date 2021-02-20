// Assignment Code
var generateBtn = document.querySelector("#generate");

generateBtn.addEventListener("click", generatePassword);

function generatePassword () {
  var newUser = prompt("Please enter desired password length (8-128), hit OK");
}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
