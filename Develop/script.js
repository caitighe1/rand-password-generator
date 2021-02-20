var generateBtn = document.querySelector("#generate");
var password = "";
var passString = [];



// Creating Arrays //

generateBtn.addEventListener("click", generatePassword)

// Write password to the #password input

function generatePassword() {

  var numberSet = "0123456789";
  var lowerCase = "abcdefghijklmnopqrstuvwxyz";
  var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var specialChar = "!()?[]`~;:!@#$%^&*+=";




  var passwordLength = prompt("Please enter desired password length (8-128), hit OK");

  // If user puts in nothing //
  if (passwordLength === null) {
    alert("You must create a password to continue");
    return generatePassword();
  }
  // Making sure input is a number value //
  else if (isNan(passwordLength)) {
    alert("Please enter a number 8-128");
    return generatePassword();
  }

  else if (passwordLength < 8 || passwordLength > 128) {
    alert("Please pick a number 8-128");
    return generatePassword ();
   }

   var numbers = confirm("This password will include numbers");

   if (numbers) {

   }

   generateBtn.addEventListener("click", writePassword)