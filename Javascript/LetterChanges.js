/*
Letter Changes
Have the function LetterChanges(str) take the str parameter being passed and modify it using the following algorithm. 
Replace every letter in the string with the letter following it in the alphabet (ie. c becomes d, z becomes a). 
Then capitalize every vowel in this new string (a, e, i, o, u) and finally return this modified string.
*/

const VOWELS = [ 'a', 'e', 'i', 'o', 'u' ];

const ALPHABET = [ 
  'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j',
  'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 
  't', 'u', 'v', 'w', 'x', 'y', 'z' ];

function LetterChanges(data) { 
  let response = '';
  
  for(let i = 0; i < data.length; i++) {
    let char = SearchNextChar(data[i]);
    char = CapitalizeEveryVowel(char);
    
    response += char;
  }

  return response;
}

function SearchNextChar(char) {
  let response = SearchNextAlphabet(char);
  if (response !== undefined)
    return response;

  response = SearchNextNumber(char);
  if (response !== undefined)
    return response;

  response = SearchNextSymbol(char);
  if (response !== undefined)
    return response;
}

function SearchNextAlphabet(char) {
  let index = ALPHABET.indexOf(char)
  if (index === -1)
    return char;

  index = index >= ALPHABET.length ? 0 : index + 1;

  return ALPHABET[index];
}

function CapitalizeEveryVowel(char) {
  const index = VOWELS.indexOf(char);
  if (index >= 0)
    char = char.toUpperCase();

  return char;
}
   
// keep this function call here 
console.log(LetterChanges(readline()));