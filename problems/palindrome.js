function isPalindrome(string) {
  for (let index = 0; index < string.length / 2; index++) {
    if (string[index] !== string[string.length - 1 - index])
      return "string not palindrome";
  }
  return "string is palindrome";
}

function isPalindromeRec(string, index = 0) {
  if (index === Math.floor(string.length / 2)) return "string is palindrome";
  if (string[index] !== string[string.length - 1 - index])
    return "string not palindrome";
  return isPalindromeRec(string, index + 1);
}

function isPalindromeRec2(string) {
  if (string.length === 1) return "string is p[alindrom";
  if (string[0] !== string[string.length - 1]) return "string not palindrome";
  return isPalindromeRec(string.substring(1, string.length - 1));
}

console.log(isPalindrome("ganesh"));
console.log(isPalindromeRec("naman"));
console.log(isPalindromeRec2("ganesh"));
