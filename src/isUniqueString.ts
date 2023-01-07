// Determine if a string has all unique characters, what if you cannot use additional data structures?
/**
 * Function that determines if a string has all unique characters.
 * @param    {String} testWord   the word to test
 * @return   {Boolean}      result of algoritm if true or false
 */
export function isUniqueString(testWord: string): boolean {
  const newMap = new Map(
    testWord.split("").map((character) => [character, character])
  );
  return newMap.size === testWord.length;
}

/**
 * Function that determines if a string has all unique characters without using a second data structure (Map).
 * @param    {String} testWord   the word to test
 * @return   {Boolean}      result of algoritm if true or false
 */
export function isUniqueStringNoAdditional(testWord: string): boolean {
  for (let index = 0; index < testWord.length; index++) {
    const character = testWord[index];
    const duplicateWithoutChar = testWord.replace(character, "");

    // O(n^2) as indexof has to loop the string again
    if (duplicateWithoutChar.indexOf(character) !== -1) {
      return false;
    }
  }
  return true;
}
