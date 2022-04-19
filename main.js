'use strict';

// brings in the assert module for unit testing
const assert = require('assert');
// brings in the readline module to access the command line
const readline = require('readline');
const { string } = require('stylelint/lib/formatters');
// use the readline module to print out to the command line
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const firstVowelIndex = (word) => {
  let vowels = ['a', 'e', 'i', 'o', 'u'];
let wordArray = word.split("")
let indexCounter = 0
for (let i = 0; i < wordArray.length; i++) {
  if(vowels.includes(wordArray[i])) {
    return indexCounter
  }else {
    indexCounter++
  }

}
}
const pigLatin = (word) => {
  word = word.toLowerCase().trim(" ")
  let answerIndex = firstVowelIndex(word)

if(answerIndex == 0) {
  return word + 'yay'
}
if(answerIndex == 1) {
  let firstLetter = word.charAt(0)
  let partialWord = word.slice(1)
  return partialWord + firstLetter + 'ay'
}
if(answerIndex == 2) {
  let firstLetter = word.charAt(0)
  let secondLetter = word.charAt(1)
  let partialWord = word.slice(2)
  return partialWord + firstLetter + secondLetter + 'ay'
}
if(answerIndex == 3) {
  let firstLetter = word.charAt(0)
  let secondLetter = word.charAt(1)
  let thirdLetter = word.charAt(2)
  let partialWord = word.slice(3)
  return partialWord + firstLetter + secondLetter + thirdLetter + 'ay'
}




// the first function called in the program to get an input from the user
// to run the function use the command: node main.js
// to close it ctrl + C
const getPrompt = () => {
  rl.question('word ', (answer) => {
    console.log( pigLatin(answer) );
    getPrompt();
  });
}

// Unit Tests
// to use them run the command: npm test main.js
// to close them ctrl + C
if (typeof describe === 'function') {

  describe('#pigLatin()', () => {
    it('should translate a simple word', () => {
      assert.equal(pigLatin('car'), 'arcay');
      assert.equal(pigLatin('dog'), 'ogday');
    });
    it('should translate a complex word', () => {
      assert.equal(pigLatin('create'), 'eatecray');
      assert.equal(pigLatin('valley'), 'alleyvay');
    });
    it('should attach "yay" if word begins with vowel', () => {
      assert.equal(pigLatin('egg'), 'eggyay');
      assert.equal(pigLatin('emission'), 'emissionyay');
    });
    it('should lowercase and trim word before translation', () => {
      assert.equal(pigLatin('HeLlO '), 'ellohay');
      assert.equal(pigLatin(' RoCkEt'), 'ocketray');
    });
  });
} else {

  getPrompt();

}






// **********
//   HINTS
// **********

// break your code into pieces and focus on one piece at a time...
// 1. if word begins with a vowel send to one function: adds "yay"
// 2. if word begins with a consonant send to another function: splices off beginning, returns word with new ending.
// 3. if multiple words, create array of words, loop over them, sending them to different functions and creating a new array with the new words.
