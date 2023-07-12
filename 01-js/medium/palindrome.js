/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function transformString(str){
  let answer = ""
  for(i = 0; i <= str.length - 1 ; i++)
  if(str[i] === ' ' || str[i] === ',' || str[i] === '?' || str[i] === '.' || str[i] == '!' ){
      
  } else answer += str[i]

  return answer
}


function reverse(str){
  let stringRev = ''
  for(i = str.length - 1 ; i >= 0 ; i--){
     stringRev += str[i].toLowerCase()      
  }
  console.log(stringRev)
  return stringRev
} 


function isPalindrome(str) {
  var str = str.toLowerCase()
  var transformedString = transformString(str)
  var reverseString = reverse(transformedString)

  if(transformedString === reverseString){
    return true
  } else return false   
}

console.log(isPalindrome('Race car'))

module.exports = isPalindrome;
