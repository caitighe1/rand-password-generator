var generateBtn = document.querySelector("#generate");

var numberSet = [0,1,2,3,4,5,6,7,8,9];
var lowerCase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upperCase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specialChar = ["'","!","(",")","?","[","]","`","~",";",":","@","#","$","%","^","&","*","+","="];

var confirmNumbers;
var confirmUpperCase;
var confirmLowerCase;
var confirmSpecialChar;
var confirmLength;

  function userInput () {
    var confirmLength = parseInt(prompt("Please enter desired password length (8-128), hit OK"));
 
    if (isNaN(confirmLength === true) {
      alert("You must choose a number 8-128 to continue");
      return 
    }

    else if (confirmLength === null) {
      alert("You must create a password to continue");
      return
    }

    else if (confirmLength < 8 || confirmLength > 128) {
      alert("Please enter a number 8-128");
      return
    }

    confirmNumber = confirm("This password will include numbers");
    confirmLowerCase = confirm("This password will include lower case letters");
    confirmUpperCase = confirm("This password will include upper case letters");
    confirmSpecialChar = confirm("This password will include special characters");

 
  }

  function generatePassword() {
    var userData = userInput();

    var password = [];
    var chosenChar = [];
    var totalChar = [];
  }

  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  }



   generateBtn.addEventListener("click", writePassword)