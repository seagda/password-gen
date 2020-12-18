// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create variables that hold values of CAP letters, LOWER letters, nums, and special character
var nums = "01234567890";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var specChars = "!@#$%^&*+";

// Create empty array to capture user selections
var finalArray = [];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Create generatePassord function referenced above, complete with logic
function generatePassword() {

}

// Create confirm for special characters

var specialsQ = confirm("Do you want to include special characters?");
if(specialsQ === true){
  //push all the specials into the empty array
  finalArray = finalArray+specChars;
  console.log(finalArray);
}

/* Prompt for password length (between 8 and 128)  
var lengthQ = prompt("How many characters would you like? Choose a number between 8 and 128");

// Confirm inclusion of capital letters 
    var capsQ = confirm("Do you want to include capital letters?");

// Confirm inclusion of numerals  
    var numsQ = confirm("Do you want to include numbers?");
*/
//TODO: Create a conditional to validate input from prompt and AT LEAST one character type should be selected




// TODO: Create if/else statements and push selected characters into empty array

//  THEN a password is generated that matches the selected criteria
//  WHEN the password is generated
//  THEN the password is either displayed in an alert or written to the page



// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
