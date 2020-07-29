const findLongestWord = (str) => {
  return str.split(" ").sort((a, b) => {
    return b.length - a.length;
  })[0];
};
console.log(findLongestWord("The quick brown fox jumped over the lazy dog")); // 'jumped'

console.log(findLongestWord("Google do a roll")); // 'Google'

console.log(findLongestWord("May the force be with you")); // 'force'