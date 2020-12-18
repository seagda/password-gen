// Assignment Code
var generateBtn = document.querySelector("#generate");

// Create Global variables that hold values of CAP letters, LOWER letters, nums, and special characters
var nums = "01234567890";
var caps = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var lower = "abcdefghijklmnopqrstuvwxyz";
var specChars = "!@#$%^&*+";

// Create empty array to capture user selections
var finalArray = [];


// Create generatePassord function referenced above, complete with logic
function generatePassword() {

  // Create confirm for special characters

  var specialsQ = confirm("Do you want to include special characters?");
  if (specialsQ === true) {
    //push all the specials into the empty array
    finalArray = finalArray + specChars;
    console.log(finalArray);
  }

  // Confirm inclusion of capital letters 
  var capsQ = confirm("Do you want to include capital letters?");
  if (capsQ === true) {
    //push all the Caps and the Lowers into the empty array
    finalArray = finalArray + caps + lower;
    console.log(finalArray);
  } else {
    // just push the lowercase, which ensures they've entered something
    finalArray = finalArray + lower;
    console.log(finalArray);
  }

  // Confirm inclusion of numerals  
  var numsQ = confirm("Do you want to include numbers?");
  if (numsQ === true) {
    //push all the numerals into the empty array
    finalArray = finalArray + nums;
    console.log(finalArray);
  }

  // Prompt for password length (between 8 and 128)  
  var pwdLength = prompt("How many characters would you like? Choose a number between 8 and 128");
  console.log(pwdLength);

  // Create conditional for number length
  if (pwdLength < 8 || pwdLength > 128) {
    alert("Please choose a number between 8 and 128");
  } else if (pwdLength === null) {
    alert("Please choose a number between 8 and 128");
  } else if (isNaN(pwdLength)) {
    alert("Please choose a NUMBER between 8 and 128");
  }
  console.log(pwdLength);
 
  // Create a final variable to hold our password
  var finalPwd;

  // Create for loop over final array to figure out how many characters

  for (var i = 0; i < pwdLength; i++) {
    var randomized = Math.floor(Math.random() * finalArray.length);
    finalPwd += finalArray[randomized];
  }

  //  THEN a password is generated that matches the selected criteria

  console.log(finalPwd);

}


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
