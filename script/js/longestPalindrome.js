// 5. Longest Palindromic Substring
// Medium

// 11486

// 720

// Add to List

// Share
// Given a string s, return the longest palindromic substring in s.

// Example 1:

// Input: s = "babad"
// Output: "bab"
// Note: "aba" is also a valid answer.
// Example 2:

// Input: s = "cbbd"
// Output: "bb"
// Example 3:

// Input: s = "a"
// Output: "a"
// Example 4:

// Input: s = "ac"
// Output: "a"

// Constraints:

// 1 <= s.length <= 1000
// s consist of only digits and English letters (lower-case and/or upper-case),

/**
 * @param {string} s
 * @return {string}
 */

// pseudo code
// check base case: if s is an empty string => return 0
// else loop through string starting from long end (backwards) and check if substring is a palindrome
// have to write helper function to check isPalindrome
// return max length
var longestPalindrome = function (s) {
  if (s.length === 1 || s.length === 0 || sameLetters(s)) return s;
  let max = 0;
  let longest = "";
  for (let i = 0; i < s.length - 1; i++) {
    if (isPalindrome(s[i])) {
      if (s[i].length >= max) {
        max = s[i].length;
        longest = s[i];
      }
    }
    for (let j = i + 1; j < s.length; j++) {
      let subStr = s.substring(i, j + 1);
      if (isPalindrome(subStr)) {
        if (subStr.length >= max) {
          max = subStr.length;
          longest = subStr;
        }
      }
      // console.log(subStr, 'subStr');
    }
  }
  return longest;
};

const isPalindrome = (s) => {
  let loopLength = s.length;
  if (loopLength % 2 !== 0) {
    loopLength++;
  }
  let j = s.length - 1;
  for (let i = 0; i < loopLength; i++) {
    if (s[i] !== s[j]) {
      return false;
    }
    j--;
  }
  return true;
};

const sameLetters = (s) => {
  for (let i = 0; i < s.length; i++) {
    if (s[i] !== s[0]) return false;
  }
  return true;
};
