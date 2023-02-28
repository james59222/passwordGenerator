// Assignment code here
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
var mega = [];
var uppercase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var lowercase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var special = ["!", "@", "#", "$", "%", "^", "&", "*", "("];
var password = " ";



function generatePassword() {
  //console.log("Hello ")
  var userChoiceNumber = window.prompt("Choose a password length min 8 max 128");
  //console.log(userChoiceNumber);
  //need logic for 8-128 if passes no 7 or 129
  var upcase = window.confirm("Include Uppercase Letters?");
  //console.log(upcase);
  var lowcase = window.confirm("Include Lowercase Letters?");
  //console.log(lowcase);
  var numeric = window.confirm("Include Numbers?");
  //console.log(numeric);
  var specialCharacters = window.confirm("Include Special Characters?")
  //console.log(specialCharacters);



  if (numeric === true) {
    //console.log("mega: ",mega);
    mega = mega + numbers;
    //console.log("mega: ",mega);
    
  
  }
  if (upcase === true) {
    mega = mega + uppercase;
    //console.log("mega:", mega);
  }
  if (lowcase === true) {
    mega = mega + lowercase;
    //console.log("mega:" , mega);
  }
  if (specialCharacters === true) {
    mega = mega + special;
    //console.log("mega:" , mega);

  }
 
  for (let index = 0; index < userChoiceNumber; index++) {
   //console.log(mega[index]) 
   const random = Math.floor(Math.random() * mega.length);
   console.log(mega[random]); 
   password = password + mega[random] ;
   console.log(password);
  }

  return password;
  mega=[];

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
