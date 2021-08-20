// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowercase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var uppercase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var specials = ["!","@","#","$","%","^","&","*","(",")","_","+","?","{","}","~","-","."];
var integer = ["0","1","2","3","4","5","6","7","8","9"];

// Write password to the #password input
function writePassword() {
  function generatePassword() {
    var options = [];
    var char = prompt("How many characters would you like your password to have?");
    if ((char == "") || (isNaN(char))){
      alert("Must enter a number");
      return;
    }

    if (char === null) {
      return;
    }

    if (char < 8) {
      alert("Password must be at least 8 characters");
      return;
    }
    else if (char > 128) {
      alert("Password must be 128 characters or less");
      return;
    }
    var guarantee = [];
    var lower = confirm("Click OK to confirm including lowercase letters");
    if (lower === true) {
      options = options.concat(lowercase)
      guarantee.push(lowercase[Math.floor(Math.random()*lowercase.length)]);
    }

    var upper = confirm("Click OK to confirm including uppercase letters");
    if (upper === true) {
      options = options.concat(uppercase)
      guarantee.push(uppercase[Math.floor(Math.random()*uppercase.length)]);
    }

    var special = confirm("Click OK to confirm including special characters");
    if (special === true) {
      options = options.concat(specials)
      guarantee.push(specials[Math.floor(Math.random()*specials.length)]);
    }

    var number = confirm("Click OK to confirm including numbers");
    if (number === true) {
      options = options.concat(integer)
      guarantee.push(integer[Math.floor(Math.random()*integer.length)]);
    }
    var pwd = guarantee;
    console.log(options);
    for (var i = guarantee.length; i < char; i++) {
      pwd.push(options[Math.floor(Math.random()*options.length)]);
    }
    pwd = pwd.join('');
    return pwd;
    
  }
  

  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
