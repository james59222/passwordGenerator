// Variables for all password characters and numbers that can be used

var numbers =["0123456789"];
var mega = [];
var uppercase = ["ABCDEFGHIJKLMNOPQRSTUVWXYZ"];
var lowercase = ["abcdefghijklmnopqrstuvwxyz"];
var special = ["!@#$%^&*()_+~\\`|}{[]:;?><,./-="];
var password = " ";


//Prompts for password length and whether to use uppercase, lowercase, numeric or special characters.
function generatePassword() {
  var userChoiceNumber = window.prompt("Choose a password length min 8 max 128");
  //need logic for 8-128 if passes no 7 or 129
  
  var upcase = window.confirm("Include Uppercase Letters?");
  var lowcase = window.confirm("Include Lowercase Letters?");
  var numeric = window.confirm("Include Numbers?");
  var specialCharacters = window.confirm("Include Special Characters?")
  

//logic if statements for choices
  if (numeric === true) {
    mega = mega + numbers;
    }

  if (upcase === true) {
    mega = mega + uppercase;
    }

  if (lowcase === true) {
    mega = mega + lowercase;
    }

  if (specialCharacters === true) {
    mega = mega + special;
    }
//code for determining password
  for (let index = 0; index < userChoiceNumber; index++) {
   const random = Math.floor(Math.random() * mega.length);
   console.log(mega[random]); 
   password = password + mega[random] ;
   console.log(password);
  }
  mega=[];
  return password;
  
 
}






// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
