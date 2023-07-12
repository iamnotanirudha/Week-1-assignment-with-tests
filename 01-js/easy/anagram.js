/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.

  Once you've implemented the logic, test your code by running
  - `npm run test-anagram`
*/

function isAnagram(str1, str2) { 
  str1 = str1.toLowerCase()
  str2 = str2.toLowerCase()

  if(str1.length !== str2.length){
    return false
  } else {
    var string1 = str1.split("").sort().join()
    var string2 = str2.split("").sort().join()

   console.log(string1)

    if(string1 === string2){
      return true 
    } else {
      return false
    }
  }

}

console.log(isAnagram('bad Credit','Bad Credit'))

module.exports = isAnagram;