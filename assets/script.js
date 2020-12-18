// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create Global variables that hold values of CAP letters, LOWER letters, nums, and special characters
var nums = "0123456789";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var specChars = "!@#$%^&*+";

// Create empty array to capture user selections
var finalString = "";


// Create generatePassord function referenced above, complete with logic
function generatePassword() {

  // Create confirm for special characters

  var specialsQ = confirm("Do you want to include special characters?");
  if (specialsQ === true) {
    //push all the specials into the empty array
    finalString = finalString + specChars;
    console.log(finalString);
  }

  // Confirm inclusion of capital letters 
  var capsQ = confirm("Do you want to include capital letters?");
  if (capsQ === true) {
    //push all the Caps and the Lowers into the empty array
    finalString = finalString + caps + lower;
    console.log(finalString);
  } else {
    // just push the lowercase, which ensures they've entered something
    finalString = finalString + lower;
    console.log(finalString);
  }

  // Confirm inclusion of numerals  
  var numsQ = confirm("Do you want to include numbers?");
  if (numsQ === true) {
    //push all the numerals into the empty array
    finalString = finalString + nums;
    console.log(finalString);
  }

  // add all conditionals for password length verification

  var pwdLength = "";

  do {
    var isInvalid = false;

    // Prompt for password length (between 8 and 128)  
    pwdLength = prompt("How many characters would you like? Choose a number between 8 and 128");
    console.log(pwdLength);

    // Create conditionals for number length
    if (pwdLength < 8 || pwdLength > 128 || pwdLength === null || isNaN(pwdLength)) {
      alert("Please choose a NUMBER between 8 and 128");
      isInvalid = true;
    }
    console.log(pwdLength);
  } while (isInvalid)
  
  // Create a final variable to hold our password
  var finalPwd = "";

  // Create for loop over final array to figure out how many characters
  console.log(typeof finalString);

  for (var i = 0; i < pwdLength; i++) {
    var randomized = Math.floor(Math.random() * finalString.length);
    finalPwd += finalString[randomized];
  }

  //  THEN a password is generated that matches the selected criteria

  console.log(finalPwd);
  return finalPwd;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
