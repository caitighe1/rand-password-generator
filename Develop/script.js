var generateBtn = document.querySelector("#generate");

// Variable Arrays for character confirmation //

var allUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar =  ["!", "#", "$", "%", "&", "'", "(", ")", "*", "+", ",", "-", ".", "/", "\:", "\;", " < ", "=", " > ", " ? ", "@", "[", "\\", "]", " ^ ", "_", "`", "{", "|", "}", "~"];

// Criteria options
var confirmLength;
var confirmSpecialChar;
var confirmNumber;
var confirmUpper;
var confirmLower;

// parseInt - this will 

function userOptions () {
  var confirmLength = parseInt(prompt("Your password must be between 8 and 128 characters. Please enter a whole number to set the length of your password."));
   
// break into separate statements
// adding return ends the function

   if (isNaN(confirmLength) === true) {
     alert("Please choose a valid number.");
     return 
   }
   if (confirmLength < 8) {
     alert("Please enter a number greater than 8.");
     return
   }
   if (confirmLength > 128) {
     alert("Please enter a number less than 128.");
     return
   }
  // Once length is confirmed, user can add criteria
  // making a confirm as a var will hold the response
   
     confirmUpper = confirm("Do you wish to include Uppercase letters? Click OK to confirm.");
     confirmLower = confirm("Do you wish to include Lowercase letters? Click OK to confirm.");
     confirmNumber = confirm("Do you wish to include Numbers? Click OK to confirm.");
     confirmSpecialChar = confirm("Do you wish to include Special Characters such as '!' or '%'? Click OK to confirm.");
   

  //  If the person selects nothing for criteria
  if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSpecialChar) {
    alert("You must select at least one criteria option. For the highest security, select all four options.");
    return
    }
    
// Object for criteria options
    var userCriteria = {
      confirmLength:confirmLength,
      confirmUpper:confirmUpper,
      confirmLower:confirmLower,
      confirmNumber:confirmNumber,
      confirmSpecialChar:confirmSpecialChar,
    }
    return userCriteria;
  }   

  // function is created to call randomly pull a character from the arrays
  function randomChar(array) {
    var index = Math.floor(Math.random() * array.length);
    var element = array[index];
  
    return element;
  }
  
  // 3 arrays 1- for password 2- for chosen char 3- characters to include
  function generatePassword() {
    var userCriteria = userOptions();
  
    var password = [];
    var chosenChar = [];
    var charsInc = [];
  
  // use . to get to an objects properties
  // make an if statement for each character option
    if (userCriteria.confirmSpecialChar) {
      charsInc = charsInc.concat(specialChar);
      chosenChar.push(randomChar(specialChar));
    }
  
    if (userCriteria.confirmNumber) {
      charsInc = charsInc.concat(number);
      chosenChar.push(randomChar(number));
    }
  
    if (userCriteria.confirmUpper) {
      charsInc = charsInc.concat(allUpper);
      chosenChar.push(randomChar(allUpper));
    }
  
    if (userCriteria.confirmLower) {
      charsInc = charsInc.concat(allLower);
      chosenChar.push(randomChar(allLower));
    }
  // created the loop to check length. If greater than zero keep checking
    for(var i=0; i < userCriteria.confirmLength; i++) {
      var possibleChar = randomChar(charsInc);
      password.push(possibleChar);
    }
  // This loop should match the password with the length chosen in confirmLength var.
    for(var i=0; i < chosenChar.length; i++) {
      password[i] = chosenChar[i];
    }
  // Include a return call? 
    return password.join(" ");
      
  }
  
  // Write password to the #password input
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
  
  
    passwordText.value = password;
  
  }
  
  // Add event listener to generate button
  generateBtn.addEventListener("click", writePassword);