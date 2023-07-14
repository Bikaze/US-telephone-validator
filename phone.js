/*This function checks whether a US(United States) phone number is valid and returns
true if valid and false otherwise*/

function telephoneCheck(str) { // The variable 'str' is the input phone-number
  let regx = /^1?\s?\d{3}[\s-]?\d{3}[\s-]?\d{4}$|^1?\s?[(]\d{3}[)][\s-]?\d{3}[\s-]?\d{4}$/; //Check validity using regular expressions
  return regx.test(str); //Use test() function to return true or false
}
