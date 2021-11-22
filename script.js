// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//===========================================
// Write password function generates a new 
// password by calling generatePassword()
// then updates the html text area with ID 
// #password
//===========================================

function writePassword() 
{ 
  console.log("running writePassword")
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//=========================================
// generatePassword function prompts the user 
// for a password length and character sets 
// to use, and returns a string with a random
// password of the requested length and char
// sets
//
// 8 > password length < 128 
// char set = [numbers, special, lowercase, uppercase]
//=========================================

function generatePassword()
{
  console.log("running generatePassword");

  const password_chars_numbers = ["0","1","2","3","4","5","6","7","8","9"];
  const password_chars_special = ["!","#","&","%","?"];
  const password_chars_lower   = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  const password_chars_upper   = ["A","B","C","D","E","F","G","h","I","J","K","l","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
  const password_chars_empty   = [];
  var   password_chars         = [];

  // get and bound check password length
  var password_length_random = 8 + Math.floor(Math.random() * 120);
  var password_length = prompt ("Please Enter Your Password Length",password_length_random);
  if (password_length < 8) {password_length = 8}
  if (password_length > 128) {password_length = 128}
  // end of password length code

  // password char set select 
  var select_numbers = prompt ("Do You Want To Include Numbers? (y/n)","y");
  if (select_numbers == "y") {password_chars = password_chars.concat(password_chars_numbers)}

  var select_special = prompt ("Do You Want To Include Special Characters? (y/n)","y");
  if (select_special == "y") {password_chars = password_chars.concat(password_chars_special)}

  var select_lower = prompt ("Do You Want To Include Lowercase Letters? (y/n)","y");
  if (select_lower == "y") {password_chars = password_chars.concat(password_chars_lower)}

  var select_upper = prompt ("Do You Want To Include Uppercase Letters? (y/n)","y");
  if (select_upper == "y") {password_chars = password_chars.concat(password_chars_upper)}

  // if no set is selected, then add all the sets
  if (password_chars.length == 0) {
    console.log ("no char set selected, using all sets")
    password_chars         = password_chars_empty.concat(
      password_chars_numbers,
      password_chars_special,
      password_chars_lower,
      password_chars_upper
    )
  }

  // end password char set select 

  // generate a new password of length password_length from characters in an array password_chars

  var new_password = "";
  for (let i = 0; i < password_length; i++) {
    var new_password_index = Math.floor(Math.random() * password_chars.length);
    var new_password_char = password_chars[new_password_index];
    new_password = new_password + new_password_char;

    //console.log("picked char " + i + " of " + password_length + " is " + new_password_char)
  }

  // end of new password

  console.log("new password is " + new_password + " of size " + password_length + " characters long")
  return new_password;

}

