var generateBtn = document.querySelector("#generate");

// Created Arrays //

var allUpperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var allLowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];
var specialChar =  ["!","#","$","%","&","'","(",")","*","+",",","-",".","/","\:","\;","<","=",">","?", "@"];


var confirmLength;
var confirmSpecialChar;
var confirmNumber;
var confirmUpper;
var confirmLower;

// used parseInt to ensure that input is numeric //

function userOptions () {
  var confirmLength = parseInt(prompt("Please enter a number 8-128"));
   
// if statements to create prompts //

   if (isNaN(confirmLength) === true) {
     alert("Please choose a number 8-128");
     return 
   }
   if (confirmLength < 8) {
     alert("Please enter a number greater than 8");
     return
   }
   if (confirmLength > 128) {
     alert("Please enter a number less than 128");
     return
   }
  
   //confirmation of all parameters //
   
     confirmUpper = confirm("Do you wish to include Uppercase letters? Click OK to confirm.");
     confirmLower = confirm("Do you wish to include Lowercase letters? Click OK to confirm.");
     confirmNumber = confirm("Do you wish to include Numbers? Click OK to confirm.");
     confirmSpecialChar = confirm("Do you wish to include Special Characters such as '!' or '%'? Click OK to confirm.");
   

  // if there is no input on form //
  if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSpecialChar) {
    alert("You must select at least one criteria option.");
    return
    }
    

    var userCriteria = {
      confirmLength:confirmLength,
      confirmUpper:confirmUpper,
      confirmLower:confirmLower,
      confirmNumber:confirmNumber,
      confirmSpecialChar:confirmSpecialChar,
    }
    return userCriteria;
  }   

  // took format from google for math.random function
  function randomChar(array) {
    var index = Math.floor(Math.random() * array.length);
    var element = array[index];
  
    return element;
  }
  
  
  
  function generatePassword() {
    var userCriteria = userOptions();
  
    var password = [];
    var chosenChar = [];
    var charsInc = [];

    
  
  // used concat operator to add and push new characters to next part of loop //
    if (userCriteria.confirmSpecialChar) {
      charsInc = charsInc.concat(specialChar);
      chosenChar.push(randomChar(specialChar));
    }
  
    if (userCriteria.confirmNumber) {
      charsInc = charsInc.concat(numbers);
      chosenChar.push(randomChar(numbers));
    }
  
    if (userCriteria.confirmUpper) {
      charsInc = charsInc.concat(allUpperCase);
      chosenChar.push(randomChar(allUpperCase));
    }
  
    if (userCriteria.confirmLower) {
      charsInc = charsInc.concat(allLowerCase);
      chosenChar.push(randomChar(allLowerCase));
    }
  
    document.getElementById('generate').addEventListener("click", generatePassword);
    // used for making sure loop is more than 0 //

    for(var i=0; i < userCriteria.confirmLength; i++) {
      var possibleChar = randomChar(charsInc);
      password.push(possibleChar);
    }
    
    // ensures that character length chosen and output is the same //
    
    for(var i=0; i < chosenChar.length; i++) {
      password[i] = chosenChar[i];
    }
  
    //.join creates the character set //
    return password.join(" ");
      
  }
  
  function writePassword() {
    var password = generatePassword();
    var passwordText = document.querySelector("#password");
  
  
  
    passwordText.value = password;
  
  }
  

  generateBtn.addEventListener("click", writePassword);